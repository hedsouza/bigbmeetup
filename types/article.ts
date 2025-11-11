export interface Article {
  /**
   * Unique identifier for the article.
   * Typically matches the slug/filename in the content directory.
   */
  id: string;
  imageUrl: string;
  title?: string;
  publication?: string;
  publicationDate?: string;
  excerpt?: string;
  fullArticleUrl?: string;
  category?: "news" | "feature" | "event" | "interview" | "community";
  tags?: string[];
  notes?: string;
}

export interface WebsiteMention {
  id: string;
  title: string;
  websiteName: string;
  websiteUrl: string;
  mentionDate: string;
  excerpt?: string;
  logoUrl?: string;
  screenshotUrl?: string;
  category?: "news" | "event" | "blog" | "social";
  tags?: string[];
}

