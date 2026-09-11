import type { Metadata } from "next";
import { Link2 } from "lucide-react";
import { ShieldAlert, Radio, Smartphone, PawPrint } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Alarm Systems | Accent CCTV Solutions",
  description: "Monitored intruder alarm systems with smart sensors, supplied and installed by Accent CCTV Solutions.",
};

const features = [
  {
    icon: ShieldAlert,
    title: "24/7 Monitoring",
    description: "Optional monitored alarms alert a response team any time, day or night.",
  },
  {
    icon: Radio,
    title: "Smart Sensors",
    description: "Door, window and motion sensors that report status instantly to the control panel.",
  },
  {
    icon: Smartphone,
    title: "Mobile Control",
    description: "Arm, disarm and check status from anywhere using the mobile app.",
  },
  {
    icon: PawPrint,
    title: "Pet-Friendly Detection",
    description: "Sensors tuned to ignore household pets, so you're not woken by false alarms.",
  },
];

export default function AlarmSystemsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        breadcrumb="Alarm Systems"
        title="Intruder alarms that work as hard as your CCTV"
        description="Monitored alarm systems with smart sensors, fitted by the same engineers who install your cameras."
      />

      <section className="relative bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Features" title="Built to be" accent="reliable, not noisy" />
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
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-foreground/5 text-brand-blue">
              <Link2 className="h-5 w-5" />
            </span>
            <h2 className="font-display mt-5 text-3xl font-bold text-foreground sm:text-4xl">
              Works alongside your CCTV
            </h2>
            <p className="mt-5 text-foreground/60">
              Every alarm we fit can be linked to your CCTV system, so an alarm trigger pulls up the matching
              camera feed automatically — one system, one app, one point of contact.
            </p>
            <a
              href="/cctv-cameras"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:underline"
            >
              Explore our CCTV cameras
            </a>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-line">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
                alt="Alarm system control panel"
                className="h-[360px] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner
        title="Ready to secure your property?"
        description="Book a free site survey and get a tailored alarm quote within 48 hours."
      />
    </>
  );
}
