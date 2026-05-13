import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { ServicesSection } from "@/components/ServicesSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { EngagementSection } from "@/components/EngagementSection";
import { ROICalculator } from "@/components/ROICalculator";
import { ProcessSection } from "@/components/ProcessSection";
import { CaseStudySection } from "@/components/CaseStudySection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { PackagesSection } from "@/components/PackagesSection";
import { FitSection } from "@/components/FitSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "OpsMira | Delivery-First AI Operations For SMBs",
  description:
    "OpsMira implements AI agents, workflow automation, customer follow-up systems, scheduling coordination, reporting automation, and owner visibility dashboards for SMBs focused on cost savings."
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <ROICalculator />
      <ServicesSection />
      <ComparisonSection />
      <EngagementSection />
      <CaseStudySection />
      <ProcessSection />
      <IndustriesSection />
      <PackagesSection />
      <FitSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
