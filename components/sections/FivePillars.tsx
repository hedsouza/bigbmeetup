"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { PillarCard } from "@/components/shared/PillarCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getAllPillars, getPillarById } from "@/lib/data/pillars";
import { PillarContent, PillarId } from "@/types/pillar";
import { motion } from "framer-motion";
import {
  Activity,
  Palette,
  Leaf,
  HeartHandshake,
  PawPrint,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Icon mapping for each pillar
const pillarIcons = {
  "sports-wellness": Activity,
  "art-culture": Palette,
  sustainability: Leaf,
  "this-ability": HeartHandshake,
  "animal-welfare": PawPrint,
} as const;

interface PillarDetailModalProps {
  pillar: PillarContent | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function PillarDetailModal({ pillar, open, onOpenChange }: PillarDetailModalProps) {
  if (!pillar) return null;

  const Icon = pillarIcons[pillar.id as keyof typeof pillarIcons];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-2">
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
            <div className="flex-1">
              <DialogTitle
                className="text-2xl font-heading font-bold"
                style={{ color: pillar.color }}
              >
                {pillar.name}
              </DialogTitle>
              <DialogDescription className="text-base font-subheading font-semibold mt-1">
                {pillar.tagline}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <Separator className="my-4" />

        {/* Full Description */}
        <div className="space-y-4">
          <p className="text-base font-body text-neutral-charcoal/80 leading-relaxed">
            {pillar.fullDescription}
          </p>

          {/* Key Initiatives */}
          {pillar.initiatives.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-lg font-heading font-semibold text-neutral-charcoal">
                Key Initiatives
              </h4>
              <ul className="space-y-3">
                {pillar.initiatives.map((initiative, index) => (
                  <li key={index} className="flex gap-3">
                    <div
                      className="w-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: pillar.color }}
                    />
                    <div>
                      <h5 className="font-subheading font-semibold text-neutral-charcoal mb-1">
                        {initiative.title}
                      </h5>
                      <p className="text-sm font-body text-neutral-charcoal/70">
                        {initiative.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Related Editions */}
          {pillar.relatedEditions.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-lg font-heading font-semibold text-neutral-charcoal flex items-center gap-2">
                <Calendar className="h-5 w-5" style={{ color: pillar.color }} />
                Related bigbmeetup Editions
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pillar.relatedEditions.map((edition, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg border border-neutral-charcoal/10 bg-neutral-offWhite/50"
                  >
                    <div className="font-subheading font-semibold text-neutral-charcoal mb-1">
                      {edition.edition} ({edition.year})
                    </div>
                    <p className="text-sm font-body text-neutral-charcoal/70">
                      {edition.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Testimonials */}
          {pillar.featuredContent?.testimonials &&
            pillar.featuredContent.testimonials.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-lg font-heading font-semibold text-neutral-charcoal">
                  What People Say
                </h4>
                <div className="space-y-2">
                  {pillar.featuredContent.testimonials.map((testimonial, index) => (
                    <blockquote
                      key={index}
                      className="pl-4 border-l-2 italic text-neutral-charcoal/80"
                      style={{ borderColor: pillar.color }}
                    >
                      &ldquo;{testimonial}&rdquo;
                    </blockquote>
                  ))}
                </div>
              </div>
            )}
        </div>

        <Separator className="my-6" />

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 justify-end">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="border-2"
            style={{ borderColor: pillar.color, color: pillar.color }}
          >
            Close
          </Button>
          <Button
            onClick={() => {
              // Future: Link to stories section or pillar-specific page
              onOpenChange(false);
            }}
            className="text-white font-heading font-semibold"
            style={{ backgroundColor: pillar.color }}
          >
            Explore Related Stories
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function FivePillars() {
  const [selectedPillar, setSelectedPillar] = useState<PillarContent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pillars = getAllPillars();

  const handlePillarClick = (pillar: PillarContent) => {
    setSelectedPillar(pillar);
    setIsModalOpen(true);
  };

  return (
    <>
      <SectionWrapper id="five-pillars" className="bg-neutral-offWhite">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-primary-maroon mb-4">
              Our Five Pillars
            </h2>
            <div className="w-24 h-1 bg-primary-maroon mx-auto mb-4"></div>
            <p className="text-lg font-body text-neutral-charcoal/80 max-w-3xl mx-auto leading-relaxed">
              bigbmeetup is built on five core pillars that guide everything we do.
              Each pillar represents a fundamental value and commitment to creating
              positive change in Qatar.
            </p>
          </motion.div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {pillars.map((pillar, index) => (
              <PillarCard
                key={pillar.id}
                pillar={pillar}
                onClick={() => handlePillarClick(pillar)}
                index={index}
              />
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-base font-body text-neutral-charcoal/70 mb-4">
              Want to learn more about how we bring these pillars to life?
            </p>
            <Button
              size="lg"
              onClick={() => {
                // Future: Scroll to stories section
                const element = document.querySelector("#stories");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="bg-primary-maroon text-white hover:bg-primary-maroon/90 font-heading font-semibold px-8 py-6 text-lg"
            >
              Explore Our Stories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Pillar Detail Modal */}
      <PillarDetailModal
        pillar={selectedPillar}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </>
  );
}

