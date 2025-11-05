// TypeScript interfaces for Five Pillars
// These interfaces are designed to be CMS-ready (compatible with future Sanity schemas)

export interface PillarInitiative {
  title: string;
  description: string;
  // Future CMS fields:
  // image?: string;
  // videoUrl?: string;
  // relatedStories?: string[]; // References to story slugs
}

export interface RelatedEdition {
  edition: string; // e.g., "Edition 12"
  year: number;
  description: string;
  // Future CMS fields:
  // slug?: string;
  // image?: string;
}

export interface PillarContent {
  id: string;
  name: string;
  tagline: string;
  color: string;
  description: string;
  fullDescription: string;
  initiatives: PillarInitiative[];
  relatedEditions: RelatedEdition[];
  featuredContent?: {
    // Future CMS fields for images/videos:
    // images?: string[];
    // videos?: string[];
    testimonials?: string[];
  };
  // Future CMS fields:
  // slug?: string;
  // seoTitle?: string;
  // seoDescription?: string;
  // publishedAt?: string;
  // updatedAt?: string;
}

export type PillarId =
  | "sports-wellness"
  | "art-culture"
  | "sustainability"
  | "this-ability"
  | "animal-welfare";

