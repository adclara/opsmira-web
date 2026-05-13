import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CaseStudySection() {
  return (
    <section className="section-shell section-space">
      <div className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
        <div className="luxury-panel overflow-hidden p-8 sm:p-10 lg:p-12">
          <div className="flex items-center justify-between">
            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/80">
              Business problems solved
            </span>
            <ArrowRight className="h-5 w-5 text-brand-100" />
          </div>
          <h2 className="mt-8 max-w-[13ch] font-display text-4xl leading-[0.96] tracking-[-0.035em] text-white sm:text-5xl lg:text-[4.2rem]">
            The value comes from fixing specific operational leaks.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/[0.76]">
            OpsMira case studies are structured around workflow problems,
            implementation logic, and economic outcomes so buyers can see how a
            deployment pays for itself.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ["Missed calls", "1 recovered job", "can outweigh plan cost on its own"],
              ["Scheduling drag", "10-25 hrs", "monthly coordination time often removed"],
              ["Manual reporting", "40-80%", "less reporting cleanup for owners and staff"]
            ].map(([label, value, meta]) => (
              <div
                key={label}
                className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-white/[0.55]">
                  {label}
                </p>
                <p className="mt-3 font-display text-4xl text-white">{value}</p>
                <p className="mt-2 text-sm leading-6 text-white/[0.7]">{meta}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2.25rem] border border-stone-300 bg-white/[0.88] p-8 sm:p-10">
          <span className="section-kicker">What buyers should expect</span>
          <p className="mt-4 text-lg leading-8 text-foreground">
            Every case study answers the same questions: what was slowing the
            business down, what automation layer was implemented, and how the
            savings or operational gain justified the work.
          </p>
          <div className="mt-8 space-y-4">
            {[
              "Business problem and operational bottleneck",
              "Implementation logic and workflow design",
              "What manual work was reduced or replaced",
              "How savings, speed, and visibility improved"
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-stone-300 bg-stone-100/80 px-5 py-4 text-sm leading-7 text-neutral-700"
              >
                {item}
              </div>
            ))}
          </div>
          <Link href="/case-studies" className="button-primary mt-8">
            Review Use Cases
          </Link>
        </div>
      </div>
    </section>
  );
}
