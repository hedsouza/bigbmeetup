export interface PressRelease {
  id: string;
  title: string;
  /** Organisation that issued the release, e.g. "Mall of Qatar" */
  source: string;
  location: string;
  /** ISO date the release was issued */
  releaseDate: string;
  summary: string;
  /** Full release text, one entry per paragraph */
  body: string[];
  coverImage: string;
  images: { src: string; alt: string }[];
  tags?: string[];
}
