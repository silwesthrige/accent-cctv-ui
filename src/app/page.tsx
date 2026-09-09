import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { BentoGrid } from "@/components/BentoGrid";
import { FeatureTabs } from "@/components/FeatureTabs";
import { Stats } from "@/components/Stats";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { Integrations } from "@/components/Integrations";
import { Pricing } from "@/components/Pricing";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <BentoGrid />
        <FeatureTabs />
        <Stats />
        <HowItWorks />
        <Testimonials />
        <Integrations />
        <Pricing />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
