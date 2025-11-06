/**
 * YouTube Data API v3 Client
 * 
 * This module provides functions to interact with the YouTube Data API v3.
 * All API calls should be made server-side through API routes to protect the API key.
 */

import { VideoContent } from "@/types/video";

export interface YouTubeVideoItem {
  id: string;
  snippet: {
    title: string;
    description: string;
    publishedAt: string;
    thumbnails: {
      default: { url: string; width: number; height: number };
      medium: { url: string; width: number; height: number };
      high: { url: string; width: number; height: number };
      standard: { url: string; width: number; height: number };
      maxres?: { url: string; width: number; height: number };
    };
    channelTitle: string;
    tags?: string[];
  };
  contentDetails?: {
    duration: string; // ISO 8601 duration format (e.g., "PT5M23S")
  };
  statistics?: {
    viewCount: string;
    likeCount: string;
  };
}

export interface YouTubeChannelResponse {
  items: YouTubeVideoItem[];
  nextPageToken?: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}

/**
 * Convert ISO 8601 duration to readable format (e.g., "PT5M23S" -> "5:23")
 */
export function formatDuration(duration: string): string {
  if (!duration) return "";
  
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return "";

  const hours = parseInt(match[1] || "0", 10);
  const minutes = parseInt(match[2] || "0", 10);
  const seconds = parseInt(match[3] || "0", 10);

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

/**
 * Determine if a video is a Short based on duration (60 seconds or less)
 */
export function isShort(duration: string): boolean {
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return false;

  const hours = parseInt(match[1] || "0", 10);
  const minutes = parseInt(match[2] || "0", 10);
  const seconds = parseInt(match[3] || "0", 10);

  const totalSeconds = hours * 3600 + minutes * 60 + seconds;
  return totalSeconds <= 60;
}

/**
 * Convert YouTube API video item to our VideoContent format
 */
export function mapYouTubeVideoToVideoContent(video: YouTubeVideoItem): VideoContent {
  const duration = video.contentDetails?.duration ? formatDuration(video.contentDetails.duration) : undefined;
  const category = video.contentDetails?.duration && isShort(video.contentDetails.duration) ? "short" : "episode";
  
  return {
    id: video.id,
    title: video.snippet.title,
    description: video.snippet.description,
    youtubeId: video.id,
    thumbnailUrl: video.snippet.thumbnails.maxres?.url || video.snippet.thumbnails.high?.url || video.snippet.thumbnails.medium?.url,
    duration,
    publishedAt: video.snippet.publishedAt.split("T")[0], // Extract date part from ISO string
    category,
  };
}

/**
 * Get YouTube channel ID from channel handle (e.g., "@bigbmeetup")
 * This requires a separate API call to resolve the handle to channel ID
 */
export async function getChannelIdFromHandle(handle: string, apiKey: string): Promise<string | null> {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=id&forHandle=${handle.replace("@", "")}&key=${apiKey}`
    );
    
    if (!response.ok) {
      throw new Error(`YouTube API error: ${response.statusText}`);
    }
    
    const data = await response.json();
    if (data.items && data.items.length > 0) {
      return data.items[0].id;
    }
    
    return null;
  } catch (error) {
    console.error("Error fetching channel ID:", error);
    return null;
  }
}

/**
 * Fetch videos from a YouTube channel
 * This function should be called server-side through an API route
 */
export async function fetchChannelVideos(
  channelId: string,
  apiKey: string,
  maxResults: number = 50,
  pageToken?: string
): Promise<{ videos: VideoContent[]; nextPageToken?: string }> {
  try {
    // First, get video IDs from channel uploads playlist
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`
    );
    
    if (!channelResponse.ok) {
      throw new Error(`YouTube API error: ${channelResponse.statusText}`);
    }
    
    const channelData = await channelResponse.json();
    if (!channelData.items || channelData.items.length === 0) {
      throw new Error("Channel not found");
    }
    
    const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;
    
    // Get videos from uploads playlist
    const playlistParams = new URLSearchParams({
      part: "snippet,contentDetails",
      playlistId: uploadsPlaylistId,
      maxResults: maxResults.toString(),
      key: apiKey,
    });
    
    if (pageToken) {
      playlistParams.append("pageToken", pageToken);
    }
    
    const playlistResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?${playlistParams.toString()}`
    );
    
    if (!playlistResponse.ok) {
      throw new Error(`YouTube API error: ${playlistResponse.statusText}`);
    }
    
    const playlistData = await playlistResponse.json();
    
    // Extract video IDs
    const videoIds = playlistData.items
      .map((item: any) => item.snippet.resourceId.videoId)
      .join(",");
    
    if (!videoIds) {
      return { videos: [], nextPageToken: playlistData.nextPageToken };
    }
    
    // Get detailed video information
    const videosParams = new URLSearchParams({
      part: "snippet,contentDetails,statistics",
      id: videoIds,
      key: apiKey,
    });
    
    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?${videosParams.toString()}`
    );
    
    if (!videosResponse.ok) {
      throw new Error(`YouTube API error: ${videosResponse.statusText}`);
    }
    
    const videosData = await videosResponse.json();
    
    const videos = videosData.items.map(mapYouTubeVideoToVideoContent);
    
    return {
      videos,
      nextPageToken: playlistData.nextPageToken,
    };
  } catch (error) {
    console.error("Error fetching channel videos:", error);
    throw error;
  }
}

/**
 * Fetch a single video by ID
 */
export async function fetchVideoById(videoId: string, apiKey: string): Promise<VideoContent | null> {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${apiKey}`
    );
    
    if (!response.ok) {
      throw new Error(`YouTube API error: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    if (!data.items || data.items.length === 0) {
      return null;
    }
    
    return mapYouTubeVideoToVideoContent(data.items[0]);
  } catch (error) {
    console.error("Error fetching video:", error);
    return null;
  }
}

/**
 * Get YouTube thumbnail URL from video ID
 */
export function getYouTubeThumbnail(videoId: string, quality: "default" | "medium" | "high" | "standard" | "maxres" = "maxres"): string {
  const qualityMap = {
    default: "default",
    medium: "mqdefault",
    high: "hqdefault",
    standard: "sddefault",
    maxres: "maxresdefault",
  };
  
  return `https://img.youtube.com/vi/${videoId}/${qualityMap[quality]}.jpg`;
}

/**
 * Get YouTube embed URL
 */
export function getYouTubeEmbedUrl(videoId: string): string {
  return `https://www.youtube.com/embed/${videoId}`;
}

/**
 * Get YouTube watch URL
 */
export function getYouTubeWatchUrl(videoId: string): string {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

