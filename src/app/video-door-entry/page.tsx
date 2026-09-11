import type { Metadata } from "next";
import { Eye, LockOpen, Mic, Smartphone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Video Door Entry | Accent CCTV Solutions",
  description: "Video door entry and intercom systems for homes and businesses, supplied and installed by Accent CCTV Solutions.",
};

const features = [
  {
    icon: Eye,
    title: "See Before You Answer",
    description: "A live video feed of your doorstep, day or night, before you decide to open the door.",
  },
  {
    icon: LockOpen,
    title: "Remote Unlock",
    description: "Let in visitors, couriers or staff remotely, without leaving your desk or your sofa.",
  },
  {
    icon: Mic,
    title: "Two-Way Audio",
    description: "Speak to whoever's calling through crystal-clear two-way audio.",
  },
  {
    icon: Smartphone,
    title: "Works With Your Phone",
    description: "Answer the door from anywhere with the mobile app — no need to be home.",
  },
];

export default function VideoDoorEntryPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        breadcrumb="Video Door Entry"
        title="Know who's at the door, before you open it"
        description="Video intercom systems for homes, offices and apartment buildings, fitted by our own engineers."
      />

      <section className="relative bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Features" title="Answer the door," accent="from anywhere" />
          <RevealGroup className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {features.map((f) => (
              <RevealItem key={f.title}>
                <div className="h-full rounded-2xl border border-line bg-surface/60 p-6 transition hover:-translate-y-1 hover:border-brand-blue/40">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-foreground/5 text-brand-blue">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display mt-5 text-lg font-bold text-foreground">{f.title}</h3>
                  <p className="mt-2 text-sm text-foreground/60">{f.description}</p>
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
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80"
                alt="Video door entry app on a phone"
                className="h-[360px] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">Homes & Offices</span>
            <h2 className="font-display mt-4 text-3xl font-bold text-foreground sm:text-4xl">
              From single doors to whole buildings
            </h2>
            <p className="mt-5 text-foreground/60">
              Whether it&apos;s a single front door or a multi-tenant apartment block with dozens of residents, we design
              video door entry systems around how your building is actually used — including integration with your
              existing CCTV and access control.
            </p>
          </Reveal>
        </div>
      </section>

      <CTABanner
        title="Want to see who's at the door?"
        description="Book a free site survey and we'll recommend the right video door entry setup."
      />
    </>
  );
}
