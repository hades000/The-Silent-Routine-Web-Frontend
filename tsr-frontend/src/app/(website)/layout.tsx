// Used in: All landing pages - provides global background style

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="relative min-h-screen bg-linear-to-br from-[#171717]/90
     via-[#768BDD]/18 to-[#171717]/90 overflow-x-hidden"
    >
      {/* Global deep blue radial background */}
      {/* <div className="fixed inset-0 pointer-events-none z-0"> */}
      {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] rounded-full bg-[#768BDD]/10 blur-[120px]" /> */}
      {/* <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#0d0d4d]/40 blur-[100px]" /> */}
      {/* <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0d0d4d]/40 blur-[100px]" /> */}
      {/* </div> */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
