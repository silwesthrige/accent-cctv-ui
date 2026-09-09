"use client";

import { motion } from "framer-motion";
import { ClipboardList, HardHat, MonitorCheck, TrendingUp } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    icon: ClipboardList,
    title: "Assess & Design",
    description: "Our engineers map your sites and design a coverage plan tailored to your risk profile.",
  },
  {
    icon: HardHat,
    title: "Install & Onboard",
    description: "Certified installers deploy hardware while your team is onboarded to the platform.",
  },
  {
    icon: MonitorCheck,
    title: "Monitor & Respond",
    description: "AI analytics run around the clock, alerting your team the moment something needs attention.",
  },
  {
    icon: TrendingUp,
    title: "Optimize & Scale",
    description: "Quarterly reviews and effortless expansion keep your security posture ahead of growth.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative bg-background py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="From assessment to always-on,"
          accent="in four steps"
        />

        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-foreground/10 lg:block" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-brand-blue via-brand-violet to-brand-blue lg:block"
          />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-background ring-1 ring-foreground/10">
                  <span className="flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-violet text-white">
                    <step.icon className="h-6 w-6" />
                  </span>
                </div>
                <div className="mt-3 text-xs font-semibold text-brand-blue">STEP 0{i + 1}</div>
                <h3 className="font-display mt-1 text-xl font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-foreground/60">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
