// Used in: src/app/(website)/page.tsx - Main hero section with image grid

import Link from "next/link";
import { Button } from "@/components/ui/button";

// Creator card data - represents real users of the platform
const CREATOR_CARDS = [
  {
    id: 1,
    bgColor: "bg-zinc-800",
    // Placeholder gradient representing a person image
    gradient: "from-zinc-600 to-zinc-800",
    size: "tall", // tall card
  },
  {
    id: 2,
    bgColor: "bg-slate-700",
    gradient: "from-slate-500 to-slate-800",
    size: "tall",
  },
  {
    id: 3,
    bgColor: "bg-neutral-700",
    gradient: "from-neutral-500 to-neutral-900",
    size: "tall",
  },
  {
    id: 4,
    bgColor: "bg-teal-900",
    gradient: "from-teal-600 to-teal-900",
    size: "tall",
  },
] as const;

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 pb-0 overflow-hidden">
      {/* Text Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mb-12">
        {/* Main Headline - bold large typography like reference */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight mb-6">
          Transform Your
          <br />
          Instagram{" "}
          <span className="italic font-black text-white/90">Engagement</span>
          <br />
          with TSR
        </h1>

        {/* Subheadline */}
        <p className="text-base md:text-lg text-zinc-400 max-w-xl mx-auto mb-8 leading-relaxed">
          TSR revolutionizes how you connect with your audience on Instagram.
          Automate responses and boost engagement effortlessly, turning
          interactions into valuable business opportunities.
        </p>

        {/* CTA Buttons - matching reference style */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            asChild
            size="lg"
            className="bg-[#4f6ef7] hover:bg-[#3a59e8] text-white px-8 rounded-lg h-11 text-sm font-semibold w-full sm:w-auto"
          >
            <Link href="/dashboard">Get Started</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/20 bg-white/5 text-white hover:bg-white/10 px-8 rounded-lg h-11 text-sm font-semibold w-full sm:w-auto"
          >
            <Link href="#features">Learn More</Link>
          </Button>
        </div>
      </div>

      {/* Creator Image Grid - key visual like the reference */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-4 gap-3 sm:gap-4">
          {CREATOR_CARDS.map((card, index) => (
            <div
              key={card.id}
              className={`
                                relative rounded-2xl sm:rounded-3xl overflow-hidden
                                /* Staggered heights for visual interest */
                                ${index === 0 ? "h-48 sm:h-64 md:h-72" : ""}
                                ${index === 1 ? "h-48 sm:h-64 md:h-72 mt-4 sm:mt-8" : ""}
                                ${index === 2 ? "h-48 sm:h-64 md:h-72" : ""}
                                ${index === 3 ? "h-48 sm:h-64 md:h-72 mt-4 sm:mt-8" : ""}
                            `}
            >
              {/* Gradient placeholder - replace with real images later */}
              <div
                className={`w-full h-full bg-gradient-to-b ${card.gradient} flex items-end p-3`}
              >
                {/* Engagement overlay badge on each card */}
                <div className="w-full bg-black/40 backdrop-blur-sm rounded-xl p-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-full bg-violet-500 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="h-1.5 bg-white/40 rounded-full w-2/3 mb-1" />
                      <div className="h-1 bg-white/20 rounded-full w-1/2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fade to black at bottom of images */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#05050f] to-transparent" />
      </div>
    </section>
  );
}
