"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const DURATION = 6000;

const slides = [
  {
    tag: "CCTV Camera Kits",
    title: "Complete protection, ready to install",
    description: "Every kit comes with cameras, recorder and cabling — fitted by our own engineers in a day.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1600&q=80",
    href: "/cctv-camera-kits",
    cta: "Explore Kits",
  },
  {
    tag: "Commercial CCTV",
    title: "Protect your business, day and night",
    description: "Professional-grade cameras and analytics that keep staff, stock and premises secure.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    href: "/cctv-cameras",
    cta: "Commercial CCTV",
  },
  {
    tag: "Alarm Systems",
    title: "Intruder alarms that never sleep",
    description: "Monitored, smart-sensor alarms that work alongside your CCTV for total peace of mind.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80",
    href: "/alarm-systems",
    cta: "Explore Alarms",
  },
  {
    tag: "Video Door Entry",
    title: "See who's calling, from anywhere",
    description: "Talk to visitors and unlock the door remotely, straight from your phone.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=80",
    href: "/video-door-entry",
    cta: "Explore Door Entry",
  },
  {
    tag: "WiFi CCTV Cameras",
    title: "No cables. No limits.",
    description: "Wireless cameras that fit sheds, gates and outbuildings a wired system never could.",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1600&q=80",
    href: "/wifi-cctv-cameras",
    cta: "Explore WiFi Cameras",
  },
];

export function PromoSlider() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActive((prev) => (prev + 1) % slides.length);
    }, DURATION);
    return () => clearInterval(timer);
  }, [active]);

  function go(index: number) {
    setDirection(index > active ? 1 : -1);
    setActive(index);
  }

  function next() {
    setDirection(1);
    setActive((prev) => (prev + 1) % slides.length);
  }

  function prev() {
    setDirection(-1);
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  }

  const slide = slides[active];

  return (
    <section className="relative bg-background">
      <div className="relative h-[540px] w-full overflow-hidden sm:h-[600px]">
        <AnimatePresence mode="sync" custom={direction}>
          <motion.div
            key={active}
            custom={direction}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <img src={slide.image} alt={slide.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="relative flex h-full items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-20 sm:pb-24 lg:px-8">
            <div className="max-w-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-white backdrop-blur">
                    {slide.tag}
                  </span>
                  <h2 className="font-display mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                    {slide.title}
                  </h2>
                  <p className="mt-4 text-base text-white/75 sm:text-lg">{slide.description}</p>
                  <Link
                    href={slide.href}
                    className="group mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/30 transition hover:brightness-110"
                  >
                    {slide.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20 sm:left-8"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20 sm:right-8"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="absolute inset-x-0 bottom-8 flex items-center justify-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.tag}
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="relative h-1.5 w-10 overflow-hidden rounded-full bg-white/25"
            >
              {i === active && (
                <motion.span
                  key={active}
                  className="absolute inset-y-0 left-0 bg-white"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: DURATION / 1000, ease: "linear" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
