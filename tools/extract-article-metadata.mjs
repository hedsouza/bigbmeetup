#!/usr/bin/env node

/**
 * Extract article metadata from images using the OpenAI Vision API.
 *
 * Usage:
 *   node tools/extract-article-metadata.mjs [--force] [--dry-run] [--limit=5]
 *
 * Requirements:
 *   - Set OPENAI_API_KEY in your environment.
 *   - Install dependencies: npm install openai
 *
 * Output:
 *   - Writes JSON files to content/articles/<slug>.json
 *   - Skips existing files unless --force is provided.
 */

import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import OpenAI from "openai";

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const ROOT_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const IMAGES_DIR = path.join(ROOT_DIR, "public", "images", "articles");
const OUTPUT_DIR = path.join(ROOT_DIR, "content", "articles");

const args = process.argv.slice(2);
const FORCE_WRITE = args.includes("--force");
const DRY_RUN = args.includes("--dry-run");
const LIMIT_ARG = args.find((arg) => arg.startsWith("--limit="));
const LIMIT = LIMIT_ARG ? Number.parseInt(LIMIT_ARG.split("=")[1], 10) : undefined;

async function ensureEnvironment() {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("Missing OPENAI_API_KEY. Set it in your environment before running this script.");
  }
}

async function ensureDirectories() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
}

async function listArticleImages() {
  const entries = await fs.readdir(IMAGES_DIR, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isFile() && IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase()))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));
}

function toSlug(filename) {
  const nameWithoutExtension = filename.replace(path.extname(filename), "");
  return nameWithoutExtension
    .replace(/[_\s]+/g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

async function readImageAsBase64(filename) {
  const filePath = path.join(IMAGES_DIR, filename);
  const data = await fs.readFile(filePath);
  return data.toString("base64");
}

function buildPrompt(filename) {
  return [
    "You are digitising a newspaper clipping for the community movement bigbmeetup.",
    "Analyze the attached article image and return a single compact JSON object with the following shape:",
    '',
    `{
  "title": string | null,
  "publication": string | null,
  "publicationDate": string | null,        // format: YYYY-MM-DD if known
  "excerpt": string | null,
  "fullArticleUrl": string | null,
  "category": "news" | "feature" | "event" | "interview" | null,
  "tags": string[] | null,
  "notes": string | null                    // uncertainties or additional context
}`,
    '',
    "Rules:",
    "- Respond with nothing except the JSON object.",
    "- Use null when information is missing or unreadable.",
    "- Keep strings concise; do not add commentary.",
    "- If the publication date is ambiguous, provide your best guess in ISO format (YYYY-MM-DD) and mention uncertainty in `notes`.",
    "- `tags` should be a short array of keywords or null.",
    "",
    `Image filename: ${filename}`,
  ].join("\n");
}

async function extractMetadataForImage(client, filename) {
  const base64 = await readImageAsBase64(filename);
  const mimeType = `image/${path.extname(filename).replace(".", "").toLowerCase() || "jpeg"}`;

  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    input: [
      {
        role: "user",
        content: [
          {
            type: "input_text",
            text: buildPrompt(filename),
          },
          {
            type: "input_image",
            image_url: `data:${mimeType};base64,${base64}`,
          },
        ],
      },
    ],
    max_output_tokens: 1200,
  });

  const textOutput =
    response?.output_text ??
    response?.output
      ?.flatMap((entry) => entry?.content ?? [])
      .filter((item) => item?.type === "output_text")
      .map((item) => item?.text)
      .join("\n");

  if (!textOutput || textOutput.trim().length === 0) {
    throw new Error("OpenAI returned an empty response.");
  }

  const sanitized = sanitizeModelJson(textOutput);

  let parsed;
  try {
    parsed = JSON.parse(sanitized);
  } catch (error) {
    throw new Error(`Failed to parse JSON: ${error.message}. Raw response: ${textOutput}`);
  }

  return parsed;
}

function sanitizeModelJson(raw) {
  return raw
    .trim()
    .replace(/^```json\s*/i, "")
    .replace(/^```/i, "")
    .replace(/```$/i, "")
    .trim();
}

async function writeArticleJson(slug, metadata, filename) {
  const targetPath = path.join(OUTPUT_DIR, `${slug}.json`);

  const payload = {
    imageFilename: filename,
    title: metadata.title?.trim() || undefined,
    publication: metadata.publication?.trim() || undefined,
    publicationDate: metadata.publicationDate?.trim() || undefined,
    excerpt: metadata.excerpt?.trim() || undefined,
    fullArticleUrl: metadata.fullArticleUrl?.trim() || undefined,
    category: metadata.category ?? undefined,
    tags: Array.isArray(metadata.tags) && metadata.tags.length > 0 ? metadata.tags : undefined,
    notes: metadata.notes?.trim() || undefined,
  };

  // Remove undefined values
  Object.keys(payload).forEach((key) => {
    if (payload[key] === undefined || payload[key] === "") {
      delete payload[key];
    }
  });

  const content = `${JSON.stringify(payload, null, 2)}\n`;

  if (DRY_RUN) {
    console.log(`[dry-run] Would write ${targetPath}:\n${content}`);
    return;
  }

  await fs.writeFile(targetPath, content, "utf8");
}

async function main() {
  await ensureEnvironment();
  await ensureDirectories();

  const files = await listArticleImages();

  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const results = [];

  for (const [index, filename] of files.entries()) {
    if (LIMIT && index >= LIMIT) break;

    const slug = toSlug(filename);
    const outputPath = path.join(OUTPUT_DIR, `${slug}.json`);
    const exists = await fs
      .access(outputPath)
      .then(() => true)
      .catch(() => false);

    if (exists && !FORCE_WRITE) {
      console.log(`Skipping ${filename} (metadata already exists).`);
      continue;
    }

    console.log(`Processing ${filename} → ${slug}.json`);

    try {
      const metadata = await extractMetadataForImage(client, filename);
      metadata.imageFilename = filename;
      await writeArticleJson(slug, metadata, filename);
      results.push({ filename, slug, status: "success" });
    } catch (error) {
      console.error(`Failed to process ${filename}: ${error.message}`);
      results.push({ filename, slug, status: "error", error: error.message });
    }
  }

  console.log("\nSummary:");
  const successes = results.filter((r) => r.status === "success").length;
  const failures = results.filter((r) => r.status === "error").length;
  console.log(`  Success: ${successes}`);
  console.log(`  Failed: ${failures}`);
  if (failures > 0) {
    results
      .filter((r) => r.status === "error")
      .forEach((result) => {
        console.log(`  - ${result.filename}: ${result.error}`);
      });
  }

  if (DRY_RUN) {
    console.log("\nNo files were written because --dry-run was enabled.");
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});

