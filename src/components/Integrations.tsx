"use client";

import { motion } from "framer-motion";
import {
  Webhook,
  Cloud,
  Database,
  Mail,
  MessageSquare,
  Workflow,
  Puzzle,
  Boxes,
  Zap,
  Server,
  Globe,
  Link2,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const gridIcons = [Webhook, Database, Mail, MessageSquare, Workflow, Puzzle, Boxes, Zap, Server, Globe, Cloud, Link2];

const orbitIcons = [
  { Icon: Webhook, radius: 130, duration: 20, delay: 0 },
  { Icon: Mail, radius: 130, duration: 20, delay: -6.6 },
  { Icon: Database, radius: 130, duration: 20, delay: -13.3 },
];

export function Integrations() {
  return (
    <section className="relative overflow-hidden bg-surface-soft py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading eyebrow="Ecosystem" title="500+ integrations," accent="zero custom code" />

        <div className="relative mx-auto mt-16 flex h-64 items-center justify-center">
          <div className="absolute h-56 w-56 rounded-full border border-dashed border-foreground/10" />
          <div className="glass flex h-24 w-24 items-center justify-center rounded-full text-center">
            <span className="font-display text-lg font-bold text-foreground">500+</span>
          </div>
          {orbitIcons.map(({ Icon, radius, duration, delay }, i) => (
            <div
              key={i}
              className="animate-orbit absolute"
              style={
                {
                  "--orbit-radius": `${radius}px`,
                  animationDuration: `${duration}s`,
                  animationDelay: `${delay}s`,
                } as React.CSSProperties
              }
            >
              <div className="glass flex h-12 w-12 items-center justify-center rounded-xl text-brand-blue">
                <Icon className="h-5 w-5" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-4 gap-4 sm:grid-cols-6 lg:grid-cols-12">
          {gridIcons.map((Icon, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3 + (i % 4) * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
              className="flex aspect-square items-center justify-center rounded-xl border border-line bg-foreground/[0.02] text-foreground/50 transition hover:border-brand-blue/40 hover:text-brand-blue"
            >
              <Icon className="h-5 w-5" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
