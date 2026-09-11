"use client";

import CountUp from "react-countup";
import { Camera, Award, Star, Clock } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

const stats = [
  { icon: Camera, value: 2500, suffix: "+", label: "Systems Installed" },
  { icon: Award, value: 15, suffix: "+", label: "Years of Experience" },
  { icon: Star, value: 4.9, decimals: 1, suffix: "/5", label: "Average Customer Rating" },
  { icon: Clock, value: 60, suffix: " min", label: "Callout Response Time" },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-surface-soft py-28 sm:py-32">
      <div className="absolute inset-0 bg-dot-grid opacity-10" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
            By the numbers
          </span>
          <h2 className="font-display mt-4 text-3xl font-bold text-foreground sm:text-4xl">
            Trusted by homes and businesses across the UK
          </h2>
        </Reveal>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {stats.map((stat) => (
            <RevealItem key={stat.label}>
              <div className="glass rounded-2xl p-8 text-center transition hover:border-brand-blue/40">
                <stat.icon className="mx-auto h-6 w-6 text-brand-blue" />
                <div className="font-display mt-4 text-4xl font-bold text-foreground sm:text-5xl">
                  <CountUp
                    end={stat.value}
                    decimals={stat.decimals ?? 0}
                    duration={2.2}
                    suffix={stat.suffix ?? ""}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </div>
                <div className="mt-2 text-sm text-foreground/50">{stat.label}</div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
