// Used in: src/app/(website)/page.tsx - Pricing plans (Lambda minimal style)

import Link from "next/link";
import { Check, Plus } from "lucide-react";

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
      "Post Scheduling (15/mo)",
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
    <section id="pricing" className="py-24 border-t border-lambda-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-16">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-lambda-text-muted mb-4">
            Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-lambda-cream tracking-tight mb-4">
            Choose Your Plan
          </h2>
          <p className="text-sm text-lambda-text-secondary">
            Select the perfect plan to boost your Instagram engagement.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-lambda-border">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative p-8 md:p-10 border-b md:border-b-0 md:border-r last:border-r-0 border-lambda-border",
                plan.highlighted && "bg-lambda-cream/[0.03]",
              )}
            >
              {/* Badge */}
              {plan.badge && (
                <span className="font-mono text-[10px] uppercase tracking-widest text-lambda-accent bg-lambda-accent/10 border border-lambda-accent/30 px-3 py-1 absolute top-4 right-4">
                  {plan.badge}
                </span>
              )}

              {/* Plan Name */}
              <p className="font-mono text-xs uppercase tracking-widest text-lambda-text-muted mb-6">
                {plan.name}
              </p>

              {/* Price */}
              <div className="flex items-end gap-1 mb-2">
                <span className="text-4xl font-black text-lambda-cream">
                  {plan.price}
                </span>
                <span className="font-mono text-xs text-lambda-text-muted mb-1.5">
                  {plan.period}
                </span>
              </div>

              <p className="text-xs text-lambda-text-secondary mb-8">
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-3.5 h-3.5 text-lambda-cream flex-shrink-0" />
                    <span className="font-mono text-xs uppercase tracking-wider text-lambda-text-secondary">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={plan.href}
                className={cn(
                  "font-mono text-xs uppercase tracking-widest block text-center py-3 px-6 transition-colors duration-200",
                  plan.highlighted
                    ? "bg-lambda-cream text-lambda-bg hover:bg-lambda-cream-dark"
                    : "border border-lambda-border text-lambda-cream hover:bg-lambda-cream/5",
                )}
              >
                <span className="flex items-center justify-center gap-2">
                  {plan.cta}
                  <Plus className="w-3.5 h-3.5" />
                </span>
              </Link>
            </div>
          ))}
        </div>

        {/* Trust note */}
        <p className="font-mono text-[10px] uppercase tracking-widest text-lambda-text-muted text-center mt-8">
          7-day free trial · No credit card required · Cancel anytime
        </p>
      </div>
    </section>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
