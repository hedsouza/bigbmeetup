import { PartnerContent, PartnerTier } from "@/types/partner";

/**
 * Partners & Collaborators data
 * 
 * Currently building our partner network. If you've collaborated with bigbmeetup
 * and would like to become an official partner, please reach out!
 * 
 * Partner Tiers:
 * - Platinum: Strategic long-term partnerships
 * - Gold: Major event sponsors and collaborators
 * - Silver: Regular event partners
 * - Community: Local organizations and individual contributors
 * 
 * This will be replaced with CMS data in Iteration 4
 */

// Currently no partners - array will be populated as partnerships are formalized
export const PARTNERS_DATA: PartnerContent[] = [
  // Add partners here as they join
  // Example format:
  // {
  //   id: "partner-1",
  //   name: "Partner Organization Name",
  //   logo: "/images/partners/partner-1.png",
  //   website: "https://partner-website.com",
  //   tier: "platinum",
  //   testimonial: "Optional testimonial quote",
  //   description: "Brief description of partnership",
  // },
];

// Helper functions
export function getPartnersByTier(tier: PartnerTier): PartnerContent[] {
  return PARTNERS_DATA.filter((partner) => partner.tier === tier);
}

export function getAllPartners(): PartnerContent[] {
  return PARTNERS_DATA;
}

export function getFeaturedPartners(): PartnerContent[] {
  return PARTNERS_DATA.filter((partner) => partner.tier === "platinum");
}

