// Used in: src/app/(website)/page.tsx - Final call to action (Lambda style)

import Link from "next/link";
import { Plus } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 border-t border-lambda-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="relative border border-lambda-border px-8 md:px-16 py-20 text-center">
          {/* Label */}
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-lambda-text-muted mb-8">
            [ Get Started ]
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-lambda-cream tracking-tight mb-6 max-w-3xl mx-auto leading-[1.05]">
            Ready to grow your Instagram on autopilot?
          </h2>

          <p className="text-sm text-lambda-text-secondary mb-10 max-w-lg mx-auto">
            Join 2,400+ creators already using The Silent Routine to grow faster
            with less effort.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/dashboard"
              className="font-mono text-xs uppercase tracking-widest bg-lambda-cream text-lambda-bg px-10 py-3.5 hover:bg-lambda-cream-dark transition-colors duration-200 flex items-center gap-2"
            >
              Start For Free
              <Plus className="w-3.5 h-3.5" />
            </Link>
            <p className="font-mono text-[10px] uppercase tracking-widest text-lambda-text-muted">
              7-day free trial · No credit card required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
