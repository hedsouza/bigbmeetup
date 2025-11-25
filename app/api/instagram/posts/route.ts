import { NextRequest, NextResponse } from "next/server";
import { getInstagramPosts } from "@/lib/instagram";

/**
 * GET /api/instagram/posts
 * Returns latest Instagram posts for the configured account.
 * Optional query params:
 * - limit: number of posts to return (default: 6, max: 12)
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const limitParam = searchParams.get("limit");
    const limit = limitParam ? Math.min(parseInt(limitParam, 10) || 6, 12) : 6;

    const posts = await getInstagramPosts(limit);

    return NextResponse.json(
      { posts },
      {
        headers: {
          "Cache-Control": "public, s-maxage=900, stale-while-revalidate=3600",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching Instagram posts:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch Instagram posts",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}


