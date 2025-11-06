import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getYouTubeWatchUrl, getYouTubeThumbnail } from "@/lib/youtube";
import { VideoContent } from "@/types/video";
import { Calendar, Clock, ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ShareButton } from "./ShareButton";
import { VideoPlayer } from "./VideoPlayer";

interface VideoPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Fetch video data from API
 */
async function getVideo(videoId: string): Promise<VideoContent | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/youtube/videos/${videoId}`, {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching video:", error);
    return null;
  }
}

/**
 * Generate metadata for SEO
 */
export async function generateMetadata({ params }: VideoPageProps): Promise<Metadata> {
  const { slug } = await params;
  const video = await getVideo(slug);

  if (!video) {
    return {
      title: "Video Not Found | bigbmeetup",
    };
  }

  return {
    title: `${video.title} | bigbmeetup`,
    description: video.description,
    openGraph: {
      title: video.title,
      description: video.description,
      images: [
        {
          url: video.thumbnailUrl || getYouTubeThumbnail(video.youtubeId),
          width: 1280,
          height: 720,
          alt: video.title,
        },
      ],
      type: "video.other",
      url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/video/${video.youtubeId}`,
    },
    twitter: {
      card: "player",
      title: video.title,
      description: video.description,
      images: [video.thumbnailUrl || getYouTubeThumbnail(video.youtubeId)],
    },
  };
}

export default async function VideoPage({ params }: VideoPageProps) {
  const { slug } = await params;
  const video = await getVideo(slug);

  if (!video) {
    notFound();
  }

  const watchUrl = getYouTubeWatchUrl(video.youtubeId);

  return (
    <main className="min-h-screen bg-background">
      {/* Back Navigation */}
      <SectionWrapper className="py-6 border-b">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-neutral-charcoal hover:text-primary-maroon transition-colors font-body font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </SectionWrapper>

      {/* Video Player Section */}
      <SectionWrapper className="py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Video Player */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <VideoPlayer url={watchUrl} />
              </div>

              {/* Video Info */}
              <div className="mb-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h1 className="text-2xl sm:text-3xl font-heading font-bold text-neutral-charcoal flex-1">
                    {video.title}
                  </h1>
                  {video.category && (
                    <Badge
                      variant={video.category === "episode" ? "default" : "secondary"}
                      className="bg-primary-maroon/90 text-white shrink-0"
                    >
                      {video.category === "episode" ? "Episode" : "Short"}
                    </Badge>
                  )}
                </div>

                <div className="flex items-center gap-4 text-sm font-body text-neutral-charcoal/70 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {new Date(video.publishedAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  {video.duration && (
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{video.duration}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="border-primary-maroon text-primary-maroon hover:bg-primary-maroon hover:text-white"
                  >
                    <a
                      href={watchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      Watch on YouTube
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                  <ShareButton video={video} />
                </div>
              </div>

              {/* Description */}
              <div className="prose prose-neutral max-w-none">
                <p className="text-base font-body text-neutral-charcoal/80 leading-relaxed whitespace-pre-line">
                  {video.description}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h2 className="text-xl font-heading font-bold text-neutral-charcoal mb-4">
                  More Videos
                </h2>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg border border-neutral-charcoal/10 p-4">
                    <p className="text-sm font-body text-neutral-charcoal/70 mb-4">
                      Visit our YouTube channel for more videos and shorts.
                    </p>
                    <Button
                      size="sm"
                      className="w-full bg-primary-maroon text-white hover:bg-primary-maroon/90"
                      asChild
                    >
                      <a
                        href="https://www.youtube.com/@bigbmeetup"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        View Channel
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}

