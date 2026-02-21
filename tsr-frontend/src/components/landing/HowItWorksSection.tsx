// Used in: src/app/(website)/page.tsx - Step-by-step process (Lambda minimal style)

import { UserPlus, Settings, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Step {
  step: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    step: "01",
    icon: UserPlus,
    title: "Connect Your Account",
    description:
      "Securely link your Instagram via OAuth. We never store your password. Setup takes under 2 minutes.",
  },
  {
    step: "02",
    icon: Settings,
    title: "Configure Your Strategy",
    description:
      "Set your target audience, automation rules, posting schedule, and growth goals with intelligent defaults.",
  },
  {
    step: "03",
    icon: TrendingUp,
    title: "Watch Your Account Grow",
    description:
      "Our AI runs 24/7 in the background. Real-time analytics dashboard gives you full visibility and control.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 border-t border-lambda-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-16">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-lambda-text-muted mb-4">
            How It Works
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-lambda-cream tracking-tight">
            Up and running in minutes
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-lambda-border">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="border-b md:border-b-0 md:border-r last:border-r-0 border-lambda-border p-8 md:p-10"
              >
                {/* Step number */}
                <span className="font-mono text-xs text-lambda-text-muted mb-6 block">
                  {step.step}/
                </span>

                {/* Icon */}
                <div className="w-10 h-10 border border-lambda-border rounded-sm flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-lambda-cream" />
                </div>

                <h3 className="font-mono text-sm uppercase tracking-wider text-lambda-cream font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-lambda-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
