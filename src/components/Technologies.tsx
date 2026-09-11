"use client";

import { motion } from "framer-motion";
import { ScanLine, Thermometer, Radar, Map, Eye, ExternalLink } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const technologies = [
  {
    icon: ScanLine,
    title: "ANPR Cameras",
    description: "Automatic number plate recognition for gated sites, car parks and access control.",
    href: "https://www.hikvision.com/uk/solutions/solutions-by-function/anpr--automatic-number-plate-recognition-/",
  },
  {
    icon: Thermometer,
    title: "Thermal Imaging",
    description: "Detect people and vehicles in total darkness, smoke or fog for critical perimeters.",
    href: "https://www.hikvision.com/uk/core-technologies/infrared-technology/thermal-imaging/",
  },
  {
    icon: Radar,
    title: "Intelligent Perimeter Protection",
    description: "AcuSense-powered boundary alerts that filter out false alarms from wind and animals.",
    href: "https://www.hikvision.com/uk/products/IP-Products/Network-Cameras/acusense-products/?category=Network+Products&subCategory=Network+Cameras&series=Pro+Series+%28EasyIP%29&checkedSubSeries=NONE",
  },
  {
    icon: Map,
    title: "Heat Mapping",
    description: "Visualise footfall and dwell time across your showroom or store to optimise layout.",
    href: "https://www.hikvision.com/europe/solutions/solutions-by-function/heat-mapping/",
  },
  {
    icon: Eye,
    title: "Colour & AcuSense Technology",
    description: "Full-colour night vision with smart human/vehicle detection that cuts false alerts.",
    href: "https://www.hikvision.com/uk/core-technologies/see-smarter-technology/acusense/",
  },
];

export function Technologies() {
  return (
    <section className="relative bg-surface-soft py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technology"
          title="Powered by the tech"
          accent="behind every install"
          description="We design every system around the same proven technology used by Hikvision and our other manufacturer partners."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech, i) => (
            <motion.a
              key={tech.title}
              href={tech.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="group relative flex flex-col rounded-2xl border border-line bg-surface/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-blue/50 hover:shadow-[0_0_40px_-8px_rgba(47,111,240,0.35)]"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-foreground/5 text-brand-blue transition group-hover:bg-gradient-to-br group-hover:from-brand-blue group-hover:to-brand-violet group-hover:text-white">
                  <tech.icon className="h-5 w-5" />
                </span>
                <ExternalLink className="h-4 w-4 text-foreground/25 transition group-hover:text-brand-blue" />
              </div>
              <h3 className="font-display mt-5 text-lg font-bold text-foreground">{tech.title}</h3>
              <p className="mt-2 text-sm text-foreground/60">{tech.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
