import { NextRequest, NextResponse } from "next/server";
import { fetchChannelVideos, getChannelIdFromHandle } from "@/lib/youtube";
import { BLOCKED_VIDEO_IDS } from "@/lib/constants";
import { VideoContent } from "@/types/video";

const YOUTUBE_CHANNEL_HANDLE = "@bigbmeetup"; // YouTube channel handle

// Helper function to check if a video is blocked
function isVideoBlocked(videoId: string): boolean {
  return BLOCKED_VIDEO_IDS.some((blockedId) => blockedId === videoId);
}

/**
 * GET /api/youtube/videos
 * Fetch videos from YouTube channel
 * Query params:
 * - maxResults: number of videos to fetch (default: 50)
 * - pageToken: pagination token for next page
 */
export async function GET(request: NextRequest) {
  try {
    const apiKey = process.env.YOUTUBE_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json(
        { error: "YouTube API key not configured" },
        { status: 500 }
      );
    }

    const searchParams = request.nextUrl.searchParams;
    const maxResults = parseInt(searchParams.get("maxResults") || "50", 10);
    const pageToken = searchParams.get("pageToken") || undefined;

    // Get channel ID from handle
    const channelId = await getChannelIdFromHandle(YOUTUBE_CHANNEL_HANDLE, apiKey);
    
    if (!channelId) {
      return NextResponse.json(
        { error: "Channel not found" },
        { status: 404 }
      );
    }

    // Fetch videos
    const result = await fetchChannelVideos(channelId, apiKey, maxResults, pageToken);

    // Filter out blocked videos
    const filteredVideos = result.videos.filter(
      (video: VideoContent) => !isVideoBlocked(video.youtubeId)
    );

    // Cache for 1 hour
    return NextResponse.json(
      {
        videos: filteredVideos,
        nextPageToken: result.nextPageToken,
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return NextResponse.json(
      { error: "Failed to fetch videos", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}

