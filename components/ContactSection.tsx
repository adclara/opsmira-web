import Link from "next/link";
import { site } from "@/lib/data";

export function ContactSection() {
  return (
    <section className="section-shell section-space pt-10">
      <div className="overflow-hidden rounded-[2.8rem] border border-stone-300 bg-[linear-gradient(135deg,#f8f8f5_0%,#edf3de_52%,#dfe8ca_100%)] p-8 shadow-soft sm:p-10 lg:p-12">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <span className="eyebrow">Next step</span>
            <h2 className="section-title text-3xl sm:text-4xl lg:text-[3.8rem]">
              Let&apos;s find where your business is losing time, follow-up, and money.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-600">
              Bring the messy workflow, delayed response problem, admin
              overload, disconnected reporting, or scheduling chaos. OpsMira is
              built to turn those friction points into a cleaner operational
              system with measurable ROI.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="button-primary">
                Schedule a Free Consultation
              </Link>
              <Link href="/services" className="button-secondary">
                Review Platform Services
              </Link>
            </div>
          </div>

          <div className="luxury-panel p-7 sm:p-8">
            <p className="text-xs uppercase tracking-[0.26em] text-white/[0.65]">
              Common outcomes
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "20-60 admin hours saved monthly",
                "30-70% less repetitive communication",
                "50-90% faster customer response",
                "40-80% less manual reporting work",
                "Cleaner scheduling coordination",
                "Better owner visibility and less stress"
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.4rem] border border-white/[0.12] bg-white/[0.06] px-4 py-4 text-sm text-white/[0.85]"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-[1.5rem] border border-white/[0.12] bg-white/[0.08] p-5 text-sm leading-7 text-white/[0.82]">
              {site.location}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
