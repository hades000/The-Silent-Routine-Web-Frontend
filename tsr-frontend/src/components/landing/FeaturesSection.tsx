// Used in: src/app/(website)/page.tsx - Features with accordion (Lambda "Built for AI" style)

"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

// ─── Type Definitions ───────────────────────────────────────────
interface Feature {
  step: string;
  title: string;
  description: string;
}

// ─── Features Config ────────────────────────────────────────────
const FEATURES: Feature[] = [
  {
    step: "01",
    title: "AI-Powered Engagement That Feels Human.",
    description:
      "Our AI analyzes your audience patterns, crafts authentic responses, and engages with your target followers 24/7. Smart rate limiting and human behavior simulation keeps your account safe while driving real growth.",
  },
  {
    step: "02",
    title: "Your Strategy. Your Rules.",
    description:
      "Set custom automation rules for follows, unfollows, DMs, and comments. Target by hashtags, locations, and competitor audiences. Full control with intelligent defaults that just work.",
  },
  {
    step: "03",
    title: "Analytics & Reporting, Handled.",
    description:
      "Real-time dashboard tracks follower growth, engagement rates, best posting times, and campaign ROI. Weekly email reports with actionable insights keep you informed without the noise.",
  },
  {
    step: "04",
    title: "Scale Across Multiple Accounts.",
    description:
      "Manage unlimited Instagram accounts from a single dashboard. White-label options for agencies, team collaboration tools, and bulk scheduling make scaling effortless.",
  },
];

// ─── Right Side Labels (like Lambda's diagram labels) ───────────
const SIDE_LABELS: string[] = [
  "Individual Creators",
  "Growing Businesses",
  "Marketing Agencies",
  "Enterprise Teams",
];

export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section id="features" className="py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-lambda-cream leading-[1.05] tracking-tight mb-4 max-w-3xl">
          Built for creators.
          <br />
          Ready for scale.
        </h2>

        <div className="mt-16 border-t border-lambda-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left: Accordion */}
            <div>
              {FEATURES.map((feature, index) => (
                <div
                  key={feature.step}
                  className="border-b border-lambda-border"
                >
                  <button
                    className="w-full py-6 flex items-start gap-6 text-left group"
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? -1 : index)
                    }
                  >
                    {/* Step number */}
                    <span className="font-mono text-sm text-lambda-text-muted whitespace-nowrap mt-1">
                      {feature.step}/
                    </span>

                    {/* Title */}
                    <span
                      className={cn(
                        "text-lg md:text-xl font-bold flex-1 transition-colors duration-200",
                        activeIndex === index
                          ? "text-lambda-cream"
                          : "text-lambda-text-secondary group-hover:text-lambda-cream",
                      )}
                    >
                      {feature.title}
                    </span>

                    {/* Toggle icon */}
                    <span className="text-lambda-text-secondary mt-1">
                      {activeIndex === index ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </span>
                  </button>

                  {/* Expandable content */}
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      activeIndex === index
                        ? "max-h-48 opacity-100 pb-6"
                        : "max-h-0 opacity-0",
                    )}
                  >
                    <p className="text-sm text-lambda-text-secondary leading-relaxed pl-14 pr-10">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Visual / Labels (like Lambda's isometric diagram) */}
            <div className="hidden lg:flex flex-col items-end justify-center gap-6 pr-10">
              {SIDE_LABELS.map((label, index) => (
                <div
                  key={label}
                  className={cn(
                    "font-mono text-xs uppercase tracking-widest transition-colors duration-300",
                    activeIndex === index
                      ? "text-lambda-cream"
                      : "text-lambda-text-muted",
                  )}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── cn utility used inline ─────────────────────────────────────
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
