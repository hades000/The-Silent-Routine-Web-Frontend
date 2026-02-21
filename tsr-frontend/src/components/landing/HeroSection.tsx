// Used in: src/app/(website)/page.tsx - Main hero section matching Lambda's style

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background: Speed lines / warp effect */}
      <div className="absolute inset-0 z-0">
        {/* Radial gradient for depth */}
        {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(40,30,80,0.4)_0%,_transparent_60%)]" /> */}

        {/* Animated horizontal streak lines */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Left side streaks */}
          {Array.from({ length: 20 }).map((_, i) => {
            // Generate deterministic scale value based on index to avoid impure Math.random() in render
            const scaleValue = 0.5 + (((i * 7) % 10) / 10) * 0.5;
            return (
              <div
                key={`left-${i}`}
                className="absolute h-px opacity-20"
                style={{
                  top: `${10 + i * 4.2}%`,
                  left: 0,
                  right: "50%",
                  background: `linear-gradient(to right, transparent, ${
                    [
                      "#ff4444",
                      "#44ff44",
                      "#4444ff",
                      "#ffaa00",
                      "#ff44ff",
                      "#44ffff",
                    ][i % 6]
                  })`,
                  transform: `scaleX(${scaleValue})`,
                  transformOrigin: "right",
                }}
              />
            );
          })}
          {/* Right side streaks */}
          {Array.from({ length: 20 }).map((_, i) => {
            // Generate deterministic scale value based on index to avoid impure Math.random() in render
            const scaleValue = 0.5 + (((i * 13) % 10) / 10) * 0.5;
            return (
              <div
                key={`right-${i}`}
                className="absolute h-px opacity-20"
                style={{
                  top: `${12 + i * 4.2}%`,
                  left: "50%",
                  right: 0,
                  background: `linear-gradient(to left, transparent, ${
                    [
                      "#ff4444",
                      "#44ff44",
                      "#4444ff",
                      "#ffaa00",
                      "#ff44ff",
                      "#44ffff",
                    ][i % 6]
                  })`,
                  transform: `scaleX(${scaleValue})`,
                  transformOrigin: "left",
                }}
              />
            );
          })}
        </div>

        {/* Center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(100,80,160,0.15)_0%,_transparent_70%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Subtitle */}
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-lambda-text-secondary mb-8">
          Instagram automation for creators and businesses
        </p>

        {/* Main Headline - massive, white, tight leading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-black text-lambda-cream leading-[0.95] tracking-tight mb-10">
          The Silent
          <br />
          Routine
        </h1>

        {/* CTA Buttons - Lambda style: one cream, one purple/accent */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/dashboard"
            className="font-mono text-xs uppercase tracking-widest bg-lambda-cream text-lambda-bg px-8 py-3.5 hover:bg-lambda-cream-dark transition-colors duration-200 w-full sm:w-auto text-center"
          >
            Get Started Free
          </Link>
          <Link
            href="#features"
            className="font-mono text-xs uppercase tracking-widest bg-[#6c5ce7] text-white px-8 py-3.5 hover:bg-[#5a4bd6] transition-colors duration-200 w-full sm:w-auto text-center"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
