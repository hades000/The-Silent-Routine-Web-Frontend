// Used in: app/(protected)/dashboard/layout.tsx - main collapsible sidebar

"use client";

import { useState } from "react";
import Link from "next/link";
import { PanelLeftClose, PanelLeftOpen, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import SidebarNav from "./SidebarNav";
import SidebarUserCard from "./SidebarUserCard";

// ─── Mock user - replace with session data from next-auth ─────────────────────
const MOCK_USER = {
  name: "Sahil More",
  email: "sahil@thesilentroutine.com",
  avatarInitials: "SM",
  plan: "Pro" as const,
};

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        // Base styles
        " relative flex flex-col h-screen bg-gradient-to-b from-[#768BDD] via-[#171717] to-[#768BDD] border-r border-[#545454] rounded-3xl m-3",
        "h-[calc(100vh-24px)]",
        // Smooth width transition
        "transition-all duration-300 ease-in-out",
        // Width based on collapsed state
        isCollapsed ? "w-[64px]" : "w-[240px]",
      )}
    >
      <div className="bg-[#171717]/85 w-full h-full flex flex-col rounded-3xl overflow-hidden">
        {/* ── Header: Logo + Collapse Button ─────────────────────────────── */}
        <div
          className={cn(
            "flex items-center h-16 px-4 border-b border-white/5 flex-shrink-0",
            isCollapsed ? "justify-center" : "justify-between",
          )}
        >
          {/* Logo - hidden text when collapsed */}
          {!isCollapsed && (
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-violet-600 flex-shrink-0">
                <Zap className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-white font-bold text-base tracking-tight">
                TSR<span className="text-violet-400">.</span>
              </span>
            </Link>
          )}

          {/* Collapsed logo icon only */}
          {isCollapsed && (
            <Link href="/dashboard">
              <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-violet-600">
                <Zap className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
          )}

          {/* Collapse Toggle Button */}
          {!isCollapsed && (
            <button
              onClick={() => setIsCollapsed(true)}
              className="text-zinc-600 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5"
              title="Collapse sidebar"
            >
              <PanelLeftClose className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Expand button when collapsed - positioned in header area */}
        {isCollapsed && (
          <button
            onClick={() => setIsCollapsed(false)}
            className="absolute -right-3 top-5 z-10 flex items-center justify-center w-6 h-6 rounded-full bg-zinc-800 border border-white/10 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all shadow-lg"
            title="Expand sidebar"
          >
            <PanelLeftOpen className="w-3 h-3" />
          </button>
        )}

        {/* ── Navigation ──────────────────────────────────────────────────── */}
        <SidebarNav isCollapsed={isCollapsed} />

        {/* ── User Card ───────────────────────────────────────────────────── */}
        <SidebarUserCard user={MOCK_USER} isCollapsed={isCollapsed} />
      </div>
    </aside>
  );
}
