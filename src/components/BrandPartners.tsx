"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { brandPartners } from "@/lib/nav";

export function BrandPartners() {
  return (
    <section className="relative overflow-hidden bg-surface-soft py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Products"
          title="Authorised installers of"
          accent="leading manufacturers"
          description="Every system we design is built on hardware from the industry's most trusted names."
        />

        <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3">
          {brandPartners.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group flex h-28 items-center justify-center rounded-2xl border border-line bg-white px-6 py-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-md"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-10 w-auto max-w-full object-contain grayscale transition duration-300 group-hover:grayscale-0"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
