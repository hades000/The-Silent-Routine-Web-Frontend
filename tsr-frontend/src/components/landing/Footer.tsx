// Used in: src/app/(website)/page.tsx - Multi-column footer matching Lambda design

import Link from "next/link";
import { Zap } from "lucide-react";

// ─── Type Definitions ───────────────────────────────────────────
interface FooterColumnGroup {
  title: string;
  columns: {
    category: string;
    links: { label: string; href: string }[];
  }[];
}

// ─── Footer Config ──────────────────────────────────────────────
const FOOTER_GROUPS: FooterColumnGroup[] = [
  {
    title: "Automation",
    columns: [
      {
        category: "//For Every Creator",
        links: [
          { label: "Influencers", href: "/influencers" },
          { label: "Businesses", href: "/businesses" },
          { label: "Agencies", href: "/agencies" },
          { label: "Startups", href: "/startups" },
        ],
      },
      {
        category: "//Platform",
        links: [
          { label: "AI Engagement", href: "#features" },
          { label: "Safety & Compliance", href: "#features" },
          { label: "Analytics", href: "#features" },
        ],
      },
    ],
  },
  {
    title: "Products",
    columns: [
      {
        category: "//Products",
        links: [
          { label: "DM Campaigns", href: "#features" },
          { label: "Smart Scheduling", href: "#features" },
          { label: "Audience Targeting", href: "#features" },
        ],
      },
      {
        category: "//Features",
        links: [
          { label: "AI Automation", href: "#features" },
          { label: "Growth Analytics", href: "#features" },
          { label: "Multi-Account", href: "#features" },
        ],
      },
    ],
  },
  {
    title: "Company",
    columns: [
      {
        category: "//Docs",
        links: [
          { label: "Documentation", href: "/docs" },
          { label: "Blog", href: "/blog" },
          { label: "Changelog", href: "/changelog" },
        ],
      },
      {
        category: "//Inside TSR",
        links: [
          { label: "About", href: "/about" },
          { label: "Careers", href: "/careers" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        category: "//Legal",
        links: [
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Service", href: "/terms" },
          { label: "Cookie Policy", href: "/cookies" },
        ],
      },
    ],
  },
];

// Social links
const SOCIALS: { label: string; href: string; icon: string }[] = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: "in" },
  { label: "X", href: "https://x.com", icon: "𝕏" },
  { label: "YouTube", href: "https://youtube.com", icon: "▶" },
];

export default function Footer() {
  return (
    <footer className="border-t border-lambda-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Main footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 py-16">
          {FOOTER_GROUPS.map((group, groupIndex) => (
            <div
              key={group.title}
              className={cn(
                "pb-10 md:pb-0 md:pr-10",
                groupIndex < FOOTER_GROUPS.length - 1 &&
                  "border-b md:border-b-0 md:border-r border-lambda-border mb-10 md:mb-0",
              )}
            >
              {/* Group title */}
              <h4 className="font-mono text-sm uppercase tracking-widest text-lambda-cream font-bold mb-6">
                {group.title}
              </h4>
              <div className="border-t border-lambda-border pt-6">
                <div
                  className={`grid grid-cols-${Math.min(group.columns.length, 2)} gap-8`}
                >
                  {group.columns.map((col) => (
                    <div key={col.category}>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-lambda-text-muted mb-3">
                        {col.category}
                      </p>
                      <ul className="space-y-2">
                        {col.links.map((link) => (
                          <li key={link.label}>
                            <Link
                              href={link.href}
                              className="font-mono text-xs uppercase tracking-wider text-lambda-text-secondary hover:text-lambda-cream transition-colors duration-200"
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
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-lambda-border py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-8 h-8 border border-lambda-cream/60 rounded-sm">
              <Zap className="w-4 h-4 text-lambda-cream" />
            </div>
            <span className="font-mono text-lambda-cream font-bold text-base tracking-wider uppercase">
              TSR
            </span>
          </Link>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {SOCIALS.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-lambda-border rounded-sm flex items-center justify-center font-mono text-xs text-lambda-text-secondary hover:text-lambda-cream hover:border-lambda-cream/40 transition-colors duration-200"
                aria-label={social.label}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-lambda-border py-6 text-center">
          <p className="font-mono text-[10px] uppercase tracking-widest text-lambda-text-muted">
            © {new Date().getFullYear()} The Silent Routine. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
