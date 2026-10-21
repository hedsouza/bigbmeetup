"use client";

import { getYouTubeEmbedUrl } from "@/lib/youtube";

interface VideoPlayerProps {
  url: string;
}

export function VideoPlayer({ url }: VideoPlayerProps) {
  // Extract video ID from YouTube URL
  const videoId = url.includes("watch?v=") 
    ? url.split("watch?v=")[1].split("&")[0]
    : url.includes("youtu.be/")
    ? url.split("youtu.be/")[1].split("?")[0]
    : url;
  
  const embedUrl = getYouTubeEmbedUrl(videoId);

  return (
    <div className="bg-black rounded-lg overflow-hidden aspect-video">
      <iframe
        src={embedUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}

