# Media Articles Content

Add new media articles for the Media section by creating a JSON file in this directory. Each file name becomes the article `id`. For example, `community-wellness-drive.json` produces the id `community-wellness-drive`.

## Metadata fields

- `title` (recommended): Display title for the article card.
- `publication` (recommended): Publication or outlet name (e.g., `Gulf Times`).
- `publicationDate` (recommended): ISO-8601 date string (`YYYY-MM-DD`). The UI falls back gracefully if it’s missing or unclear.
- `imageFilename` or `imageUrl` (**one required**): Either reference a file in `public/images/articles` or provide a full URL.
- `excerpt`: Short summary for the card or modal.
- `fullArticleUrl`: External link to the full story (if available).
- `category`: `"news" | "feature" | "event" | "interview"` (extendable later).
- `tags`: Array of keywords for future filtering.
- `notes`: Internal notes from OCR/manual review (displayed in the modal).

## Regenerating the data file

Run the generator to rebuild `lib/data/articles.generated.ts`:

```bash
npm run generate:media
```

This command also runs automatically before `npm run build`.

## AI-assisted extraction (optional)

You can bootstrap JSON files directly from the scanned clippings using OpenAI’s Vision API.

1. Ensure every article image lives in `public/images/articles`.
2. Set your OpenAI API key (one-time):
   ```bash
   export OPENAI_API_KEY=sk-...
   ```
3. Install dependencies if you haven’t already:
   ```bash
   npm install
   ```
4. Run the extractor (dry run first if you want to preview output):
   ```bash
   npm run extract:articles -- --dry-run
   ```
5. When you’re happy, run without `--dry-run` to write JSON files. Use `--force` to overwrite existing files and `--limit=<number>` to process just a few images.
6. Finish by regenerating the data file (`npm run generate:media`).

Always proofread the generated metadata—the AI can misread low-resolution scans.

## Image guidelines

- Place article images in `public/images/articles`.
- Use descriptive file names if possible.
- Aim for 3:2 or 4:3 aspect ratios to maintain card consistency.

