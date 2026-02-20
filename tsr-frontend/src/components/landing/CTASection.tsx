// Used in: src/app/(website)/page.tsx - Final call to action before footer

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-white/8 bg-white/[0.02] px-8 py-20 text-center">
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#1a1a6e]/60 blur-[100px]" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-5">
              Ready to grow your Instagram on autopilot?
            </h2>
            <p className="text-base text-zinc-400 mb-8">
              Join 2,400+ creators already using The Silent Routine to grow
              faster with less effort.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="bg-[#4f6ef7] hover:bg-[#3a59e8] text-white px-10 rounded-lg h-11 text-sm font-semibold gap-2 w-full sm:w-auto"
              >
                <Link href="/dashboard">
                  Start For Free
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <p className="text-xs text-zinc-500">
                7-day free trial · No credit card required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
