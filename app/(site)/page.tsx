import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { FivePillars } from "@/components/sections/FivePillars";
import { StoriesOfImpact } from "@/components/sections/StoriesOfImpact";
import { Partners } from "@/components/sections/Partners";
// import { SocialSpotlight } from "@/components/sections/SocialSpotlight";
import { MediaPreview } from "@/components/media/MediaPreview";
import { Contact } from "@/components/sections/Contact";
import { ARTICLES } from "@/lib/data/articles";

export default function Home() {
  const previewArticles = ARTICLES.slice(0, 3);

  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <FivePillars />
      <StoriesOfImpact />
      {/* <SocialSpotlight /> */}
      <Partners />
      <MediaPreview articles={previewArticles} />
      <Contact />
    </main>
  );
}

