import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ROICalculator } from "@/components/ROICalculator";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "OpsMira | Delivery-First AI Operations For SMBs",
  description:
    "OpsMira implements AI agents, workflow automation, customer follow-up, scheduling coordination, reporting automation, and owner visibility dashboards for SMBs focused on cost savings.",
  openGraph: {
    title: "OpsMira | Delivery-First AI Operations For SMBs",
    description: "Cut admin cost with AI operations. Done-for-you workflow automation, follow-up, scheduling, and reporting for SMBs.",
    url: "https://opsmira.ai"
  }
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ROICalculator />
      <ServicesSection />
      <ProcessSection />
      <ContactSection />
    </>
  );
}
