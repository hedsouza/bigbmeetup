import "server-only";

import { cache } from "react";
import type { InstagramMediaItem, InstagramPost, InstagramMediaType } from "@/types/instagram";

const INSTAGRAM_GRAPH_ENDPOINT = "https://graph.instagram.com";
const INSTAGRAM_FIELDS = [
  "id",
  "caption",
  "media_type",
  "media_url",
  "permalink",
  "thumbnail_url",
  "timestamp",
].join(",");

const FALLBACK_POSTS: InstagramPost[] = [
  {
    id: "fallback-1",
    caption:
      "Community comes alive at bigbmeetup — celebrating art, culture, and togetherness in every moment.",
    mediaType: "IMAGE",
    mediaUrl: "/images/hero/83.jpg",
    permalink: "https://www.instagram.com/bigbmeetup/",
    publishedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "fallback-2",
    caption:
      "Highlights from our latest gathering inspiring purpose-driven collaboration across Qatar.",
    mediaType: "IMAGE",
    mediaUrl: "/images/hero/84.jpg",
    permalink: "https://www.instagram.com/bigbmeetup/",
    publishedAt: "2024-01-02T00:00:00Z",
  },
  {
    id: "fallback-3",
    caption:
      "bigbmeetup pillars in action: sport, sustainability, inclusion, and compassion powering the movement.",
    mediaType: "IMAGE",
    mediaUrl: "/images/hero/85.jpg",
    permalink: "https://www.instagram.com/bigbmeetup/",
    publishedAt: "2024-01-03T00:00:00Z",
  },
];

function mapInstagramMediaItem(item: InstagramMediaItem): InstagramPost {
  const thumbnailUrl = item.media_type === "VIDEO" ? item.thumbnail_url : undefined;

  return {
    id: item.id,
    caption: item.caption ?? null,
    mediaType: item.media_type as InstagramMediaType,
    mediaUrl: item.media_url,
    permalink: item.permalink,
    thumbnailUrl,
    publishedAt: item.timestamp,
  };
}

async function requestInstagramMedia(accessToken: string, limit: number): Promise<InstagramPost[]> {
  const params = new URLSearchParams({
    fields: INSTAGRAM_FIELDS,
    access_token: accessToken,
    limit: String(limit),
  });

  const response = await fetch(`${INSTAGRAM_GRAPH_ENDPOINT}/me/media?${params.toString()}`, {
    headers: {
      Accept: "application/json",
    },
    next: {
      revalidate: 900, // 15 minutes
    },
  });

  if (!response.ok) {
    throw new Error(`Instagram API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();

  if (!data?.data || !Array.isArray(data.data)) {
    return FALLBACK_POSTS;
  }

  return data.data.map(mapInstagramMediaItem);
}

/**
 * Fetch the latest Instagram posts for the configured account.
 * This function is cached to avoid redundant requests during a single render pass.
 */
export const getInstagramPosts = cache(async (limit = 6): Promise<InstagramPost[]> => {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!accessToken) {
    console.warn("INSTAGRAM_ACCESS_TOKEN is not configured. Falling back to static posts.");
    return FALLBACK_POSTS;
  }

  try {
    return await requestInstagramMedia(accessToken, limit);
  } catch (error) {
    console.error("Failed to fetch Instagram posts:", error);
    return FALLBACK_POSTS;
  }
});

export function getInstagramProfileUrl(): string {
  return process.env.NEXT_PUBLIC_INSTAGRAM_PROFILE_URL || "https://www.instagram.com/bigbmeetup/";
}


