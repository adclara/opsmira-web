import Link from "next/link";
import { packages } from "@/lib/data";

export function PackagesSection() {
  return (
    <section className="section-shell section-space">
      <div className="overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#131b34,#0f172f)] px-6 py-8 text-white shadow-[0_20px_60px_rgba(15,23,47,0.18)] sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.1em] text-brand-100">
            Pricing
          </span>
          <h2 className="mt-4 font-display text-2xl font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-3xl">
            Plans built around operational impact.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[0.9rem] leading-6 text-white/68">
            Each plan is scoped around AI agent complexity, number of workflows
            automated, and measurable cost reduction.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {packages.map((pkg, index) => {
            const featured = index === 1;

            return (
              <article
                key={pkg.title}
                className={
                  featured
                    ? "rounded-xl border border-brand-300 bg-[linear-gradient(180deg,#5b4cf0,#4338ca)] p-5 text-white shadow-[0_14px_40px_rgba(79,70,229,0.24)]"
                    : "rounded-xl border border-white/10 bg-white px-5 py-5 text-foreground"
                }
              >
                <div className="flex items-center justify-between">
                  <p
                    className={
                      featured
                        ? "text-[0.65rem] font-medium uppercase tracking-[0.1em] text-white/70"
                        : "text-[0.65rem] font-medium uppercase tracking-[0.1em] text-brand-600"
                    }
                  >
                    {pkg.title}
                  </p>
                  {pkg.originalPrice && (
                    <span
                      className={
                        featured
                          ? "rounded-full bg-white/20 px-2.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-white"
                          : "rounded-full bg-green-100 px-2.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-green-700"
                      }
                    >
                      30% off
                    </span>
                  )}
                </div>
                <div className="mt-3 flex items-baseline gap-2.5">
                  <p
                    className={
                      featured
                        ? "text-3xl font-semibold tracking-[-0.02em] text-white"
                        : "text-3xl font-semibold tracking-[-0.02em] text-foreground"
                    }
                  >
                    {pkg.price}
                  </p>
                  {pkg.originalPrice && (
                    <span
                      className={
                        featured
                          ? "text-base font-medium text-white/40 line-through"
                          : "text-base font-medium text-neutral-400 line-through"
                      }
                    >
                      {pkg.originalPrice}
                    </span>
                  )}
                </div>
                <p
                  className={
                    featured
                      ? "mt-1.5 text-[0.8rem] font-medium text-white/72"
                      : "mt-1.5 text-[0.8rem] font-medium text-neutral-500"
                  }
                >
                  {pkg.setup}
                </p>
                <p
                  className={
                    featured
                      ? "mt-4 text-[0.8rem] font-semibold text-white"
                      : "mt-4 text-[0.8rem] font-semibold text-foreground"
                  }
                >
                  {pkg.bestFor}
                </p>
                <p
                  className={
                    featured
                      ? "mt-2 text-[0.8rem] leading-6 text-white/82"
                      : "mt-2 text-[0.8rem] leading-6 text-neutral-600"
                  }
                >
                  {pkg.body}
                </p>
                <div className="mt-4 grid gap-1.5">
                  {pkg.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className={
                        featured
                          ? "rounded-lg border border-white/12 bg-white/8 px-3 py-2.5 text-[0.8rem] text-white/86"
                          : "rounded-lg border border-stone-200 bg-[#f7f8fc] px-3 py-2.5 text-[0.8rem] text-neutral-700"
                      }
                    >
                      {bullet}
                    </div>
                  ))}
                </div>
                <div className="mt-5">
                  <Link
                    href="/contact"
                    className={
                      featured
                        ? "inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-2.5 text-[0.8rem] font-medium text-brand-700"
                        : "inline-flex w-full items-center justify-center rounded-xl bg-[#eef0ff] px-4 py-2.5 text-[0.8rem] font-medium text-brand-700"
                    }
                  >
                    Talk through this plan
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-5 text-center text-[0.8rem] leading-5 text-white/50">
          Final scope depends on operational complexity, integrations, and number of AI agents deployed.
        </p>
      </div>
    </section>
  );
}
