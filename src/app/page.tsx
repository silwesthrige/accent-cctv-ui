import { Hero } from "@/components/Hero";
import { PromoSlider } from "@/components/PromoSlider";
import { HomeCommercialSplit } from "@/components/HomeCommercialSplit";
import { Stats } from "@/components/Stats";
import { TrustBar } from "@/components/TrustBar";
import { BentoGrid } from "@/components/BentoGrid";
import { Technologies } from "@/components/Technologies";
import { FeatureTabs } from "@/components/FeatureTabs";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { BrandPartners } from "@/components/BrandPartners";
import { CTABanner } from "@/components/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <PromoSlider />
      <HomeCommercialSplit />
      <Stats />
      <TrustBar />
      <BentoGrid />
      <Technologies />
      <FeatureTabs />
      <HowItWorks />
      <Testimonials />
      <BrandPartners />
      <CTABanner />
    </>
  );
}
