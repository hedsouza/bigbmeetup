"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { HERO_CONFIG } from "@/lib/constants";
import { getHeroImages } from "@/lib/getHeroImages";
import { MosaicTile } from "./MosaicTile";

// Extract config values as constants to avoid unnecessary dependencies
const TRANSITION_DURATION = HERO_CONFIG.mosaicGrid.transitionDuration;
const MIN_INTERVAL = HERO_CONFIG.mosaicGrid.changeInterval.min;
const MAX_INTERVAL = HERO_CONFIG.mosaicGrid.changeInterval.max;

/**
 * MosaicBackground Component
 * 
 * Creates an animated mosaic grid background with images from the hero directory.
 * Tiles flip one at a time with random intervals and random image selection.
 * 
 * Features:
 * - Responsive grid (8x8 desktop, 6x6 tablet, 4x4 mobile)
 * - Flip animations (3D CSS transforms)
 * - Random tile and image selection
 * - Prevents adjacent tiles from showing the same image
 * - Respects prefers-reduced-motion
 */
export function MosaicBackground() {
  const isReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  // Calculate grid dimensions based on breakpoint
  const columns = useMemo(() => {
    if (isMobile) return HERO_CONFIG.mosaicGrid.columns.mobile;
    if (isTablet) return HERO_CONFIG.mosaicGrid.columns.tablet;
    return HERO_CONFIG.mosaicGrid.columns.desktop;
  }, [isMobile, isTablet]);

  const rows = columns; // Square grid

  const totalTiles = columns * rows;
  const heroImages = useMemo(() => getHeroImages(), []);

  // State: Array of image sources for each tile, index of changing tile, and next change timer
  const [tileImages, setTileImages] = useState<string[]>(() => {
    // Initialize with empty array, will be set in useEffect
    return [];
  });

  const [changingTileIndex, setChangingTileIndex] = useState<number | null>(null);

  // Initialize or update tiles when grid size changes
  useEffect(() => {
    // Only initialize if we have images and tiles
    if (heroImages.length > 0 && totalTiles > 0) {
      setTileImages(() => {
        return Array.from({ length: totalTiles }, () => {
          const randomIndex = Math.floor(Math.random() * heroImages.length);
          return heroImages[randomIndex] || heroImages[0] || "";
        });
      });
    }
  }, [totalTiles, heroImages]);

  // Get adjacent tile indices (top, bottom, left, right)
  const getAdjacentIndices = useCallback(
    (index: number): number[] => {
      const adjacents: number[] = [];
      const row = Math.floor(index / columns);
      const col = index % columns;

      // Top
      if (row > 0) adjacents.push((row - 1) * columns + col);
      // Bottom
      if (row < rows - 1) adjacents.push((row + 1) * columns + col);
      // Left
      if (col > 0) adjacents.push(row * columns + (col - 1));
      // Right
      if (col < columns - 1) adjacents.push(row * columns + (col + 1));

      return adjacents;
    },
    [columns, rows]
  );

  // Select a random image that's not in adjacent tiles
  const selectRandomImage = useCallback(
    (currentTileIndex: number): string => {
      if (heroImages.length === 0) {
        return "";
      }

      const adjacentIndices = getAdjacentIndices(currentTileIndex);
      const adjacentImages = new Set(adjacentIndices.map((idx) => tileImages[idx]));

      // Filter out images that are in adjacent tiles
      const availableImages = heroImages.filter((img) => !adjacentImages.has(img));

      // If no available images (shouldn't happen with 124 images), fall back to all images
      if (availableImages.length === 0) {
        const randomIndex = Math.floor(Math.random() * heroImages.length);
        return heroImages[randomIndex] || heroImages[0] || "";
      }

      const randomIndex = Math.floor(Math.random() * availableImages.length);
      return availableImages[randomIndex] || heroImages[0] || "";
    },
    [heroImages, tileImages, getAdjacentIndices]
  );

  // Change one tile at a time
  useEffect(() => {
    if (isReducedMotion) {
      // Still cycle images, but without animation
      const interval = setInterval(() => {
        const randomTileIndex = Math.floor(Math.random() * totalTiles);
        const newImage = selectRandomImage(randomTileIndex);
        setTileImages((prev) => {
          const updated = [...prev];
          updated[randomTileIndex] = newImage;
          return updated;
        });
      }, 2000);
      return () => clearInterval(interval);
    }

    // Normal animation with random intervals
    const scheduleNextChange = () => {
      const interval =
        MIN_INTERVAL +
        Math.random() * (MAX_INTERVAL - MIN_INTERVAL);

      const timeout = setTimeout(() => {
        const randomTileIndex = Math.floor(Math.random() * totalTiles);
        setChangingTileIndex(randomTileIndex);

        // Wait for flip animation to complete
        setTimeout(() => {
          const newImage = selectRandomImage(randomTileIndex);
          setTileImages((prev) => {
            const updated = [...prev];
            updated[randomTileIndex] = newImage;
            return updated;
          });
          setChangingTileIndex(null);
          scheduleNextChange();
        }, TRANSITION_DURATION);
      }, interval);

      return timeout;
    };

    const timeout = scheduleNextChange();
    return () => clearTimeout(timeout);
  }, [totalTiles, selectRandomImage, isReducedMotion]);

  // Don't render if no tiles initialized yet
  if (tileImages.length === 0 || totalTiles === 0) {
    return null;
  }

  return (
    <div
      className="absolute inset-0 grid w-full h-full"
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
      }}
      aria-hidden="true"
    >
      {tileImages.map((imageSrc, index) => (
        <MosaicTile
          key={index}
          imageSrc={imageSrc}
          isChanging={changingTileIndex === index}
        />
      ))}
    </div>
  );
}

