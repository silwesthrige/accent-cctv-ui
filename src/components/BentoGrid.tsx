"use client";

import { motion } from "framer-motion";
import { Camera, BrainCircuit, KeyRound, Cloud, Smartphone, BellRing, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const tiles = [
  {
    icon: Camera,
    title: "Smart Cameras",
    description:
      "Edge-AI hardware that sees clearly in low light, fog, and glare — no extra processors required.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-2 md:row-span-2",
    large: true,
  },
  {
    icon: BrainCircuit,
    title: "AI Analytics",
    description: "Detect intrusions, loitering, and anomalies before they escalate.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-2",
  },
  {
    icon: KeyRound,
    title: "Access Control",
    description: "Badge, mobile, and biometric entry — managed from one console.",
    image: null,
    span: "md:col-span-1",
  },
  {
    icon: Cloud,
    title: "Cloud Storage",
    description: "Encrypted, redundant footage retention with instant retrieval.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-1",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Monitor every site, badge new visitors, and respond from your pocket.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    span: "md:col-span-2",
  },
  {
    icon: BellRing,
    title: "Real-Time Alerts",
    description: "Push, SMS, and API alerts the second something needs attention.",
    image: null,
    span: "md:col-span-2",
  },
];

export function BentoGrid() {
  return (
    <section className="relative bg-background py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Platform"
          title="One platform,"
          accent="every layer of security"
          description="Six connected products that eliminate the blind spots between hardware, software, and your team."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-4 md:[grid-auto-rows:220px]">
          {tiles.map((tile, i) => (
            <motion.div
              key={tile.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: EASE }}
              className={`group relative overflow-hidden rounded-2xl border border-line bg-surface/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-blue/50 hover:shadow-[0_0_40px_-8px_rgba(47,111,240,0.5)] ${tile.span}`}
            >
              {tile.image && (
                <>
                  <img
                    src={tile.image}
                    alt={tile.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-25 transition duration-500 group-hover:scale-105 group-hover:opacity-35"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
                </>
              )}

              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/5 text-brand-blue transition group-hover:bg-gradient-to-br group-hover:from-brand-blue group-hover:to-brand-violet group-hover:text-white">
                    <tile.icon className="h-5 w-5" />
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-foreground/30 opacity-0 transition group-hover:opacity-100" />
                </div>

                <div>
                  <h3 className={`font-display font-bold text-foreground ${tile.large ? "text-2xl" : "text-lg"}`}>
                    {tile.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-foreground/60">{tile.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
