import Hero from "@/components/Hero";
import { TechStackGrid } from "@/components/TechStackGrid";
import { AboutMeSection } from "@/components/AboutMeSection";
import { PhotographySection } from "../components/PhotographySection";
import { Spotlight } from "@/components/ui/Spotlight";
import { BentoGridDemo } from "@/components/BentoGridDemo";
import { FloatingDockDemo } from "@/components/FloatingDOCK";

export default function Home() {
  return (
    <main className="relative min-h-[100vh] bg-black-100 antialiased bg-grid-white/[0.02] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="relative z-10 min-h-[100vh]">
        <Hero />
        <BentoGridDemo />
        <TechStackGrid />
        <PhotographySection />
        <AboutMeSection />
        <div className="w-full py-6 mt-20 mb-20">
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-white/80 text-sm font-medium">
              © 2025 Chris Nikhil
            </p>
            <p className="text-white/80 text-sm font-medium"> Music: Idea 10 by Gibran Alcocer</p>
            <p className="text-white/60 text-xs">
              Built with Next.js, Tailwind CSS and Framer Motion
            </p>
          </div>
        </div>
        <FloatingDockDemo /> 
      </div>
    </main>
  );
}
