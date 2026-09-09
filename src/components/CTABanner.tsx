import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function CTABanner() {
  return (
    <section id="demo" className="relative overflow-hidden bg-background px-6 py-24 lg:px-8">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-brand-blue to-brand-violet px-8 py-16 text-center sm:px-16">
        <div className="absolute inset-0 bg-dot-grid opacity-10" />
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <Reveal className="relative">
          <h2 className="font-display mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Ready to see every site clearly?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Talk to our team and get a tailored rollout plan within 48 hours.
          </p>
          <a
            href="#"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-ink shadow-2xl transition hover:scale-[1.03]"
          >
            Get a Demo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
