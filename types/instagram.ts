export type InstagramMediaType = "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";

export interface InstagramMediaItem {
  id: string;
  caption: string | null;
  media_type: InstagramMediaType;
  media_url: string;
  permalink: string;
  thumbnail_url?: string; // Provided for videos
  timestamp: string;
}

export interface InstagramPost {
  id: string;
  caption: string | null;
  mediaType: InstagramMediaType;
  mediaUrl: string;
  thumbnailUrl?: string;
  permalink: string;
  publishedAt: string;
}


