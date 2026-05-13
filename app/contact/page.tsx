import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact | OpsMira",
  description:
    "Contact OpsMira to request a process assessment, AI automation consultation, or operations improvement discussion."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start Improving Your Operation"
        description="Tell us what is slowing your business down. Whether your challenge is manual work, poor communication, project tracking, inventory issues, training gaps, or disconnected systems, OpsMira can help assess the process and design a practical improvement plan."
      />

      <section className="section-shell pb-20 lg:pb-28">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <ContactForm />

          <aside className="space-y-6">
            <div className="card p-7">
              <h2 className="font-display text-4xl text-foreground">
                Contact Details
              </h2>
              <div className="mt-5 space-y-3 text-sm leading-7 text-neutral-600">
                <p>
                  Email:{" "}
                  <a href={`mailto:${site.email}`} className="hover:text-foreground">
                    {site.email}
                  </a>
                </p>
                <p>
                  LinkedIn:{" "}
                  <a
                    href={site.linkedIn}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-foreground"
                  >
                    www.linkedin.com/in/adrian-clara-9721a9122
                  </a>
                </p>
                <p>{site.location}</p>
              </div>
            </div>

            <div className="card p-7">
              <p className="text-xs uppercase tracking-[0.22em] text-olive-700">
                Common Needs
              </p>
              <div className="mt-5 grid gap-3">
                {[
                  "Operations consulting",
                  "Process improvement consulting",
                  "AI agents for small businesses",
                  "Construction business automation",
                  "Contractor workflow automation",
                  "Inventory optimization"
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.4rem] border border-stone-300 bg-stone-100/80 px-4 py-4 text-sm font-medium text-neutral-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <Link href="/services" className="button-secondary mt-6">
                Explore Services
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
