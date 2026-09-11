"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { solutionLinks } from "@/lib/nav";

const images = [
  "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
];

export function HomeCommercialSplit() {
  return (
    <section className="relative bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {solutionLinks.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-line bg-surface/60"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={images[i]}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                <span className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-violet text-white shadow-lg">
                  <item.icon className="h-6 w-6" />
                </span>
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl font-bold text-foreground">{item.title}</h3>
                <p className="mt-3 max-w-md text-foreground/60">{item.description}</p>
                <Link
                  href={item.href}
                  className="group/btn mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-blue/20 transition hover:brightness-110"
                >
                  Find Out More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
