// Used in: src/app/(website)/page.tsx - Pricing plans section

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

// Pricing plan type definition
interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  highlighted: boolean;
  badge?: string;
}

// Plans config - update pricing here only
const PLANS: PricingPlan[] = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for individual creators just getting started.",
    features: [
      "1 Instagram Account",
      "Auto Follow/Unfollow",
      "Basic DM Automation",
      "Post Scheduling (15/month)",
      "Weekly Analytics Report",
      "Email Support",
    ],
    cta: "Get Started",
    href: "/dashboard",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$79",
    period: "/month",
    description: "For serious creators and growing businesses.",
    features: [
      "3 Instagram Accounts",
      "AI-Powered Engagement",
      "Advanced DM Campaigns",
      "Unlimited Scheduling",
      "Real-Time Analytics",
      "Audience Targeting",
      "Priority Support",
      "API Access",
    ],
    cta: "Start Free Trial",
    href: "/dashboard",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Agency",
    price: "$199",
    period: "/month",
    description: "For agencies managing multiple client accounts.",
    features: [
      "Unlimited Accounts",
      "White-label Dashboard",
      "Client Management Portal",
      "Bulk Scheduling",
      "Custom AI Workflows",
      "Team Collaboration",
      "Dedicated Account Manager",
      "SLA Guarantee",
    ],
    cta: "Contact Sales",
    href: "/contact",
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Choose Your Plan
          </h2>
          <p className="text-base text-zinc-400">
            Select the perfect plan to boost your Instagram engagement
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-7 flex flex-col transition-all duration-300 ${
                plan.highlighted
                  ? "bg-[#4f6ef7]/10 border-2 border-[#4f6ef7]/60 shadow-xl shadow-[#4f6ef7]/10"
                  : "bg-white/[0.03] border border-white/8 hover:border-white/15"
              }`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold bg-[#4f6ef7] text-white rounded-full px-3 py-1">
                  {plan.badge}
                </span>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="text-base font-bold text-white mb-3">
                  {plan.name}
                </h3>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-4xl font-black text-white">
                    {plan.price}
                  </span>
                  <span className="text-zinc-500 text-sm mb-1.5">
                    {plan.period}
                  </span>
                </div>
                <p className="text-xs text-zinc-500">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-2.5 mb-7 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5">
                    <Check className="w-3.5 h-3.5 text-[#7b93f8] flex-shrink-0" />
                    <span className="text-xs text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                asChild
                className={`w-full rounded-lg text-sm font-semibold h-10 ${
                  plan.highlighted
                    ? "bg-[#4f6ef7] hover:bg-[#3a59e8] text-white"
                    : "bg-white/8 hover:bg-white/15 text-white border border-white/10"
                }`}
              >
                <Link href={plan.href}>{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Trust note */}
        <p className="text-center text-xs text-zinc-600 mt-8">
          7-day free trial · No credit card required · Cancel anytime
        </p>
      </div>
    </section>
  );
}
