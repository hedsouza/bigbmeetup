import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { FivePillars } from "@/components/sections/FivePillars";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <FivePillars />
    </main>
  );
}

