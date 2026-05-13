import Link from "next/link";
import { site } from "@/lib/data";

export function ContactSection() {
  return (
    <section className="section-shell section-space">
      <div className="card overflow-hidden p-8 sm:p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.94fr_1.06fr]">
          <div>
            <span className="eyebrow">Final CTA</span>
            <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl">
              Ready to See Where Your Operation Is Losing Time?
            </h2>
            <p className="section-copy mt-5">
              Tell us what is slowing your business down. OpsMira can help
              assess the process, identify improvement opportunities, and design
              a practical system for better execution.
            </p>
            <Link href="/contact" className="button-primary mt-8">
              Schedule a Free Consultation
            </Link>
          </div>

          <div className="rounded-[2rem] border border-stone-300 bg-[linear-gradient(140deg,#405c0b_0%,#62802b_55%,#95a17b_100%)] p-7 text-white">
            <p className="text-xs uppercase tracking-[0.22em] text-white/80">
              Advisory Focus
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "Supply chain consulting",
                "AI automation for businesses",
                "Workflow automation",
                "Warehouse process improvement",
                "Inventory optimization",
                "Operational efficiency"
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.4rem] border border-white/15 bg-white/10 px-4 py-4 text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-[1.4rem] border border-white/15 bg-white/10 p-4 text-sm leading-7 text-white/85">
              {site.location}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
