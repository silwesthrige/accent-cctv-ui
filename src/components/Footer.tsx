"use client";

import { AtSign, MessageCircle, Rss, Globe, ArrowRight, ShieldCheck } from "lucide-react";

const columns = [
  {
    title: "Product",
    links: ["Smart Cameras", "AI Analytics", "Access Control", "Cloud Storage", "Mobile App"],
  },
  {
    title: "Solutions",
    links: ["Enterprise Offices", "Industrial & Logistics", "Education", "Retail", "Healthcare"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Newsroom", "Partners", "Contact"],
  },
  {
    title: "Resources",
    links: ["Documentation", "API Reference", "Case Studies", "Blog", "Help Center"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Security", "Compliance", "Cookie Policy"],
  },
];

const socials = [AtSign, MessageCircle, Rss];

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-surface-soft">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[280px_1fr]">
          <div>
            <a href="#" className="flex items-center gap-2">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-blue to-brand-violet font-display text-sm font-bold text-white">
                A
              </span>
              <span className="font-display text-lg font-bold text-foreground">Accent CCTV Solutions</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-foreground/50">
              Enterprise cloud video security, AI analytics, and access control — unified in
              one platform.
            </p>

            <div className="mt-6">
              <p className="text-sm font-medium text-foreground">Get product updates</p>
              <form className="mt-3 flex items-center gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full rounded-full border border-line bg-foreground/5 px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 outline-none focus:border-brand-blue/50"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-brand-blue to-brand-violet text-white transition hover:brightness-110"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="font-display text-sm font-semibold text-foreground">{col.title}</h4>
                <ul className="mt-4 flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-foreground/50 transition hover:text-foreground">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-line pt-8 sm:flex-row">
          <div className="flex items-center gap-2 text-xs text-foreground/40">
            <ShieldCheck className="h-4 w-4 text-brand-blue" />
            SOC 2 Type II Certified &copy; {new Date().getFullYear()} Accent CCTV Solutions, Inc. All rights
            reserved.
          </div>

          <div className="flex items-center gap-5">
            {socials.map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-foreground/50 transition hover:border-brand-blue/40 hover:text-brand-blue"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
            <button className="flex items-center gap-1.5 text-xs text-foreground/50 transition hover:text-foreground">
              <Globe className="h-4 w-4" />
              English (US)
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
