import { Metadata } from "next";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getYouTubeThumbnail, getYouTubeWatchUrl } from "@/lib/youtube";
import { VideoContent } from "@/types/video";
import { Calendar, Clock, ExternalLink, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

interface StoriesPageProps {
  searchParams: Promise<{
    category?: string;
    search?: string;
    page?: string;
  }>;
}

/**
 * Fetch videos from API
 */
async function getVideos(): Promise<VideoContent[]> {
  try {
    // Server-side fetch - use relative URL which Next.js handles correctly
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const apiUrl = `${baseUrl}/api/youtube/videos?maxResults=50`;
    
    const response = await fetch(apiUrl, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      return [];
    }

    const data = await response.json();
    return data.videos || [];
  } catch (error) {
    console.error("Error fetching videos:", error);
    return [];
  }
}

export const metadata: Metadata = {
  title: "Stories of Impact | bigbmeetup",
  description: "Watch our journey unfold through powerful stories and moments captured from our events and community engagements.",
  openGraph: {
    title: "Stories of Impact | bigbmeetup",
    description: "Watch our journey unfold through powerful stories and moments captured from our events and community engagements.",
  },
};

function VideoCard({ video }: { video: VideoContent }) {
  const thumbnailUrl = video.thumbnailUrl || getYouTubeThumbnail(video.youtubeId);
  const watchUrl = `/video/${video.youtubeId}`;

  return (
    <Link href={watchUrl} className="block">
      <Card className="overflow-hidden group cursor-pointer h-full transition-all duration-300 hover:shadow-xl">
        <div className="relative aspect-video overflow-hidden bg-neutral-charcoal/10">
          <Image
            src={thumbnailUrl}
            alt={video.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            unoptimized
          />
          {video.category && (
            <div className="absolute top-3 left-3">
              <Badge
                variant={video.category === "episode" ? "default" : "secondary"}
                className="bg-primary-maroon/90 text-white"
              >
                {video.category === "episode" ? "Episode" : "Short"}
              </Badge>
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-heading font-bold text-lg text-neutral-charcoal mb-2 line-clamp-2">
            {video.title}
          </h3>
          <p className="text-sm font-body text-neutral-charcoal/70 mb-3 line-clamp-2">
            {video.description}
          </p>
          <div className="flex items-center gap-4 text-xs font-body text-neutral-charcoal/60">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>
                {new Date(video.publishedAt).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
            {video.duration && (
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{video.duration}</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

function VideosList({ videos, category, search }: { videos: VideoContent[]; category?: string; search?: string }) {
  let filteredVideos = videos;

  // Filter by category
  if (category && category !== "all") {
    filteredVideos = filteredVideos.filter((video) => video.category === category);
  }

  // Filter by search query
  if (search) {
    const searchLower = search.toLowerCase();
    filteredVideos = filteredVideos.filter(
      (video) =>
        video.title.toLowerCase().includes(searchLower) ||
        video.description.toLowerCase().includes(searchLower)
    );
  }

  if (filteredVideos.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg font-body text-neutral-charcoal/70 mb-4">
          No videos found matching your criteria.
        </p>
        <Link href="/stories">
          <Button variant="outline">Clear Filters</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredVideos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}

export default async function StoriesPage({ searchParams }: StoriesPageProps) {
  const resolvedSearchParams = await searchParams;
  const videos = await getVideos();
  const category = resolvedSearchParams.category || "all";
  const search = resolvedSearchParams.search || "";

  return (
    <main className="min-h-screen bg-background">
      <SectionWrapper id="stories" className="bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary-maroon mb-4">
              Stories of Impact
            </h1>
            <div className="w-24 h-1 bg-primary-maroon mx-auto mb-4"></div>
            <p className="text-lg font-body text-neutral-charcoal/80 max-w-3xl mx-auto leading-relaxed">
              Watch our journey unfold through powerful stories and moments captured from our events and community engagements.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex gap-2">
              <Link href="/stories?category=all">
                <Button
                  variant={category === "all" ? "default" : "outline"}
                  size="sm"
                  className={category === "all" ? "bg-primary-maroon text-white" : ""}
                >
                  All Videos
                </Button>
              </Link>
              <Link href="/stories?category=episode">
                <Button
                  variant={category === "episode" ? "default" : "outline"}
                  size="sm"
                  className={category === "episode" ? "bg-primary-maroon text-white" : ""}
                >
                  Episodes
                </Button>
              </Link>
              <Link href="/stories?category=short">
                <Button
                  variant={category === "short" ? "default" : "outline"}
                  size="sm"
                  className={category === "short" ? "bg-primary-maroon text-white" : ""}
                >
                  Shorts
                </Button>
              </Link>
            </div>
            <div className="text-sm font-body text-neutral-charcoal/70">
              Showing {videos.length} video{videos.length !== 1 ? "s" : ""}
            </div>
          </div>

          {/* Videos Grid */}
          <Suspense
            fallback={
              <div className="text-center py-12">
                <p className="text-lg font-body text-neutral-charcoal/70">Loading videos...</p>
              </div>
            }
          >
            <VideosList videos={videos} category={category} search={search} />
          </Suspense>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              asChild
              className="bg-primary-maroon text-white hover:bg-primary-maroon/90 font-heading font-semibold px-8 py-6 text-lg"
            >
              <a
                href="https://www.youtube.com/@bigbmeetup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Subscribe on YouTube
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}

