"use client";

import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { BRAND_INFO, HERO_CONFIG } from "@/lib/constants";
import { ArrowDown } from "lucide-react";
import { MosaicBackground } from "./MosaicBackground";

export function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80; // Height of sticky header + some padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <SectionWrapper
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-maroon via-primary-maroon/90 to-[#003366] text-white relative overflow-hidden"
    >
      {/* Mosaic Background - Only renders if feature flag is enabled */}
      {HERO_CONFIG.enableMosaicBackground && (
        <div className="absolute inset-0 z-0">
          <MosaicBackground />
          {/* Dark overlay for text readability */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: HERO_CONFIG.overlay.color }}
          />
        </div>
      )}
      
      {/* Existing gradient and pattern overlay */}
      <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-10 z-[5]" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
          {BRAND_INFO.tagline}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-subheading mb-8 text-white/90 max-w-2xl mx-auto">
          {BRAND_INFO.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={() => handleScroll("#join")}
            className="bg-white/95 text-primary-maroon hover:bg-white hover:shadow-lg font-heading font-semibold px-8 py-6 text-lg transition-all duration-200"
          >
            Join the Movement
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => handleScroll("#stories")}
            className="border-2 border-white/90 bg-white/5 text-white hover:border-white hover:bg-white/10 hover:text-white font-heading font-semibold px-8 py-6 text-lg transition-all duration-200"
          >
            Watch Our Story
          </Button>
        </div>
        <div className="mt-12 animate-bounce">
          <button
            onClick={() => handleScroll("#about")}
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="h-8 w-8 mx-auto" />
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}
