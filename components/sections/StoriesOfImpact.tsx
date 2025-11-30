"use client";

import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { FEATURED_VIDEOS, getYouTubeThumbnail, getYouTubeWatchUrl, YOUTUBE_CHANNEL_URL } from "@/lib/data/videos";
import { BLOCKED_VIDEO_IDS, FEATURED_VIDEO_IDS } from "@/lib/constants";
import { VideoContent } from "@/types/video";
import { motion } from "framer-motion";
import { Play, Calendar, Clock, ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

interface VideoCardProps {
  video: VideoContent;
  onClick?: () => void;
}

function VideoCard({ video, onClick }: VideoCardProps) {
  const thumbnailUrl = video.thumbnailUrl || getYouTubeThumbnail(video.youtubeId);
  const watchUrl = getYouTubeWatchUrl(video.youtubeId);

  return (
    <Card className="overflow-hidden group cursor-pointer h-full transition-all duration-300 hover:shadow-xl">
      <div className="relative aspect-video overflow-hidden bg-neutral-charcoal/10" onClick={onClick}>
        {/* Thumbnail Image */}
        <Image
          src={thumbnailUrl}
          alt={video.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          unoptimized // YouTube thumbnails don't need Next.js optimization
        />
        {/* Play Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/90 rounded-full p-4">
            <Play className="h-8 w-8 text-primary-maroon fill-primary-maroon" />
          </div>
        </div>
        {/* Category Badge */}
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
            <span>{new Date(video.publishedAt).toLocaleDateString("en-US", { month: "short", year: "numeric" })}</span>
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
  );
}

// Helper function to check if a video is blocked
function isVideoBlocked(videoId: string): boolean {
  return BLOCKED_VIDEO_IDS.some((blockedId) => blockedId === videoId);
}

// Helper function to check if a video is featured
function isVideoFeatured(videoId: string): boolean {
  return FEATURED_VIDEO_IDS.some((featuredId) => featuredId === videoId);
}

export function StoriesOfImpact() {
  // Filter blocked videos from initial state
  const filteredFeaturedVideos = FEATURED_VIDEOS.filter(
    (video) => !isVideoBlocked(video.youtubeId)
  );
  const [videos, setVideos] = useState<VideoContent[]>(filteredFeaturedVideos);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch videos from API
    async function fetchVideos() {
      try {
        // Add cache-busting to ensure fresh data
        const response = await fetch("/api/youtube/videos?maxResults=50", {
          cache: "no-store", // Ensure we get fresh data
        });
        if (response.ok) {
          const data = await response.json();
          if (data.videos && data.videos.length > 0) {
            // Filter out blocked videos (client-side safety check)
            const filteredVideos = data.videos.filter(
              (video: VideoContent) => !isVideoBlocked(video.youtubeId)
            );
            
            // Prioritize featured videos - get featured ones first, then fill with others
            const featuredVideos = filteredVideos.filter(
              (video: VideoContent) => isVideoFeatured(video.youtubeId)
            );
            const regularVideos = filteredVideos.filter(
              (video: VideoContent) => !isVideoFeatured(video.youtubeId)
            );
            
            // Combine: featured videos first, then regular videos up to 6 total
            const combinedVideos = [
              ...featuredVideos.slice(0, 6), // Up to 6 featured videos
              ...regularVideos.slice(0, Math.max(0, 6 - featuredVideos.length)) // Fill remaining slots
            ];
            
            setVideos(combinedVideos.slice(0, 6)); // Ensure max 6 videos
          }
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
        // Filter fallback videos too
        const filteredFallback = FEATURED_VIDEOS.filter(
          (video) => !isVideoBlocked(video.youtubeId)
        );
        setVideos(filteredFallback);
      } finally {
        setIsLoading(false);
      }
    }

    fetchVideos();
  }, []);

  const handleVideoClick = (video: VideoContent) => {
    // Navigate to video page instead of opening YouTube
    window.location.href = `/video/${video.youtubeId}`;
  };

  return (
    <SectionWrapper id="stories" className="bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary-maroon mb-4">
            Stories of Impact
          </h2>
          <div className="w-24 h-1 bg-primary-maroon mx-auto mb-4"></div>
          <p className="text-lg font-body text-neutral-charcoal/80 max-w-3xl mx-auto leading-relaxed">
            Watch our journey unfold through powerful stories and moments captured from our events and community engagements.
          </p>
        </motion.div>

        {/* Video Carousel */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {isLoading ? (
                <CarouselItem className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <Card className="h-full">
                    <CardContent className="p-4">
                      <div className="aspect-video bg-neutral-charcoal/10 animate-pulse rounded-lg" />
                      <div className="mt-4 space-y-2">
                        <div className="h-4 bg-neutral-charcoal/10 rounded animate-pulse" />
                        <div className="h-4 bg-neutral-charcoal/10 rounded animate-pulse w-3/4" />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ) : (
                videos.map((video) => (
                  <CarouselItem key={video.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <VideoCard video={video} onClick={() => handleVideoClick(video)} />
                  </CarouselItem>
                ))
              )}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Button
            size="lg"
            asChild
            className="bg-primary-maroon text-white hover:bg-primary-maroon/90 font-heading font-semibold px-8 py-6 text-lg"
          >
            <Link href="/stories" className="inline-flex items-center gap-2">
              See All Stories
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <p className="text-sm font-body text-neutral-charcoal/60 mt-4">
            Visit our{" "}
            <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-maroon hover:underline font-semibold"
            >
              YouTube channel
            </a>{" "}
            for more videos and shorts
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

