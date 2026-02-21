// Used in: src/app/(website)/page.tsx - Social proof numbers section (Lambda style)

const STATS: { value: string; label: string }[] = [
  { value: "2,400+", label: "Active Users" },
  { value: "12M+", label: "Actions Automated" },
  { value: "4.9★", label: "Average Rating" },
  { value: "98%", label: "Satisfaction Rate" },
];

export default function StatsSection() {
  return (
    <section className="py-16 border-y border-lambda-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl md:text-5xl font-black text-lambda-cream mb-2 tracking-tight">
                {stat.value}
              </p>
              <p className="font-mono text-xs uppercase tracking-widest text-lambda-text-secondary">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
