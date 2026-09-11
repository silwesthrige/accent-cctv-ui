import type { Metadata } from "next";
import { Crosshair, CircleDot, Radar as TurretIcon, Video } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { Technologies } from "@/components/Technologies";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "CCTV Cameras | Accent CCTV Solutions",
  description: "Bullet, dome, turret and PTZ CCTV cameras for homes and businesses, supplied and installed by Accent CCTV Solutions.",
};

const cameraTypes = [
  {
    icon: Crosshair,
    title: "Bullet Cameras",
    description: "Long, visible housings that act as a strong visual deterrent for driveways and perimeters.",
  },
  {
    icon: CircleDot,
    title: "Dome Cameras",
    description: "Discreet, vandal-resistant housings ideal for indoor spaces and shopfronts.",
  },
  {
    icon: TurretIcon,
    title: "Turret Cameras",
    description: "Compact and glare-free, a popular choice for eaves and entryways.",
  },
  {
    icon: Video,
    title: "PTZ Cameras",
    description: "Pan, tilt and zoom cameras for large sites that need active, remote-controlled coverage.",
  },
];

export default function CctvCamerasPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        breadcrumb="CCTV Cameras"
        title="A camera for every property"
        description="From a single front-door camera to full-perimeter coverage, we'll help you choose the right camera for the job."
      />

      <section className="relative bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow="Camera Types" title="Built for" accent="every angle" />
          <RevealGroup className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {cameraTypes.map((cam) => (
              <RevealItem key={cam.title}>
                <div className="h-full rounded-2xl border border-line bg-surface/60 p-6 transition hover:-translate-y-1 hover:border-brand-blue/40">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-foreground/5 text-brand-blue">
                    <cam.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display mt-5 text-lg font-bold text-foreground">{cam.title}</h3>
                  <p className="mt-2 text-sm text-foreground/60">{cam.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="relative overflow-hidden bg-surface-soft py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">Home or Commercial</span>
            <h2 className="font-display mt-4 text-3xl font-bold text-foreground sm:text-4xl">
              Home CCTV and Commercial CCTV, done right
            </h2>
            <p className="mt-5 text-foreground/60">
              Monitor your family round the clock with a tailored, budget-friendly home system — or keep tabs on
              your business and protect your staff with professional-grade commercial cameras. Every install starts
              with a free site survey, so the cameras you get are the ones your property actually needs.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-line">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                alt="Commercial CCTV installation"
                className="h-[360px] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <Technologies />

      <CTABanner
        title="Ready to choose your cameras?"
        description="Book a free site survey and we'll recommend the right cameras for your property."
      />
    </>
  );
}
