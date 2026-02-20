// Used in: All dashboard pages - provides sidebar + main content area

import React from "react";
import Sidebar from "@/components/dashboard/Sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-black overflow-hidden bg-linear-to-br from-[#171717] via-[#768BDD]/10 to-[#171717]/50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header Bar */}
        {/* <header className="h-16 flex-shrink-0 border-b border-white/5 bg-zinc-950/50 flex items-center px-6">
          <p className="text-sm text-zinc-500">
                
          </p>
        </header> */}

        {/* Page Content - scrollable */}
        <div className="flex-1 overflow-y-auto p-6">{children}</div>
      </main>
    </div>
  );
}
