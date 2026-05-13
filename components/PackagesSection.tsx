import Link from "next/link";
import { packages } from "@/lib/data";

export function PackagesSection() {
  return (
    <section className="section-shell section-space">
      <div className="overflow-hidden rounded-[2.6rem] bg-[linear-gradient(180deg,#131b34,#0f172f)] px-6 py-10 text-white shadow-[0_30px_90px_rgba(15,23,47,0.22)] sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-brand-100">
            Pricing
          </span>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl">
            Plans built around workflow scope.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/68">
            Each plan is scoped around workflow depth, coordination complexity,
            and operational impact.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {packages.map((pkg, index) => {
            const featured = index === 1;

            return (
              <article
                key={pkg.title}
                className={
                  featured
                    ? "rounded-[1.9rem] border border-brand-300 bg-[linear-gradient(180deg,#5b4cf0,#4338ca)] p-6 text-white shadow-[0_20px_60px_rgba(79,70,229,0.28)]"
                    : "rounded-[1.9rem] border border-white/10 bg-white px-6 py-6 text-foreground"
                }
              >
                <p
                  className={
                    featured
                      ? "text-xs font-semibold uppercase tracking-[0.24em] text-white/70"
                      : "text-xs font-semibold uppercase tracking-[0.24em] text-brand-600"
                  }
                >
                  {pkg.title}
                </p>
                <p
                  className={
                    featured
                      ? "mt-5 text-5xl font-semibold tracking-[-0.03em] text-white"
                      : "mt-5 text-5xl font-semibold tracking-[-0.03em] text-foreground"
                  }
                >
                  {pkg.price}
                </p>
                <p
                  className={
                    featured
                      ? "mt-2 text-sm font-medium text-white/72"
                      : "mt-2 text-sm font-medium text-neutral-500"
                  }
                >
                  {pkg.setup}
                </p>
                <p
                  className={
                    featured
                      ? "mt-5 text-sm font-semibold text-white"
                      : "mt-5 text-sm font-semibold text-foreground"
                  }
                >
                  {pkg.bestFor}
                </p>
                <p
                  className={
                    featured
                      ? "mt-3 text-sm leading-7 text-white/82"
                      : "mt-3 text-sm leading-7 text-neutral-600"
                  }
                >
                  {pkg.body}
                </p>
                <div className="mt-5 grid gap-2">
                  {pkg.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className={
                        featured
                          ? "rounded-[1rem] border border-white/12 bg-white/8 px-3 py-3 text-sm text-white/86"
                          : "rounded-[1rem] border border-stone-200 bg-[#f7f8fc] px-3 py-3 text-sm text-neutral-700"
                      }
                    >
                      {bullet}
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className={
                      featured
                        ? "inline-flex w-full items-center justify-center rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-brand-700"
                        : "inline-flex w-full items-center justify-center rounded-2xl bg-[#eef0ff] px-4 py-3 text-sm font-semibold text-brand-700"
                    }
                  >
                    Talk through this plan
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-6 text-center text-sm leading-6 text-white/50">
          Final scope depends on workflow volume, integrations, and reporting depth.
        </p>
      </div>
    </section>
  );
}
