// Used in: src/app/(website)/page.tsx - Landing page top navigation

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

// Navigation links config - easy to extend
const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
] as const;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "transition-all duration-500 ease-in-out",
        isScrolled
          ? "bg-[#05050f]/80 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent",
      )}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            {/* Icon scales slightly on hover */}
            <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-white transition-transform duration-200 group-hover:scale-110">
              <Zap className="w-4 h-4 text-black" />
            </div>
            <span className="text-white font-bold text-lg tracking-tight">
              TSR
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "relative text-sm text-zinc-400 hover:text-white",
                  "transition-colors duration-200",
                  // Animated underline on hover
                  "after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-white",
                  "after:transition-all after:duration-300 hover:after:w-full",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className={cn(
                "text-sm text-zinc-400 hover:text-white",
                "transition-colors duration-200 px-4 py-2",
              )}
            >
              Login
            </Link>
            <Button
              asChild
              className={cn(
                "bg-white text-black hover:bg-zinc-200",
                "text-sm px-5 rounded-lg font-medium",
                // Subtle lift on hover
                "transition-all duration-200 hover:shadow-lg hover:shadow-white/10 hover:-translate-y-px",
              )}
            >
              <Link href="/dashboard">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={cn(
              "md:hidden text-zinc-400 hover:text-white",
              "transition-colors duration-200 p-1 rounded-lg hover:bg-white/5",
            )}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {/* Icon swap with rotation animation */}
            <span
              className={cn(
                "block transition-all duration-300",
                isMobileMenuOpen
                  ? "rotate-90 opacity-100"
                  : "rotate-0 opacity-100",
              )}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </span>
          </button>
        </div>

        {/*
         * Mobile Menu
         * Uses max-height transition for smooth open/close
         * (display:none doesn't animate, max-height does)
         */}
        <div
          className={cn(
            "md:hidden overflow-hidden",
            "transition-all duration-300 ease-in-out",
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="py-4 border-t border-white/10 bg-[#05050f]/95 backdrop-blur-md">
            <nav className="flex flex-col gap-1 px-2">
              {NAV_LINKS.map((link, index) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "text-sm text-zinc-400 hover:text-white hover:bg-white/5",
                    "transition-all duration-200 py-2.5 px-3 rounded-lg",
                    // Staggered fade-in via delay - purely CSS, no JS needed
                    "animate-in fade-in slide-in-from-left-2",
                    index === 0 && "delay-75",
                    index === 1 && "delay-100",
                    index === 2 && "delay-150",
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile CTA Buttons */}
              <div className="flex flex-col gap-2 pt-3 mt-2 border-t border-white/10">
                <Link
                  href="/login"
                  className={cn(
                    "text-sm text-center text-zinc-400 hover:text-white hover:bg-white/5",
                    "transition-all duration-200 py-2.5 px-3 rounded-lg",
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Button
                  asChild
                  className={cn(
                    "bg-white text-black hover:bg-zinc-200",
                    "text-sm rounded-lg font-medium",
                    "transition-all duration-200",
                  )}
                >
                  <Link
                    href="/dashboard"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
