// Used in: Sidebar.tsx - user info + logout at bottom of sidebar

"use client";

import { LogOut, ChevronUp } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

// Replace with actual auth user type from next-auth
interface SidebarUser {
  name: string;
  email: string;
  avatarInitials: string; // e.g "JD" for John Doe
  plan: "Starter" | "Pro" | "Agency";
}

interface SidebarUserCardProps {
  user: SidebarUser;
  isCollapsed: boolean;
}

export default function SidebarUserCard({
  user,
  isCollapsed,
}: SidebarUserCardProps) {
  // Plan badge color map
  const planColors: Record<SidebarUser["plan"], string> = {
    Starter: "text-zinc-400 bg-zinc-800",
    Pro: "text-violet-300 bg-violet-500/20",
    Agency: "text-yellow-300 bg-yellow-500/20",
  };

  return (
    <div className="px-3 pb-3">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className={cn(
              "w-full flex items-center gap-3 rounded-xl px-3 py-2.5",
              "border border-white/5 bg-zinc-900/50 hover:bg-zinc-900",
              "transition-all duration-200 group",
              isCollapsed && "justify-center px-2",
            )}
          >
            {/* Avatar */}
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-600/30 border border-violet-500/40 flex items-center justify-center text-xs font-bold text-violet-300">
              {user.avatarInitials}
            </div>

            {/* User Info - hidden when collapsed */}
            {!isCollapsed && (
              <>
                <div className="flex-1 text-left min-w-0">
                  <p className="text-sm font-medium text-white truncate">
                    {user.name}
                  </p>
                  <p className="text-xs text-zinc-500 truncate">{user.email}</p>
                </div>
                <ChevronUp className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 transition-colors flex-shrink-0" />
              </>
            )}
          </button>
        </DropdownMenuTrigger>

        {/* Dropdown Menu */}
        <DropdownMenuContent
          side="top"
          align="start"
          className="w-56 bg-zinc-900 border border-white/10 text-white mb-1"
        >
          {/* User Header */}
          <div className="px-3 py-2">
            <p className="text-sm font-medium text-white">{user.name}</p>
            <p className="text-xs text-zinc-500">{user.email}</p>
            <span
              className={cn(
                "inline-block mt-1.5 text-[10px] font-semibold px-2 py-0.5 rounded-full",
                planColors[user.plan],
              )}
            >
              {user.plan} Plan
            </span>
          </div>

          <DropdownMenuSeparator className="bg-white/10" />

          {/* Sign Out */}
          <DropdownMenuItem
            className="text-red-400 hover:text-red-300 hover:bg-red-500/10 cursor-pointer gap-2"
            onClick={() => {
              // TODO: wire up signOut() from next-auth
              console.log("Sign out");
            }}
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
