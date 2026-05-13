import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { CaseStudySection } from "@/components/CaseStudySection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { PackagesSection } from "@/components/PackagesSection";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "OpsMira | Supply Chain Optimization & AI Automation",
  description:
    "OpsMira helps businesses reduce waste, improve productivity, and automate workflows through supply chain consulting, AI automation, process improvement, and practical system integration."
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <ServicesSection />
      <ProcessSection />
      <CaseStudySection />
      <IndustriesSection />
      <PackagesSection />
      <ContactSection />
    </>
  );
}
