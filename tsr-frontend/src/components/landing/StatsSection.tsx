// Used in: src/app/(website)/page.tsx - Social proof numbers section

// Stats data - update with real numbers
const STATS = [
  { value: "2,400+", label: "Active Users" },
  { value: "12M+", label: "Actions Automated" },
  { value: "4.9★", label: "Average Rating" },
  { value: "98%", label: "Satisfaction Rate" },
] as const;

export default function StatsSection() {
  return (
    <section className="py-16 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
                {stat.value}
              </p>
              <p className="text-sm text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
