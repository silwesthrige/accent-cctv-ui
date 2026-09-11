"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight, LifeBuoy } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { productLinks, solutionLinks, standaloneLinks, allProductLinks, companyLinks } from "@/lib/nav";

function MegaMenu<T extends { href: string; icon: React.ElementType; title: string; description: string }>({
  label,
  items,
}: {
  label: string;
  items: readonly T[];
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
            className="absolute left-1/2 top-full z-50 w-[420px] -translate-x-1/2 pt-4"
          >
            <div className="glass-strong grid grid-cols-1 gap-1 rounded-2xl p-3 shadow-2xl shadow-black/10 dark:shadow-black/40">
              {items.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex items-start gap-3 rounded-xl p-3 transition hover:bg-foreground/5"
                >
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-foreground/5 text-brand-blue transition group-hover:bg-gradient-to-br group-hover:from-brand-blue group-hover:to-brand-violet group-hover:text-white">
                    <item.icon className="h-[18px] w-[18px]" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-foreground">{item.title}</span>
                    <span className="mt-0.5 block text-xs text-foreground/50">{item.description}</span>
                  </span>
                </Link>
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
        <Link href="/" className="flex items-center">
          <span className="flex items-center rounded-lg bg-white px-2.5 py-1.5 shadow-sm">
            <img src="/accent-logo.png" alt="Accent CCTV Solutions" className="h-6 w-auto sm:h-7" />
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          <MegaMenu label="Products" items={productLinks} />
          {standaloneLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition hover:text-foreground"
            >
              {item.title}
            </Link>
          ))}
          <MegaMenu
            label="Solutions"
            items={solutionLinks.map((s) => ({ ...s, title: s.title.replace(" CCTV", "") }))}
          />
          <Link href="/about" className="text-sm font-medium text-foreground/80 transition hover:text-foreground">
            About Us
          </Link>
          <Link href="/projects" className="text-sm font-medium text-foreground/80 transition hover:text-foreground">
            Projects
          </Link>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Link
            href="/support"
            className="flex items-center gap-1.5 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-4 py-2.5 text-sm font-semibold text-brand-blue transition hover:border-brand-blue/50 hover:bg-brand-blue/15"
          >
            <LifeBuoy className="h-4 w-4" />
            Support
          </Link>
          <Link
            href="/support"
            className="group relative flex items-center gap-1.5 overflow-hidden rounded-full bg-gradient-to-r from-brand-blue to-brand-violet px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/20 transition hover:shadow-brand-violet/40 hover:brightness-110"
          >
            Get a Free Quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
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
            className="fixed inset-0 z-[70] overflow-y-auto bg-background lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-4">
              <span className="flex items-center rounded-lg bg-white px-2.5 py-1.5 shadow-sm">
                <img src="/accent-logo.png" alt="Accent CCTV Solutions" className="h-6 w-auto" />
              </span>
              <button className="text-foreground" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X className="h-6 w-6" />
              </button>
            </div>
            <motion.div
              className="flex flex-col gap-1 px-6 pb-10 pt-8"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
            >
              <motion.div variants={{ hidden: { opacity: 0, x: -16 }, show: { opacity: 1, x: 0 } }}>
                <Link
                  href="/support"
                  onClick={() => setMobileOpen(false)}
                  className="mb-2 flex items-center gap-2 rounded-xl border border-brand-blue/30 bg-brand-blue/10 px-4 py-3.5 text-lg font-semibold text-brand-blue font-display"
                >
                  <LifeBuoy className="h-5 w-5" />
                  Customer Support
                </Link>
              </motion.div>
              {[...allProductLinks, ...companyLinks.filter((c) => c.title !== "Customer Support")].map((item) => (
                <motion.div
                  key={item.title}
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    show: { opacity: 1, x: 0 },
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block border-b border-line py-3.5 text-lg font-semibold text-foreground/90 font-display"
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={{ hidden: { opacity: 0, x: -16 }, show: { opacity: 1, x: 0 } }}>
                <Link
                  href="/support"
                  onClick={() => setMobileOpen(false)}
                  className="mt-6 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet px-5 py-3.5 text-center font-semibold text-white"
                >
                  Get a Free Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
