import type { Metadata } from "next";
import { MediaGallery } from "@/components/media/MediaGallery";
import { ARTICLES } from "@/lib/data/articles";
import { BRAND_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Media & Press Coverage | ${BRAND_NAME.display}`,
  description:
    `Explore media articles, interviews, and press coverage showcasing how ${BRAND_NAME.display} brings communities together across Qatar.`,
  openGraph: {
    title: `Media & Press Coverage | ${BRAND_NAME.display}`,
    description:
      `Explore media articles, interviews, and press coverage showcasing how ${BRAND_NAME.display} brings communities together across Qatar.`,
  },
};

export default function MediaPage() {
  return <MediaGallery articles={ARTICLES} />;
}

