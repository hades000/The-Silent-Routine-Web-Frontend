// Used in: src/app/(website)/page.tsx - Step-by-step process section

import { UserPlus, Settings, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Step type definition
interface Step {
  step: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

// Steps config
const STEPS: Step[] = [
  {
    step: "01",
    icon: UserPlus,
    title: "Connect Your Account",
    description:
      "Securely link your Instagram via OAuth. We never store your password.",
  },
  {
    step: "02",
    icon: Settings,
    title: "Configure Your Strategy",
    description:
      "Set your target audience, automation rules, schedule, and growth goals.",
  },
  {
    step: "03",
    icon: TrendingUp,
    title: "Watch Your Account Grow",
    description:
      "Our AI runs 24/7. Get daily reports with full control at all times.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#4f6ef7] uppercase tracking-widest mb-4">
            How It Works
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-5">
            Up and running in minutes
          </h2>
          <p className="text-base text-zinc-400 max-w-md mx-auto">
            No technical knowledge required. Set it up once, let it run forever.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="relative bg-white/[0.03] border border-white/8 rounded-2xl p-8 text-center"
              >
                {/* Step number - large background text */}
                <span className="absolute top-4 right-5 text-5xl font-black text-white/5 select-none">
                  {step.step}
                </span>

                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#4f6ef7]/15 text-[#7b93f8] mb-5 mx-auto">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
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
