import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { FivePillars } from "@/components/sections/FivePillars";
import { StoriesOfImpact } from "@/components/sections/StoriesOfImpact";
import { Partners } from "@/components/sections/Partners";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <FivePillars />
      <StoriesOfImpact />
      <Partners />
    </main>
  );
}

