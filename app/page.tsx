import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { MetricsTicker } from "@/components/MetricsTicker";
import { BentoGrid } from "@/components/BentoGrid";
import { ROICalculator } from "@/components/ROICalculator";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "OpsMira | Inteligencia Artificial para tu Cadena de Suministro",
  description:
    "OpsMira optimiza tu cadena de suministro con IA. Automatización de permisos, optimización logística y visibilidad operativa en una sola plataforma.",
  openGraph: {
    title: "OpsMira | Inteligencia Artificial para tu Cadena de Suministro",
    description:
      "Automatización de permisos estructurales y optimización logística con IA.",
    url: "https://opsmira.ai",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MetricsTicker />
      <BentoGrid />
      <ROICalculator />
      <ServicesSection />
      <ProcessSection />
      <ContactSection />
    </>
  );
}
