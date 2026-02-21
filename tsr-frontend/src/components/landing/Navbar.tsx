// Used in: src/app/(website)/page.tsx - Landing page top navigation with mega dropdown

"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Plus, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Type Definitions ───────────────────────────────────────────
interface NavDropdownColumn {
  category: string;
  links: { label: string; href: string }[];
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: NavDropdownColumn[];
}

// ─── Navigation Config ──────────────────────────────────────────
const NAV_ITEMS: NavItem[] = [
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "Products",
    dropdown: [
      {
        category: "//Automation",
        links: [
          { label: "AI Engagement", href: "#features" },
          { label: "DM Campaigns", href: "#features" },
          { label: "Smart Scheduling", href: "#features" },
        ],
      },
      {
        category: "//For Every Creator",
        links: [
          { label: "Influencers", href: "#features" },
          { label: "Businesses", href: "#features" },
          { label: "Agencies", href: "#features" },
          { label: "Startups", href: "#features" },
        ],
      },
      {
        category: "//Platform",
        links: [
          { label: "Analytics Dashboard", href: "#features" },
          { label: "Audience Targeting", href: "#features" },
          { label: "Safety & Compliance", href: "#features" },
        ],
      },
      {
        category: "//Resources",
        links: [
          { label: "Documentation", href: "/docs" },
          { label: "Blog", href: "/blog" },
          { label: "Case Studies", href: "/cases" },
        ],
      },
    ],
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
  {
    label: "Company",
    dropdown: [
      {
        category: "//About",
        links: [
          { label: "Our Story", href: "/about" },
          { label: "Careers", href: "/careers" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(
    null,
  );
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // ─── Scroll Detection ───────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ─── Close mobile menu on resize ────────────────────────────
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setMobileExpandedItem(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ─── Close dropdown on outside click ────────────────────────
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // ─── Dropdown Handlers (with slight delay to prevent flicker) ──
  const handleMouseEnter = useCallback((label: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(label);
  }, []);

  const handleMouseLeave = useCallback(() => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  }, []);

  return (
    <header ref={navRef} className="fixed top-0 left-0 right-0 z-50">
      {/* ─── Desktop Navbar ───────────────────────────────────── */}
      <div
        className={cn(
          "transition-all duration-300",
          isScrolled || activeDropdown
            ? "bg-lambda-bg/95 backdrop-blur-md border-b border-lambda-border"
            : "bg-transparent",
        )}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="flex items-center justify-center w-8 h-8 border border-lambda-cream/60 rounded-sm transition-colors group-hover:border-lambda-cream">
                <Zap className="w-4 h-4 text-lambda-cream" />
              </div>
              <span className="font-mono text-lambda-cream font-bold text-base tracking-wider uppercase">
                TSR
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    item.dropdown && handleMouseEnter(item.label)
                  }
                  onMouseLeave={() => item.dropdown && handleMouseLeave()}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={cn(
                        "font-mono text-xs uppercase tracking-widest px-5 py-2",
                        "text-lambda-text-secondary hover:text-lambda-cream",
                        "transition-colors duration-200",
                      )}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      className={cn(
                        "font-mono text-xs uppercase tracking-widest px-5 py-2",
                        "transition-colors duration-200 flex items-center gap-1",
                        activeDropdown === item.label
                          ? "text-lambda-cream"
                          : "text-lambda-text-secondary hover:text-lambda-cream",
                        // Dotted border bottom when active (like Lambda)
                        activeDropdown === item.label &&
                          "border-b border-dashed border-lambda-cream/40",
                      )}
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.label ? null : item.label,
                        )
                      }
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-5">
              <Link
                href="/login"
                className="font-mono text-xs uppercase tracking-widest text-lambda-text-secondary hover:text-lambda-cream transition-colors"
              >
                Log In
              </Link>
              <Link
                href="/dashboard"
                className={cn(
                  "font-mono text-xs uppercase tracking-widest",
                  "bg-lambda-cream text-lambda-bg px-5 py-2.5",
                  "hover:bg-lambda-cream-dark transition-colors duration-200",
                  "flex items-center gap-2",
                )}
              >
                Get Started
                <Plus className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-lambda-cream p-1"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* ─── Mega Dropdown (Desktop) ──────────────────────── */}
        {NAV_ITEMS.map((item) =>
          item.dropdown && activeDropdown === item.label ? (
            <div
              key={item.label}
              className="border-t border-lambda-border animate-slide-down"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-8">
                <div className="grid grid-cols-4 gap-10">
                  {item.dropdown.map((col) => (
                    <div key={col.category}>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-lambda-text-muted mb-4">
                        {col.category}
                      </p>
                      <ul className="space-y-2.5">
                        {col.links.map((link) => (
                          <li key={link.label}>
                            <Link
                              href={link.href}
                              className="font-mono text-xs uppercase tracking-wider text-lambda-text-secondary hover:text-lambda-cream transition-colors duration-200 block"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : null,
        )}
      </div>

      {/* ─── Mobile Full-Screen Menu ──────────────────────────── */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-0 bg-lambda-bg z-40",
          "transition-all duration-300",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        {/* Mobile header */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-lambda-border">
          <Link
            href="/"
            className="flex items-center gap-2.5"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="flex items-center justify-center w-8 h-8 border border-lambda-cream/60 rounded-sm">
              <Zap className="w-4 h-4 text-lambda-cream" />
            </div>
            <span className="font-mono text-lambda-cream font-bold text-base tracking-wider uppercase">
              TSR
            </span>
          </Link>
          <button
            className="text-lambda-cream p-1"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile nav items */}
        <div className="flex flex-col h-[calc(100vh-4rem)] justify-between">
          <nav className="px-6 py-4">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="border-b border-lambda-border">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="font-mono text-sm uppercase tracking-widest text-lambda-cream py-4 block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button
                      className="font-mono text-sm uppercase tracking-widest text-lambda-cream py-4 w-full flex items-center justify-between"
                      onClick={() =>
                        setMobileExpandedItem(
                          mobileExpandedItem === item.label ? null : item.label,
                        )
                      }
                    >
                      {item.label}
                      <Plus
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          mobileExpandedItem === item.label && "rotate-45",
                        )}
                      />
                    </button>
                    {/* Expandable sub-items */}
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-300",
                        mobileExpandedItem === item.label
                          ? "max-h-[500px] opacity-100 pb-4"
                          : "max-h-0 opacity-0",
                      )}
                    >
                      {item.dropdown?.map((col) => (
                        <div key={col.category} className="mb-4">
                          <p className="font-mono text-[10px] uppercase tracking-widest text-lambda-text-muted mb-2 pl-4">
                            {col.category}
                          </p>
                          {col.links.map((link) => (
                            <Link
                              key={link.label}
                              href={link.href}
                              className="font-mono text-xs uppercase tracking-wider text-lambda-text-secondary hover:text-lambda-cream block py-1.5 pl-4"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile bottom CTAs */}
          <div className="px-6 pb-8 mt-auto space-y-3 border-t border-lambda-border pt-4">
            <Link
              href="/login"
              className="font-mono text-sm uppercase tracking-widest text-lambda-cream block py-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Log In
            </Link>
            <Link
              href="/dashboard"
              className="font-mono text-sm uppercase tracking-widest bg-lambda-cream text-lambda-bg block py-3 px-4 text-center flex items-center justify-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
              <Plus className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
