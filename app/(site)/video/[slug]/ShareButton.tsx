"use client";

import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import { VideoContent } from "@/types/video";

interface ShareButtonProps {
  video: VideoContent;
}

export function ShareButton({ video }: ShareButtonProps) {
  const handleShare = async () => {
    const url = window.location.href;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: video.title,
          text: video.description,
          url: url,
        });
      } catch (error) {
        // User cancelled or error occurred
        console.log("Share cancelled or failed");
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(url);
        alert("Link copied to clipboard!");
      } catch (error) {
        console.error("Failed to copy to clipboard:", error);
      }
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleShare}
      className="inline-flex items-center gap-2"
    >
      <Share2 className="h-4 w-4" />
      Share
    </Button>
  );
}

