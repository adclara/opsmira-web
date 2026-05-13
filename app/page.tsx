import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { ServicesSection } from "@/components/ServicesSection";
import { ROICalculator } from "@/components/ROICalculator";
import { ProcessSection } from "@/components/ProcessSection";
import { CaseStudySection } from "@/components/CaseStudySection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { PackagesSection } from "@/components/PackagesSection";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "OpsMira | AI Operational Infrastructure For SMB Businesses",
  description:
    "OpsMira helps SMB businesses reduce administrative workload, automate customer communication, improve scheduling, centralize reporting, and recover real operational ROI through managed AI infrastructure."
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <ServicesSection />
      <ROICalculator />
      <CaseStudySection />
      <ProcessSection />
      <IndustriesSection />
      <PackagesSection />
      <ContactSection />
    </>
  );
}
