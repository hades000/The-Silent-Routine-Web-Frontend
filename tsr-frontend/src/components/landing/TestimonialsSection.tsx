// Used in: src/app/(website)/page.tsx - Social proof testimonials

import { Star } from "lucide-react";

// Testimonial type definition
interface Testimonial {
  name: string;
  handle: string;
  initials: string;
  role: string;
  content: string;
  avatarColor: string; // Tailwind bg color class
}

// Testimonials data
const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Chen",
    handle: "@sarahcreates",
    initials: "SC",
    role: "Lifestyle Creator",
    content:
      "Went from 3k to 28k followers in 4 months. The AI engagement feels completely natural. Never been flagged.",
    avatarColor: "bg-violet-600",
  },
  {
    name: "Marcus Webb",
    handle: "@marcuswebb.biz",
    initials: "MW",
    role: "E-commerce Brand",
    content:
      "Our Instagram sales went up 340% after using TSR. The automated DM campaigns convert incredibly well.",
    avatarColor: "bg-blue-600",
  },
  {
    name: "Priya Sharma",
    handle: "@priyafitness",
    initials: "PS",
    role: "Fitness Coach",
    content:
      "12k new real followers and my engagement rate doubled. The results speak for themselves.",
    avatarColor: "bg-pink-600",
  },
  {
    name: "James O'Brien",
    handle: "@jamesobrien.agency",
    initials: "JO",
    role: "Social Media Agency",
    content:
      "We manage 40+ client accounts with TSR. Saved hundreds of hours every month with better results.",
    avatarColor: "bg-emerald-600",
  },
  {
    name: "Luna Park",
    handle: "@lunaphotography",
    initials: "LP",
    role: "Photographer",
    content:
      "The scheduling feature alone is worth it. The AI engagement is what really moved the needle.",
    avatarColor: "bg-orange-600",
  },
  {
    name: "Diego Rivera",
    handle: "@diegorivera.food",
    initials: "DR",
    role: "Food Blogger",
    content:
      "My food blog hit 100k followers faster than I ever imagined. Professional and reliable.",
    avatarColor: "bg-red-600",
  },
];

// Reusable Star Rating component
function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-24 border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#4f6ef7] uppercase tracking-widest mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-5">
            Loved by creators worldwide
          </h2>
          <p className="text-base text-zinc-400 max-w-md mx-auto">
            Join thousands of creators growing on Instagram with The Silent
            Routine.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.handle}
              className="bg-white/[0.03] border border-white/8 rounded-2xl p-5 hover:border-white/15 transition-colors duration-300"
            >
              <StarRating />

              <p className="text-zinc-300 text-sm leading-relaxed my-4">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full ${testimonial.avatarColor} flex items-center justify-center text-xs font-bold text-white flex-shrink-0`}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-zinc-500">
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
