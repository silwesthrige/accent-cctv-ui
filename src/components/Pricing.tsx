"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const tiers = [
  {
    name: "Starter",
    price: "$49",
    period: "/camera/mo",
    description: "For single sites getting started with cloud video.",
    features: ["Up to 25 cameras", "30-day cloud storage", "Mobile app access", "Email support", "Basic motion alerts"],
    highlighted: false,
  },
  {
    name: "Business",
    price: "$79",
    period: "/camera/mo",
    description: "For growing multi-site security operations.",
    features: [
      "Unlimited cameras",
      "90-day cloud storage",
      "AI threat detection",
      "Access control included",
      "Priority support",
      "Custom alert rules",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with complex, global footprints.",
    features: [
      "Unlimited everything",
      "Unlimited retention",
      "Dedicated account manager",
      "SSO & advanced compliance",
      "Custom integrations",
      "99.99% SLA",
    ],
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative bg-background py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing,"
          accent="enterprise depth"
          description="Every plan includes core AI analytics and unlimited users. Scale up whenever you're ready."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-center">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 transition duration-300 hover:-translate-y-1 ${
                tier.highlighted
                  ? "z-10 border-2 border-transparent bg-gradient-to-b from-brand-blue/15 to-brand-violet/10 shadow-2xl shadow-brand-blue/20 lg:scale-105"
                  : "border border-line bg-surface/50"
              }`}
              style={
                tier.highlighted
                  ? {
                      backgroundImage:
                        "linear-gradient(var(--surface), var(--surface)), linear-gradient(135deg, #2f6ff0, #6c5ce7)",
                      backgroundOrigin: "border-box",
                      backgroundClip: "padding-box, border-box",
                    }
                  : undefined
              }
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet px-4 py-1.5 text-xs font-semibold text-white shadow-lg">
                  <Sparkles className="h-3.5 w-3.5" />
                  Most Popular
                </div>
              )}

              <h3 className="font-display text-xl font-bold text-foreground">{tier.name}</h3>
              <p className="mt-2 text-sm text-foreground/50">{tier.description}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold text-foreground">{tier.price}</span>
                <span className="text-sm text-foreground/50">{tier.period}</span>
              </div>

              <a
                href="#demo"
                className={`mt-8 flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
                  tier.highlighted
                    ? "bg-gradient-to-r from-brand-blue to-brand-violet text-white shadow-lg shadow-brand-blue/30 hover:brightness-110"
                    : "border border-foreground/15 text-foreground hover:bg-foreground/5"
                }`}
              >
                {tier.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
              </a>

              <ul className="mt-8 flex flex-col gap-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground/70">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
