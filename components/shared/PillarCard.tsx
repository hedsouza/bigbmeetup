"use client";

import { Card } from "@/components/ui/card";
import { PillarContent } from "@/types/pillar";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Activity,
  Palette,
  Leaf,
  HeartHandshake,
  PawPrint,
} from "lucide-react";

// Icon mapping for each pillar
const pillarIcons = {
  "sports-wellness": Activity,
  "art-culture": Palette,
  sustainability: Leaf,
  "this-ability": HeartHandshake,
  "animal-welfare": PawPrint,
} as const;

interface PillarCardProps {
  pillar: PillarContent;
  onClick?: () => void;
  index?: number;
}

export function PillarCard({ pillar, onClick, index = 0 }: PillarCardProps) {
  const Icon = pillarIcons[pillar.id as keyof typeof pillarIcons];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="h-full"
    >
      <Card
        className={cn(
          "h-full cursor-pointer transition-all duration-300 overflow-hidden",
          "hover:shadow-xl border-2",
          "bg-white hover:bg-gradient-to-br hover:from-white hover:to-neutral-offWhite"
        )}
        style={{
          borderColor: pillar.color,
        }}
        onClick={onClick}
      >
        <div className="p-6 h-full flex flex-col">
          {/* Icon and Color Indicator */}
          <div className="flex items-start justify-between mb-4">
            <div
              className="p-3 rounded-lg"
              style={{
                backgroundColor: `${pillar.color}15`,
              }}
            >
              <Icon
                className="h-6 w-6"
                style={{ color: pillar.color }}
                aria-hidden="true"
              />
            </div>
            <div
              className="w-12 h-1 rounded-full"
              style={{ backgroundColor: pillar.color }}
            />
          </div>

          {/* Pillar Name */}
          <h3
            className="text-2xl font-heading font-bold mb-2"
            style={{ color: pillar.color }}
          >
            {pillar.name}
          </h3>

          {/* Tagline */}
          <p className="text-sm font-subheading font-semibold text-neutral-charcoal/70 mb-3">
            {pillar.tagline}
          </p>

          {/* Description */}
          <p className="text-sm font-body text-neutral-charcoal/80 leading-relaxed flex-grow">
            {pillar.description}
          </p>

          {/* CTA Indicator */}
          <div className="mt-6 pt-4 border-t border-neutral-charcoal/10">
            <p className="text-xs font-body font-semibold text-neutral-charcoal/60">
              Click to learn more →
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

