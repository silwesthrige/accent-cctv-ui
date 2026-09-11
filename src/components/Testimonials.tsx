"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const testimonials = [
  {
    quote:
      "The team surveyed our house, explained every option without any pressure, and had a four-camera system running the same week. Couldn't fault them.",
    name: "Sarah Whitfield",
    title: "Homeowner",
    company: "Manchester",
  },
  {
    quote:
      "We switched our warehouse over to Accent after our old alarm kept false-triggering. The AcuSense cameras alone have cut our night call-outs to almost zero.",
    name: "Marcus Ilori",
    title: "Operations Manager",
    company: "Cargill Logistics",
  },
  {
    quote:
      "Rolling out CCTV to five new stores used to mean weeks of disruption. Accent had every site live within a fortnight, with barely any downtime on the shop floor.",
    name: "Priya Anand",
    title: "Store Operations Lead",
    company: "Halcyon Retail",
  },
  {
    quote:
      "Video door entry across our reception and staff entrance means we always know who's at the door before it's opened. Support have been brilliant since day one.",
    name: "Tom Reyes",
    title: "Facilities Manager",
    company: "Northgate Offices",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[index];

  return (
    <section className="relative bg-background py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionHeading eyebrow="Customer stories" title="Security teams" accent="trust Accent CCTV" />

        <div className="glass relative mt-14 min-h-[280px] overflow-hidden rounded-3xl p-10 sm:p-14">
          <Quote className="h-10 w-10 text-brand-blue/40" />
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) setIndex((prev) => (prev + 1) % testimonials.length);
                else if (info.offset.x > 80) setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
              }}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="cursor-grab active:cursor-grabbing"
            >
              <p className="font-display mt-6 text-2xl font-medium leading-snug text-foreground sm:text-3xl">
                “{current.quote}”
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-violet font-display font-bold text-white">
                  {current.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{current.name}</div>
                  <div className="text-sm text-foreground/50">
                    {current.title}, {current.company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-8 bg-gradient-to-r from-brand-blue to-brand-violet" : "w-2 bg-foreground/20 hover:bg-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
