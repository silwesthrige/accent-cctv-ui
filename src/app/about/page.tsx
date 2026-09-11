import type { Metadata } from "next";
import { ClipboardList, HardHat, Award, LifeBuoy } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { BrandPartners } from "@/components/BrandPartners";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About Us | Accent CCTV Solutions",
  description:
    "Accent CCTV Solutions designs, supplies and installs CCTV, alarm and video door entry systems for homes and businesses, using leading manufacturer technology.",
};

const values = [
  {
    icon: ClipboardList,
    title: "Free Site Surveys",
    description: "Every project starts with a no-obligation visit to design the right system for your property.",
  },
  {
    icon: HardHat,
    title: "In-House Engineers",
    description: "We never subcontract installs — the engineer who surveys your site is the one who fits it.",
  },
  {
    icon: Award,
    title: "Leading Technology",
    description: "We install Hikvision, Dahua and other manufacturer-approved equipment, not unbranded imports.",
  },
  {
    icon: LifeBuoy,
    title: "Ongoing Support",
    description: "Maintenance, callouts and system upgrades are handled by the same team, long after install day.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        breadcrumb="About Us"
        title="Security you can trust, installed by people you can rely on"
        description="Accent CCTV Solutions has been designing, supplying and installing CCTV, alarm and access control systems for homes and businesses across the UK."
      />

      <section className="relative bg-background py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-line">
              <img
                src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80"
                alt="Accent CCTV Solutions engineer installing a camera"
                className="h-[420px] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">Our Story</span>
            <h2 className="font-display mt-4 text-3xl font-bold text-foreground sm:text-4xl">
              An independent installer, not tied to one brand
            </h2>
            <p className="mt-5 text-foreground/60">
              We work with Hikvision, Dahua, Ezviz, Hanwha Vision and other leading manufacturers, so every
              recommendation is based on what suits your property — not what we have sitting in a warehouse.
            </p>
            <p className="mt-4 text-foreground/60">
              From a single doorbell camera to a fully monitored commercial site, our engineers handle the survey,
              the install and the aftercare, so you deal with one team from start to finish.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-surface-soft py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Why Choose Us" title="What makes us" accent="different" />
          <RevealGroup className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {values.map((v) => (
              <RevealItem key={v.title}>
                <div className="h-full rounded-2xl border border-line bg-surface/60 p-6 transition hover:-translate-y-1 hover:border-brand-blue/40">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-foreground/5 text-brand-blue">
                    <v.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display mt-5 text-lg font-bold text-foreground">{v.title}</h3>
                  <p className="mt-2 text-sm text-foreground/60">{v.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <BrandPartners />
      <CTABanner
        title="Ready to talk to the team?"
        description="Book a free, no-obligation site survey and get a tailored quote within 48 hours."
      />
    </>
  );
}
