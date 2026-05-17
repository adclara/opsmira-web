import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { MetricsTicker } from "@/components/MetricsTicker";
import { BentoGrid } from "@/components/BentoGrid";
import { StatsCounter } from "@/components/StatsCounter";
import { FeaturesShowcase } from "@/components/FeaturesShowcase";
import { ROICalculator } from "@/components/ROICalculator";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";

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
      <StatsCounter />
      <FeaturesShowcase />
      <ROICalculator />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
