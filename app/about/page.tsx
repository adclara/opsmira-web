import type { Metadata } from "next";
import { AboutFounder } from "@/components/AboutFounder";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "About | OpsMira",
  description:
    "Learn about OpsMira, a process intelligence and AI automation brand owned by TEIMECA LAND LLC and founded by Adrian Clara."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About OpsMira"
        title="Operations First. Technology Second. Results Through Better Flow."
        description="OpsMira combines supply chain management, process improvement, training, analytics, and AI automation to help businesses reduce manual work and improve execution."
      />
      <AboutFounder />
      <section className="section-shell pb-20 lg:pb-28">
        <div className="card p-8 text-sm leading-7 text-neutral-600 sm:p-10">
          <p>{site.legalDisclaimer}</p>
          <p className="mt-3">{site.experienceDisclaimer}</p>
        </div>
      </section>
    </>
  );
}
