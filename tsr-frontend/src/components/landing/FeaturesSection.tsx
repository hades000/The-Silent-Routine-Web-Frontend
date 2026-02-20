// Used in: src/app/(website)/page.tsx - Platform features showcase

import {
  Bot,
  Calendar,
  MessageSquare,
  TrendingUp,
  Target,
  Shield,
  Zap,
  BarChart3,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Feature type definition
interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: string;
}

// Features config - add/remove features here only
const FEATURES: Feature[] = [
  {
    icon: Bot,
    title: "AI-Powered Automation",
    description:
      "Let our AI handle engagement and replies that feel authentic and human.",
    badge: "AI",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description:
      "Schedule posts at peak engagement times based on your audience data.",
  },
  {
    icon: MessageSquare,
    title: "Auto DM Campaigns",
    description:
      "Send personalized DMs at scale with smart rate limiting built-in.",
  },
  {
    icon: TrendingUp,
    title: "Growth Analytics",
    description:
      "Track follower growth, engagement rates, and ROI in one dashboard.",
  },
  {
    icon: Target,
    title: "Audience Targeting",
    description:
      "Engage with your ideal audience based on hashtags and location.",
  },
  {
    icon: Shield,
    title: "Safe & Compliant",
    description:
      "Safety limits and human behavior simulation protects your account.",
    badge: "Safe",
  },
  {
    icon: Zap,
    title: "Instant Setup",
    description:
      "Connect your Instagram account and go live in under 2 minutes.",
  },
  {
    icon: BarChart3,
    title: "Detailed Reports",
    description:
      "Weekly email reports with actionable insights and recommendations.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#4f6ef7] uppercase tracking-widest mb-4">
            Features
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-5">
            Everything you need to grow
          </h2>
          <p className="text-base text-zinc-400 max-w-xl mx-auto">
            A complete Instagram automation platform built for creators,
            agencies, and businesses who want real results.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative bg-white/[0.03] border border-white/8 rounded-2xl p-5 hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300"
              >
                {/* Badge */}
                {feature.badge && (
                  <span className="absolute top-4 right-4 text-[10px] font-semibold bg-[#4f6ef7]/20 text-[#7b93f8] border border-[#4f6ef7]/30 rounded-full px-2 py-0.5">
                    {feature.badge}
                  </span>
                )}

                {/* Icon */}
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#4f6ef7]/10 text-[#7b93f8] mb-4">
                  <Icon className="w-4 h-4" />
                </div>

                {/* Content */}
                <h3 className="text-sm font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
