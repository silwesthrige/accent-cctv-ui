"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Play, ArrowRight, ChevronDown, Sparkles, Activity, ShieldCheck, Users } from "lucide-react";
import { GradientBlobs } from "./GradientBlobs";

const HERO_VIDEO = "https://assets.mixkit.co/videos/48922/48922-720.mp4";
const HERO_POSTER =
  "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80";

export function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section className="relative overflow-hidden bg-background pt-40 pb-24 sm:pt-48 sm:pb-32">
      <GradientBlobs />
      <div className="absolute inset-0 bg-dot-grid opacity-[0.15] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass mx-auto flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-foreground/80"
        >
          <Sparkles className="h-3.5 w-3.5 text-brand-blue" />
          New: AI Threat Detection 2.0
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display mt-8 text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-[80px] lg:leading-[1.05]"
        >
          Intelligent Security.
          <br />
          Built for <span className="text-gradient">Scale</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-foreground/60 sm:text-xl"
        >
          Accent CCTV Solutions unifies cloud video, AI-powered analytics, and access
          control into a single command center — so enterprise teams can secure every
          site without drowning in dashboards.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#demo"
            className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-brand-blue to-brand-violet px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 transition duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-brand-violet/50"
          >
            Get a Demo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#"
            className="glass flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-foreground transition hover:bg-foreground/5"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-foreground/10">
              <Play className="h-3 w-3 fill-foreground text-foreground" />
            </span>
            Watch Demo
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mx-auto mt-20 max-w-4xl [perspective:1200px]"
        >
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY }}
            className="glass relative rounded-2xl p-2 shadow-2xl shadow-black/10 dark:shadow-black/60"
          >
            <div className="relative overflow-hidden rounded-xl border border-line">
              <video
                className="h-[420px] w-full object-cover opacity-80 sm:h-[480px]"
                src={HERO_VIDEO}
                poster={HERO_POSTER}
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

              <div className="absolute left-6 top-6 flex items-center gap-2 rounded-lg bg-background/70 px-3 py-2 text-xs font-medium text-foreground backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Live — 214 cameras online
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3">
                {[
                  { icon: Activity, label: "Anomalies", value: "3 flagged" },
                  { icon: ShieldCheck, label: "Uptime", value: "99.98%" },
                  { icon: Users, label: "Foot traffic", value: "1,204 today" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="glass flex items-center gap-2.5 rounded-xl px-4 py-3"
                  >
                    <stat.icon className="h-4 w-4 text-brand-blue" />
                    <div className="text-left">
                      <div className="text-[11px] text-foreground/50">{stat.label}</div>
                      <div className="text-sm font-semibold text-foreground">{stat.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-8 flex justify-center">
        <ChevronDown className="animate-bounce-soft h-6 w-6 text-foreground/40" />
      </div>
    </section>
  );
}
