import type { Metadata } from "next";
import { MediaGallery } from "@/components/media/MediaGallery";
import { ARTICLES } from "@/lib/data/articles";

export const metadata: Metadata = {
  title: "Media & Press Coverage | bigbmeetup",
  description:
    "Explore media articles, interviews, and press coverage showcasing how bigbmeetup brings communities together across Qatar.",
  openGraph: {
    title: "Media & Press Coverage | bigbmeetup",
    description:
      "Explore media articles, interviews, and press coverage showcasing how bigbmeetup brings communities together across Qatar.",
  },
};

export default function MediaPage() {
  return <MediaGallery articles={ARTICLES} />;
}

