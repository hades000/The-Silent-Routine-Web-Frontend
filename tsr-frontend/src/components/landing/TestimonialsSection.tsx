// Used in: src/app/(website)/page.tsx - Social proof testimonials (Lambda minimal style)

interface Testimonial {
  name: string;
  handle: string;
  initials: string;
  role: string;
  content: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Chen",
    handle: "@sarahcreates",
    initials: "SC",
    role: "Lifestyle Creator",
    content:
      "Went from 3k to 28k followers in 4 months. The AI engagement feels completely natural. Never been flagged.",
  },
  {
    name: "Marcus Webb",
    handle: "@marcuswebb.biz",
    initials: "MW",
    role: "E-commerce Brand",
    content:
      "Our Instagram sales went up 340% after using TSR. The automated DM campaigns convert incredibly well.",
  },
  {
    name: "Priya Sharma",
    handle: "@priyafitness",
    initials: "PS",
    role: "Fitness Coach",
    content:
      "12k new real followers and my engagement rate doubled. The results speak for themselves.",
  },
  {
    name: "James O'Brien",
    handle: "@jamesobrien.agency",
    initials: "JO",
    role: "Social Media Agency",
    content:
      "We manage 40+ client accounts with TSR. Saved hundreds of hours every month with better results.",
  },
  {
    name: "Luna Park",
    handle: "@lunaphotography",
    initials: "LP",
    role: "Photographer",
    content:
      "The scheduling feature alone is worth it. The AI engagement is what really moved the needle.",
  },
  {
    name: "Diego Rivera",
    handle: "@diegorivera.food",
    initials: "DR",
    role: "Food Blogger",
    content:
      "My food blog hit 100k followers faster than I ever imagined. Professional and reliable.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 border-t border-lambda-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-16">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-lambda-text-muted mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-lambda-cream tracking-tight mb-4">
            Loved by creators worldwide
          </h2>
          <p className="text-sm text-lambda-text-secondary max-w-md">
            Join thousands of creators growing on Instagram with The Silent
            Routine.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-lambda-border">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={testimonial.handle}
              className={cn(
                "p-8 border-b border-lambda-border",
                // Add right border for left/middle columns
                index % 3 !== 2 && "lg:border-r",
                index % 2 !== 1 && "md:border-r lg:border-r-0",
                index % 3 !== 2 && "lg:border-r",
              )}
            >
              <p className="text-sm text-lambda-text-secondary leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 border border-lambda-border rounded-sm flex items-center justify-center font-mono text-[10px] text-lambda-cream font-bold">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-lambda-cream font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-lambda-text-muted">
                    {testimonial.handle} · {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
