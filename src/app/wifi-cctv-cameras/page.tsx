import type { Metadata } from "next";
import { Unplug, MoveDiagonal, BatteryCharging, BellRing } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealGroup, RevealItem, Reveal } from "@/components/Reveal";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "WiFi CCTV Cameras | Accent CCTV Solutions",
  description: "Wireless WiFi CCTV cameras for flexible, cable-free installations, supplied and fitted by Accent CCTV Solutions.",
};

const benefits = [
  {
    icon: Unplug,
    title: "No Cabling Required",
    description: "No chasing walls or running cable — cameras connect straight to your WiFi network.",
  },
  {
    icon: MoveDiagonal,
    title: "Flexible Placement",
    description: "Mount cameras almost anywhere, including sheds, gates and outbuildings.",
  },
  {
    icon: BatteryCharging,
    title: "Battery or Solar Powered",
    description: "Choose rechargeable battery or solar-panel options for truly cable-free coverage.",
  },
  {
    icon: BellRing,
    title: "Instant Mobile Alerts",
    description: "Get a notification and live view the moment motion is detected, wherever you are.",
  },
];

const useCases = ["Sheds & outbuildings", "Rental properties", "Temporary or seasonal sites", "Holiday homes", "Gates & driveways", "Construction sites"];

export default function WifiCctvCamerasPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        breadcrumb="WiFi CCTV Cameras"
        title="Wireless cameras, wherever you need them"
        description="No cabling, no disruption — WiFi cameras that fit properties where a wired system isn't practical."
      />

      <section className="relative bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Why Go Wireless" title="Built for" accent="flexibility" />
          <RevealGroup className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {benefits.map((b) => (
              <RevealItem key={b.title}>
                <div className="h-full rounded-2xl border border-line bg-surface/60 p-6 transition hover:-translate-y-1 hover:border-brand-blue/40">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-foreground/5 text-brand-blue">
                    <b.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display mt-5 text-lg font-bold text-foreground">{b.title}</h3>
                  <p className="mt-2 text-sm text-foreground/60">{b.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="relative overflow-hidden bg-surface-soft py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-line">
              <img
                src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80"
                alt="WiFi CCTV camera mounted outdoors"
                className="h-[360px] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">Where They Fit</span>
            <h2 className="font-display mt-4 text-3xl font-bold text-foreground sm:text-4xl">Popular use cases</h2>
            <ul className="mt-6 grid grid-cols-2 gap-3">
              {useCases.map((u) => (
                <li key={u} className="rounded-xl border border-line bg-surface/60 px-4 py-3 text-sm text-foreground/70">
                  {u}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CTABanner
        title="Want a cable-free setup?"
        description="Book a free site survey and we'll confirm whether WiFi cameras are right for your property."
      />
    </>
  );
}
