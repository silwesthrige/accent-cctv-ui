"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ClipboardList, LifeBuoy, MessageCircleQuestion, Wrench, ChevronDown, Send } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { RevealGroup, RevealItem } from "./Reveal";

const categories = [
  { icon: ClipboardList, title: "Book a Site Survey", description: "Get a free, no-obligation quote for a new install." },
  { icon: LifeBuoy, title: "Existing Customer Support", description: "Need help, maintenance or a repair on your current system?" },
  { icon: Wrench, title: "Technical Support", description: "Troubleshooting for your app, recorder or cameras." },
  { icon: MessageCircleQuestion, title: "General Enquiries", description: "Anything else — we're happy to help." },
];

const faqs = [
  {
    q: "Do you offer a free site survey?",
    a: "Yes — every quote starts with a free, no-obligation visit so we can design a system around your property and budget.",
  },
  {
    q: "Do you subcontract your installations?",
    a: "No. Every installation is carried out by our own in-house, certified engineers — never a third party.",
  },
  {
    q: "Which brands do you work with?",
    a: "We install Hikvision, Dahua, Ezviz, Hanwha Vision and other manufacturer-approved equipment, chosen for your specific site.",
  },
  {
    q: "Can I get support on a system I didn't buy from you?",
    a: "In many cases, yes — get in touch with details of your existing system and we'll confirm whether we can help.",
  },
];

function Accordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq, i) => (
        <div key={faq.q} className="overflow-hidden rounded-2xl border border-line bg-surface/60">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
          >
            <span className="font-display font-semibold text-foreground">{faq.q}</span>
            <ChevronDown className={`h-4 w-4 shrink-0 text-foreground/50 transition-transform ${open === i ? "rotate-180" : ""}`} />
          </button>
          <motion.div
            initial={false}
            animate={{ height: open === i ? "auto" : 0 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-sm text-foreground/60">{faq.a}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export function SupportContent() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="relative bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {categories.map((c) => (
              <RevealItem key={c.title}>
                <div className="h-full rounded-2xl border border-line bg-surface/60 p-6 transition hover:-translate-y-1 hover:border-brand-blue/40">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-foreground/5 text-brand-blue">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display mt-5 text-lg font-bold text-foreground">{c.title}</h3>
                  <p className="mt-2 text-sm text-foreground/60">{c.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="relative bg-surface-soft py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading eyebrow="Get in Touch" title="Send us a" accent="message" align="left" />
            <div className="glass mt-8 rounded-2xl p-8">
              {submitted ? (
                <div className="py-10 text-center">
                  <p className="font-display text-lg font-bold text-foreground">Thanks — message received.</p>
                  <p className="mt-2 text-sm text-foreground/60">Our team will get back to you shortly.</p>
                </div>
              ) : (
                <form
                  className="flex flex-col gap-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <input
                      required
                      placeholder="Full name"
                      className="rounded-xl border border-line bg-foreground/5 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 outline-none focus:border-brand-blue/50"
                    />
                    <input
                      required
                      type="email"
                      placeholder="Email address"
                      className="rounded-xl border border-line bg-foreground/5 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 outline-none focus:border-brand-blue/50"
                    />
                  </div>
                  <select
                    defaultValue=""
                    required
                    className="rounded-xl border border-line bg-foreground/5 px-4 py-3 text-sm text-foreground outline-none focus:border-brand-blue/50"
                  >
                    <option value="" disabled>
                      What can we help with?
                    </option>
                    {categories.map((c) => (
                      <option key={c.title} value={c.title}>
                        {c.title}
                      </option>
                    ))}
                  </select>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us a bit about your property and what you need"
                    className="rounded-xl border border-line bg-foreground/5 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 outline-none focus:border-brand-blue/50"
                  />
                  <button
                    type="submit"
                    className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 transition hover:brightness-110"
                  >
                    Send Message
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="FAQs" title="Common" accent="questions" align="left" />
            <div className="mt-8">
              <Accordion />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
