import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";
import { Check, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "CCTV Camera Kits | Accent CCTV Solutions",
  description: "Complete, plug-and-play CCTV camera kits for homes and businesses, supplied and installed by Accent CCTV Solutions.",
};

const kits = [
  {
    name: "Starter Kit",
    price: "From £599",
    period: "installed",
    description: "A budget-friendly entry point for smaller homes and flats.",
    features: ["2 x HD cameras", "1TB recorder", "30-day footage storage", "Mobile app access", "1-year warranty"],
    highlighted: false,
  },
  {
    name: "Home Kit",
    price: "From £999",
    period: "installed",
    description: "Our most popular kit — full coverage for a typical family home.",
    features: [
      "4 x colour night-vision cameras",
      "2TB recorder",
      "60-day footage storage",
      "AcuSense false-alarm filtering",
      "Mobile app access",
      "2-year warranty",
    ],
    highlighted: true,
  },
  {
    name: "Business Kit",
    price: "Custom Quote",
    period: "",
    description: "Scalable coverage for shops, offices and warehouses.",
    features: [
      "8+ cameras, sized to your site",
      "4TB+ recorder",
      "90-day footage storage",
      "ANPR & perimeter protection options",
      "Priority support",
      "3-year warranty",
    ],
    highlighted: false,
  },
];

export default function CctvCameraKitsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        breadcrumb="CCTV Camera Kits"
        title="Complete kits, ready to install"
        description="Every kit includes cameras, recorder, cabling and installation by our own engineers — no hidden extras."
      />

      <section className="relative bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeading eyebrow="Pricing" title="Choose the kit that" accent="fits your property" />

          <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-center">
            {kits.map((kit) => (
              <div
                key={kit.name}
                className={`relative rounded-3xl p-8 transition duration-300 hover:-translate-y-1 ${
                  kit.highlighted
                    ? "z-10 border-2 border-transparent bg-gradient-to-b from-brand-blue/15 to-brand-violet/10 shadow-2xl shadow-brand-blue/20 lg:scale-105"
                    : "border border-line bg-surface/50"
                }`}
                style={
                  kit.highlighted
                    ? {
                        backgroundImage:
                          "linear-gradient(var(--surface), var(--surface)), linear-gradient(135deg, #2f6ff0, #6c5ce7)",
                        backgroundOrigin: "border-box",
                        backgroundClip: "padding-box, border-box",
                      }
                    : undefined
                }
              >
                {kit.highlighted && (
                  <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet px-4 py-1.5 text-xs font-semibold text-white shadow-lg">
                    <Sparkles className="h-3.5 w-3.5" />
                    Most Popular
                  </div>
                )}

                <h3 className="font-display text-xl font-bold text-foreground">{kit.name}</h3>
                <p className="mt-2 text-sm text-foreground/50">{kit.description}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold text-foreground">{kit.price}</span>
                  {kit.period && <span className="text-sm text-foreground/50">{kit.period}</span>}
                </div>

                <a
                  href="/support"
                  className={`mt-8 flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
                    kit.highlighted
                      ? "bg-gradient-to-r from-brand-blue to-brand-violet text-white shadow-lg shadow-brand-blue/30 hover:brightness-110"
                      : "border border-foreground/15 text-foreground hover:bg-foreground/5"
                  }`}
                >
                  {kit.name === "Business Kit" ? "Request a Quote" : "Book a Site Survey"}
                </a>

                <ul className="mt-8 flex flex-col gap-3">
                  {kit.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground/70">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-foreground/40">
            Prices are a guide only and depend on property size and camera count — every quote follows a free site survey.
          </p>
        </div>
      </section>

      <CTABanner
        title="Not sure which kit is right for you?"
        description="Book a free site survey and we'll recommend the right setup for your property."
      />
    </>
  );
}
