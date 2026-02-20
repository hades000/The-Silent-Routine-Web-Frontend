// Used in: Sidebar.tsx - navigation config, easy to extend without touching UI

import {
  LayoutDashboard,
  Bot,
  Calendar,
  MessageSquare,
  Users,
  BarChart3,
  Settings,
  Webhook,
  Target,
  CreditCard,
  HelpCircle,
  type LucideIcon,
} from "lucide-react";

// Type definitions
export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: string; // Optional badge like "New" or notification count
  badgeVariant?: "default" | "new" | "count";
}

export interface NavGroup {
  title: string; // Group header label
  items: NavItem[];
}

// Main navigation groups - add new items here only
export const NAV_GROUPS: NavGroup[] = [
  {
    title: "Overview",
    items: [
      {
        label: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        label: "Analytics",
        href: "/dashboard/analytics",
        icon: BarChart3,
      },
    ],
  },
  {
    title: "Automation",
    items: [
      {
        label: "AI Automation",
        href: "/dashboard/automation",
        icon: Bot,
        badge: "AI",
        badgeVariant: "new",
      },
      {
        label: "Scheduler",
        href: "/dashboard/scheduler",
        icon: Calendar,
      },
      {
        label: "DM Campaigns",
        href: "/dashboard/campaigns",
        icon: MessageSquare,
        badge: "3",
        badgeVariant: "count",
      },
      {
        label: "Audience Targeting",
        href: "/dashboard/targeting",
        icon: Target,
      },
    ],
  },
  {
    title: "Management",
    items: [
      {
        label: "Accounts",
        href: "/dashboard/accounts",
        icon: Users,
      },
      {
        label: "Webhooks",
        href: "/dashboard/webhooks",
        icon: Webhook,
      },
    ],
  },
  {
    title: "Settings",
    items: [
      {
        label: "Billing",
        href: "/dashboard/billing",
        icon: CreditCard,
      },
      {
        label: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
      },
      {
        label: "Help & Support",
        href: "/dashboard/support",
        icon: HelpCircle,
      },
    ],
  },
];
