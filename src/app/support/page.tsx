import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { SupportContent } from "@/components/SupportContent";

export const metadata: Metadata = {
  title: "Customer Support | Accent CCTV Solutions",
  description: "Get in touch with Accent CCTV Solutions for a free site survey, existing customer support or general enquiries.",
};

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Customer Support"
        breadcrumb="Customer Support"
        title="We're here to help"
        description="Whether you need a free quote or support with an existing system, get in touch and our team will get back to you."
      />
      <SupportContent />
    </>
  );
}
