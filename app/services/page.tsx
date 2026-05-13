import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { detailedServices } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services | OpsMira",
  description:
    "Explore OpsMira services including supply chain optimization, AI agents, workflow automation, warehouse operations consulting, SOP development, and business reporting systems."
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Supply Chain, AI Automation, and Process Improvement Built for Real Business Operations."
        description="OpsMira helps companies improve daily execution by combining operational experience, process analysis, AI-supported workflows, and practical systems."
      />

      <section className="section-shell pb-20 lg:pb-28">
        <div className="grid gap-5">
          {detailedServices.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="card grid gap-8 p-7 lg:grid-cols-[0.9fr_1.1fr]"
              >
                <div>
                  <div className="w-fit rounded-2xl bg-olive-50 p-3 text-olive-800">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 text-3xl font-semibold text-foreground">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-neutral-600">
                    {service.description}
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {service.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="rounded-[1.4rem] border border-stone-300 bg-stone-100/80 px-4 py-4 text-sm font-medium text-neutral-700"
                    >
                      {bullet}
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="card mt-10 flex flex-col gap-6 p-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="font-display text-4xl text-foreground">
              Looking for a custom workflow?
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-600">
              OpsMira can tailor supply chain consulting, business process
              automation, and workflow automation around the systems you already
              use.
            </p>
          </div>
          <Link href="/contact" className="button-primary">
            Request Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
