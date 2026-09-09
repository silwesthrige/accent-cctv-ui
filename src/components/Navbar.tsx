"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Camera,
  BrainCircuit,
  KeyRound,
  Cloud,
  Smartphone,
  BellRing,
  Building2,
  Factory,
  School,
  ShoppingBag,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const products = [
  {
    icon: Camera,
    title: "Smart Cameras",
    description: "Edge-AI hardware built for clarity in any light.",
  },
  {
    icon: BrainCircuit,
    title: "AI Analytics",
    description: "Detect threats, count people, and flag anomalies live.",
  },
  {
    icon: KeyRound,
    title: "Access Control",
    description: "Cloud-managed doors, badges, and visitor flows.",
  },
  {
    icon: Cloud,
    title: "Cloud Storage",
    description: "Encrypted footage retention with instant retrieval.",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Monitor every site from your pocket.",
  },
  {
    icon: BellRing,
    title: "Real-Time Alerts",
    description: "Push, SMS, and API alerts the moment it matters.",
  },
];

const solutions = [
  { icon: Building2, title: "Enterprise Offices", description: "Multi-site visibility for corporate campuses." },
  { icon: Factory, title: "Industrial & Logistics", description: "Perimeter security for warehouses and plants." },
  { icon: School, title: "Education", description: "Campus-wide safety with instant lockdown tools." },
  { icon: ShoppingBag, title: "Retail", description: "Loss prevention and footfall analytics in one view." },
];

function MegaMenu<T extends { icon: React.ElementType; title: string; description: string }>({
  label,
  items,
}: {
  label: string;
  items: T[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 text-sm font-medium text-foreground/80 transition hover:text-foreground">
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute left-1/2 top-full z-50 w-[560px] -translate-x-1/2 pt-4"
          >
            <div className="glass-strong grid grid-cols-2 gap-1 rounded-2xl p-3 shadow-2xl shadow-black/10 dark:shadow-black/40">
              {items.map((item) => (
                <a
                  key={item.title}
                  href="#"
                  className="group flex items-start gap-3 rounded-xl p-3 transition hover:bg-foreground/5"
                >
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-foreground/5 text-brand-blue transition group-hover:bg-gradient-to-br group-hover:from-brand-blue group-hover:to-brand-violet group-hover:text-white">
                    <item.icon className="h-[18px] w-[18px]" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-foreground">{item.title}</span>
                    <span className="mt-0.5 block text-xs text-foreground/50">{item.description}</span>
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[60] transition-all duration-300 ${
        scrolled ? "glass-strong" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-blue to-brand-violet font-display text-sm font-bold text-white">
            A
          </span>
          <span className="font-display text-base font-bold leading-tight text-foreground sm:text-lg">
            Accent CCTV Solutions
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          <MegaMenu label="Products" items={products} />
          <MegaMenu label="Solutions" items={solutions} />
          <a href="#pricing" className="text-sm font-medium text-foreground/80 transition hover:text-foreground">
            Pricing
          </a>
          <a href="#" className="text-sm font-medium text-foreground/80 transition hover:text-foreground">
            Company
          </a>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a href="#" className="text-sm font-medium text-foreground/80 transition hover:text-foreground">
            Login
          </a>
          <a
            href="#demo"
            className="group relative flex items-center gap-1.5 overflow-hidden rounded-full bg-gradient-to-r from-brand-blue to-brand-violet px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/20 transition hover:shadow-brand-violet/40 hover:brightness-110"
          >
            Get a Demo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            className="text-foreground"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-background lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-4">
              <span className="font-display text-lg font-bold text-foreground">Accent CCTV Solutions</span>
              <button className="text-foreground" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X className="h-6 w-6" />
              </button>
            </div>
            <motion.div
              className="flex flex-col gap-1 px-6 pt-8"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
            >
              {["Products", "Solutions", "Pricing", "Company", "Login"].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  onClick={() => setMobileOpen(false)}
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    show: { opacity: 1, x: 0 },
                  }}
                  className="border-b border-line py-4 text-2xl font-semibold text-foreground/90 font-display"
                >
                  {item}
                </motion.a>
              ))}
              <motion.a
                href="#demo"
                onClick={() => setMobileOpen(false)}
                variants={{ hidden: { opacity: 0, x: -16 }, show: { opacity: 1, x: 0 } }}
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet px-5 py-3.5 text-center font-semibold text-white"
              >
                Get a Demo
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
