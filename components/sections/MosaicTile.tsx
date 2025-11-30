"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { HERO_CONFIG } from "@/lib/constants";

interface MosaicTileProps {
  imageSrc: string;
  isChanging: boolean;
  className?: string;
}

export function MosaicTile({ imageSrc, isChanging, className }: MosaicTileProps) {
  const [isFlipping, setIsFlipping] = useState(false);
  const [currentImage, setCurrentImage] = useState(imageSrc || "");
  const [nextImage, setNextImage] = useState<string | null>(null);

  // Update currentImage when imageSrc changes (initial load or prop change)
  useEffect(() => {
    if (imageSrc && imageSrc !== currentImage) {
      setCurrentImage(imageSrc);
    }
  }, [imageSrc, currentImage]);

  useEffect(() => {
    if (isChanging && imageSrc && imageSrc !== currentImage) {
      setNextImage(imageSrc);
      setIsFlipping(true);

      // Complete flip and update image
      const resetTimeout = setTimeout(() => {
        setCurrentImage(imageSrc);
        setNextImage(null);
        setIsFlipping(false);
      }, HERO_CONFIG.mosaicGrid.transitionDuration);

      return () => {
        clearTimeout(resetTimeout);
      };
    }
  }, [imageSrc, isChanging, currentImage]);

  const rotation = isFlipping ? 180 : 0;

  // Don't render if no image source
  if (!currentImage) {
    return (
      <div
        className={cn(
          "relative w-full h-full overflow-hidden bg-gray-900/20",
          className
        )}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      className={cn(
        "relative w-full h-full overflow-hidden",
        className
      )}
      style={{
        perspective: "1000px",
      }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateY(${rotation}deg)`,
          transition: `transform ${HERO_CONFIG.mosaicGrid.transitionDuration}ms ease-in-out`,
        }}
      >
        {/* Front face */}
        <div
          className="absolute inset-0"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <Image
            src={currentImage}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 25vw, (max-width: 1024px) 16.67vw, 12.5vw"
          />
        </div>

        {/* Back face - shows next image while flipping */}
        {nextImage && (
          <div
            className="absolute inset-0"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <Image
              src={nextImage}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 25vw, (max-width: 1024px) 16.67vw, 12.5vw"
            />
          </div>
        )}
      </div>
    </div>
  );
}

