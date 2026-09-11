"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Video, Radar, DoorOpen, Wrench } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const DURATION = 6000;

const tabs = [
  {
    icon: Video,
    label: "Monitoring",
    title: "See your property, in real time",
    description:
      "Watch live video from every camera in the free mobile app, with instant playback whenever something happens.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Radar,
    label: "Detection",
    title: "AcuSense filters out the noise",
    description:
      "Hikvision AcuSense technology tells people and vehicles apart from blowing leaves and passing headlights — cutting false alarms by up to 90%.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: DoorOpen,
    label: "Video Door Entry",
    title: "See who's calling before you answer",
    description:
      "Talk to visitors, view couriers and unlock the door remotely from your phone, wherever you are.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Wrench,
    label: "Installation",
    title: "Fitted by our own certified engineers",
    description:
      "Every system is surveyed, cabled and configured by our in-house team — never subcontracted, always tidy.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
];

export function FeatureTabs() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % tabs.length);
    }, DURATION);
    return () => clearInterval(timer);
  }, [active]);

  return (
    <section className="relative bg-background py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Capabilities"
          title="Built for how you"
          accent="actually use it"
        />

        <div className="mt-16 grid grid-cols-1 gap-4 lg:grid-cols-[340px_1fr] lg:gap-10">
          <div className="flex flex-col gap-2">
            {tabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActive(i)}
                className={`group relative overflow-hidden rounded-xl border px-5 py-4 text-left transition ${
                  active === i
                    ? "border-brand-blue/40 bg-foreground/5"
                    : "border-line hover:border-foreground/15 hover:bg-foreground/[0.03]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition ${
                      active === i
                        ? "bg-gradient-to-br from-brand-blue to-brand-violet text-white"
                        : "bg-foreground/5 text-foreground/50"
                    }`}
                  >
                    <tab.icon className="h-[18px] w-[18px]" />
                  </span>
                  <span className={`font-display font-semibold ${active === i ? "text-foreground" : "text-foreground/60"}`}>
                    {tab.label}
                  </span>
                </div>
                {active === i && (
                  <div className="absolute inset-x-0 bottom-0 h-[2px] bg-foreground/10">
                    <div
                      key={active}
                      className="animate-tab-progress h-full bg-gradient-to-r from-brand-blue to-brand-violet"
                      style={{ animationDuration: `${DURATION}ms` }}
                    />
                  </div>
                )}
              </button>
            ))}
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-2xl border border-line">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <img
                  src={tabs[active].image}
                  alt={tabs[active].title}
                  className="h-full w-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                    {tabs[active].title}
                  </h3>
                  <p className="mt-3 max-w-lg text-foreground/70">{tabs[active].description}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
