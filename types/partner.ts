// TypeScript interfaces for Partners
// These interfaces are designed to be CMS-ready (compatible with future Sanity schemas)

export type PartnerTier = "platinum" | "gold" | "silver" | "community";

export interface PartnerContent {
  id: string;
  name: string;
  logo: string; // URL to logo image
  website: string; // Partner website URL
  tier: PartnerTier;
  testimonial?: string; // Optional testimonial quote
  description?: string; // Optional partnership description
  // Future CMS fields:
  // slug?: string;
  // featured?: boolean;
  // partnershipDate?: string;
}

