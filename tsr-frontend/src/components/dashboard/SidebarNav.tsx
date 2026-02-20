// Used in: Sidebar.tsx - renders all navigation groups and items

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_GROUPS, type NavItem } from "./../../app/(config)/Sidebar-config";

// ─── Single Nav Item ──────────────────────────────────────────────────────────

interface NavItemProps {
  item: NavItem;
  isCollapsed: boolean;
}

function SidebarNavItem({ item, isCollapsed }: NavItemProps) {
  const pathname = usePathname();

  // Active if exact match or nested route
  const isActive =
    pathname === item.href ||
    (item.href !== "/dashboard" && pathname.startsWith(item.href));

  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      title={isCollapsed ? item.label : undefined} // Tooltip when collapsed
      className={cn(
        // Base styles
        "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
        // Active state
        isActive
          ? "bg-violet-600/20 text-violet-300 border border-violet-500/30"
          : "text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent",
        // Collapsed state - center icon
        isCollapsed && "justify-center px-2",
      )}
    >
      {/* Icon */}
      <Icon
        className={cn(
          "flex-shrink-0 w-4 h-4 transition-colors",
          isActive ? "text-violet-400" : "text-zinc-500 group-hover:text-white",
        )}
      />

      {/* Label - hidden when collapsed */}
      {!isCollapsed && <span className="flex-1 truncate">{item.label}</span>}

      {/* Badge - hidden when collapsed */}
      {!isCollapsed && item.badge && (
        <span
          className={cn(
            "text-[10px] font-semibold px-1.5 py-0.5 rounded-full",
            item.badgeVariant === "new"
              ? "bg-violet-500/30 text-violet-300 border border-violet-500/40"
              : "bg-zinc-700 text-zinc-300",
          )}
        >
          {item.badge}
        </span>
      )}
    </Link>
  );
}

// ─── Full Nav Groups ──────────────────────────────────────────────────────────

interface SidebarNavProps {
  isCollapsed: boolean;
}

export default function SidebarNav({ isCollapsed }: SidebarNavProps) {
  return (
    <nav className="flex flex-col gap-6 flex-1 overflow-y-auto px-3 py-2">
      {NAV_GROUPS.map((group) => (
        <div key={group.title} className="flex flex-col gap-1">
          {/* Group Title - hidden when collapsed */}
          {!isCollapsed && (
            <p className="px-3 text-[10px] font-semibold uppercase tracking-widest text-zinc-600 mb-1">
              {group.title}
            </p>
          )}

          {/* Group Items */}
          {group.items.map((item) => (
            <SidebarNavItem
              key={item.href}
              item={item}
              isCollapsed={isCollapsed}
            />
          ))}
        </div>
      ))}
    </nav>
  );
}
