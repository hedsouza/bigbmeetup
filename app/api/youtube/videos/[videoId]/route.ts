import { NextRequest, NextResponse } from "next/server";
import { fetchVideoById } from "@/lib/youtube";
import { BLOCKED_VIDEO_IDS } from "@/lib/constants";

/**
 * Helper function to check if a video is blocked
 */
function isVideoBlocked(videoId: string): boolean {
  return BLOCKED_VIDEO_IDS.some((blockedId) => blockedId === videoId);
}

/**
 * GET /api/youtube/videos/[videoId]
 * Fetch a single video by ID
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ videoId: string }> }
) {
  try {
    const apiKey = process.env.YOUTUBE_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json(
        { error: "YouTube API key not configured" },
        { status: 500 }
      );
    }

    const { videoId } = await params;
    
    if (!videoId) {
      return NextResponse.json(
        { error: "Video ID is required" },
        { status: 400 }
      );
    }

    // Check if video is blocked
    if (isVideoBlocked(videoId)) {
      return NextResponse.json(
        { error: "Video not found" },
        { status: 404 }
      );
    }

    const video = await fetchVideoById(videoId, apiKey);

    if (!video) {
      return NextResponse.json(
        { error: "Video not found" },
        { status: 404 }
      );
    }

    // Cache for 1 hour
    return NextResponse.json(video, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Error fetching YouTube video:", error);
    return NextResponse.json(
      { error: "Failed to fetch video", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}

