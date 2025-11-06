// TypeScript interfaces for Stories/Videos
// These interfaces are designed to be CMS-ready (compatible with future Sanity schemas)

export interface VideoContent {
  id: string;
  title: string;
  description: string;
  youtubeId: string; // YouTube video ID (from URL)
  thumbnailUrl?: string; // YouTube thumbnail URL (auto-generated from ID)
  duration?: string; // Video duration (e.g., "5:23")
  publishedAt: string; // Publication date (ISO format)
  category?: "episode" | "short"; // Episode or short
  // Future CMS fields:
  // slug?: string;
  // relatedPillars?: string[]; // References to pillar IDs
  // seoTitle?: string;
  // seoDescription?: string;
}

export type VideoId = string;

