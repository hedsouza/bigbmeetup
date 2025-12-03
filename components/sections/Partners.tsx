"use client";

import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getAllPartners, getPartnersByTier } from "@/lib/data/partners";
import { PartnerContent, PartnerTier } from "@/types/partner";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Quote } from "lucide-react";
import Image from "next/image";
import { BRAND_NAME, CONTACT_INFO } from "@/lib/constants";

interface PartnerCardProps {
  partner: PartnerContent;
  tier: PartnerTier;
}

function PartnerCard({ partner, tier }: PartnerCardProps) {
  const tierColors = {
    platinum: "border-primary-maroon/30 bg-primary-maroon/5",
    gold: "border-yellow-500/30 bg-yellow-500/5",
    silver: "border-gray-400/30 bg-gray-400/5",
    community: "border-neutral-charcoal/20 bg-neutral-offWhite",
  };

  const tierLabels = {
    platinum: "Platinum Partner",
    gold: "Gold Partner",
    silver: "Silver Partner",
    community: "Community Partner",
  };

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="h-full"
    >
      <Card
        className={`h-full transition-all duration-300 overflow-hidden border-2 ${tierColors[tier]} hover:shadow-lg`}
      >
        <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center">
          {/* Logo */}
          <div className="relative w-full h-24 mb-4 flex items-center justify-center">
            <Image
              src={partner.logo}
              alt={partner.name}
              fill
              className="object-contain"
              unoptimized // Partner logos may need optimization later
            />
          </div>

          {/* Partner Name */}
          <h3 className="font-heading font-bold text-lg text-neutral-charcoal mb-2">
            {partner.name}
          </h3>

          {/* Tier Badge */}
          <Badge
            variant="outline"
            className={`mb-3 ${
              tier === "platinum"
                ? "border-primary-maroon text-primary-maroon"
                : tier === "gold"
                  ? "border-yellow-600 text-yellow-600"
                  : tier === "silver"
                    ? "border-gray-600 text-gray-600"
                    : "border-neutral-charcoal/40 text-neutral-charcoal/70"
            }`}
          >
            {tierLabels[tier]}
          </Badge>

          {/* Testimonial */}
          {partner.testimonial && (
            <div className="mt-2 mb-4 text-sm font-body text-neutral-charcoal/70 italic">
              <Quote className="h-4 w-4 inline mr-1" />
              {partner.testimonial}
            </div>
          )}

          {/* Website Link */}
          <a
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto text-sm font-body text-primary-maroon hover:underline inline-flex items-center gap-1"
            onClick={(e) => e.stopPropagation()}
          >
            Visit Website
            <ExternalLink className="h-3 w-3" />
          </a>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function Partners() {
  const allPartners = getAllPartners();
  const platinumPartners = getPartnersByTier("platinum");
  const goldPartners = getPartnersByTier("gold");
  const silverPartners = getPartnersByTier("silver");
  const communityPartners = getPartnersByTier("community");

  const renderPartnerSection = (
    tier: PartnerTier,
    partners: PartnerContent[],
    title: string,
    cols: string
  ) => {
    if (partners.length === 0) return null;

    return (
      <div className="mb-12">
        <h3 className="text-2xl font-heading font-bold text-neutral-charcoal mb-6 text-center">
          {title}
        </h3>
        <div className={`grid grid-cols-1 ${cols} gap-6`}>
          {partners.map((partner) => (
            <PartnerCard key={partner.id} partner={partner} tier={tier} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <SectionWrapper id="partners" className="bg-neutral-offWhite">
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
            Our Partners & Collaborators
          </h2>
          <div className="w-24 h-1 bg-primary-maroon mx-auto mb-4"></div>
          <p className="text-lg font-body text-neutral-charcoal/80 max-w-3xl mx-auto leading-relaxed">
            Over the years, we&apos;ve had the privilege of collaborating with amazing organizations, businesses, and individuals who share our vision of bringing communities together. We&apos;re building our partner network and would love to work with you!
          </p>
        </motion.div>

        {/* Past Collaborators Collage */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <div className="bg-white border border-neutral-charcoal/10 rounded-2xl shadow-sm overflow-hidden">
            <div className="px-6 py-5 text-center">
              <p className="text-base sm:text-lg font-body text-neutral-charcoal/80">
                Trusted by partners and collaborators across Qatar — here are just a few of the organizations we&apos;ve worked with.
              </p>
            </div>
            <div className="relative w-full aspect-[1086/768] bg-neutral-offWhite">
              <Image
                src="/images/partners/past-collaborators.jpeg"
                alt={`Logos of organizations that have collaborated with ${BRAND_NAME.plain}`}
                fill
                className="object-contain p-4 sm:p-6"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Partner Tiers - Only render if there are partners */}
        {allPartners.length > 0 ? (
          <>
            {renderPartnerSection("platinum", platinumPartners, "Platinum Partners", "md:grid-cols-2")}
            {renderPartnerSection("gold", goldPartners, "Gold Partners", "md:grid-cols-3")}
            {renderPartnerSection("silver", silverPartners, "Silver Partners", "md:grid-cols-4")}
            {renderPartnerSection("community", communityPartners, "Community Partners", "md:grid-cols-4 lg:grid-cols-6")}
          </>
        ) : null}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-lg font-body font-semibold text-neutral-charcoal mb-2">
            Interested in becoming a partner?
          </p>
          <p className="text-base font-body text-neutral-charcoal/70 mb-6">
            Whether you&apos;re an organization we&apos;ve worked with before or a new collaborator, 
            let&apos;s explore how we can create meaningful impact together.
          </p>
          <Button
            size="lg"
            onClick={() => {
              window.location.href = `mailto:${CONTACT_INFO.email}`;
            }}
            className="bg-primary-maroon text-white hover:bg-primary-maroon/90 font-heading font-semibold px-8 py-6 text-lg"
          >
            Become a Partner
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

