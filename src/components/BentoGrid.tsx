"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PackageCheck, Camera, Wifi, BellRing, DoorOpen, LifeBuoy, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const tiles = [
  {
    icon: PackageCheck,
    title: "CCTV Camera Kits",
    description:
      "Complete, plug-and-play kits with cameras, recorder and cabling — sized to your property and ready to install.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80",
    href: "/cctv-camera-kits",
    span: "md:col-span-2 md:row-span-2",
    large: true,
  },
  {
    icon: Camera,
    title: "CCTV Cameras",
    description: "Bullet, dome, turret and PTZ cameras for every site and budget.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    href: "/cctv-cameras",
    span: "md:col-span-2",
  },
  {
    icon: Wifi,
    title: "WiFi CCTV Cameras",
    description: "Wireless cameras that install anywhere, no cabling required.",
    image: null,
    href: "/wifi-cctv-cameras",
    span: "md:col-span-1",
  },
  {
    icon: BellRing,
    title: "Alarm Systems",
    description: "Monitored intruder alarms that alert you and our team instantly.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    href: "/alarm-systems",
    span: "md:col-span-1",
  },
  {
    icon: DoorOpen,
    title: "Video Door Entry",
    description: "See and speak to visitors from your phone before you open the door.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    href: "/video-door-entry",
    span: "md:col-span-2",
  },
  {
    icon: LifeBuoy,
    title: "Customer Support",
    description: "UK-based engineers on hand for installation, maintenance and callouts.",
    image: null,
    href: "/support",
    span: "md:col-span-2",
  },
];

export function BentoGrid() {
  return (
    <section className="relative bg-background py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we offer"
          title="Everything you need,"
          accent="supplied and installed"
          description="From a single doorbell camera to a fully monitored commercial site — six services, one trusted installer."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-4 md:[grid-auto-rows:220px]">
          {tiles.map((tile, i) => (
            <motion.div
              key={tile.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: EASE }}
              className={tile.span}
            >
              <Link
                href={tile.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-blue/50 hover:shadow-[0_0_40px_-8px_rgba(47,111,240,0.5)]"
              >
                {tile.image && (
                  <>
                    <img
                      src={tile.image}
                      alt={tile.title}
                      className="absolute inset-0 h-full w-full object-cover opacity-25 transition duration-500 group-hover:scale-105 group-hover:opacity-35"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
                  </>
                )}

                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/5 text-brand-blue transition group-hover:bg-gradient-to-br group-hover:from-brand-blue group-hover:to-brand-violet group-hover:text-white">
                      <tile.icon className="h-5 w-5" />
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-foreground/30 opacity-0 transition group-hover:opacity-100" />
                  </div>

                  <div>
                    <h3 className={`font-display font-bold text-foreground ${tile.large ? "text-2xl" : "text-lg"}`}>
                      {tile.title}
                    </h3>
                    <p className="mt-2 max-w-sm text-sm text-foreground/60">{tile.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
