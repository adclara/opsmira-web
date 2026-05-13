import { packages } from "@/lib/data";

export function PackagesSection() {
  return (
    <section className="section-shell section-space">
      <div className="grid gap-6 xl:grid-cols-[0.76fr_1.24fr]">
        <div className="luxury-panel p-8 sm:p-10">
          <span className="text-xs uppercase tracking-[0.28em] text-white/[0.65]">
            Engagements
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[0.96] tracking-[-0.03em] text-white sm:text-5xl">
            Flexible support shaped around the operation, not a rigid package menu.
          </h2>
          <p className="mt-5 text-base leading-8 text-white/[0.74]">
            Some teams need a fast diagnostic. Others need implementation,
            automation, training, and ongoing refinement. We scope around the
            real complexity of the business.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {packages.map((pkg, index) => {
            const featured = index === 1;

            return (
              <article
                key={pkg.title}
                className={
                  featured
                    ? "rounded-[2rem] border border-olive-300 bg-[linear-gradient(180deg,#405c0b,#587327)] p-6 text-white shadow-[0_22px_70px_rgba(64,92,11,0.24)]"
                    : "card p-6"
                }
              >
                <div className="flex h-full flex-col">
                  <p
                    className={
                      featured
                        ? "text-xs uppercase tracking-[0.22em] text-white/[0.7]"
                        : "text-xs uppercase tracking-[0.22em] text-neutral-500"
                    }
                  >
                    {featured ? "Recommended for system buildout" : "Engagement option"}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold">{pkg.title}</h3>
                  <p
                    className={
                      featured
                        ? "mt-4 font-display text-4xl text-white"
                        : "mt-4 font-display text-4xl text-foreground"
                    }
                  >
                    {pkg.price}
                  </p>
                  <p
                    className={
                      featured
                        ? "mt-4 text-sm leading-7 text-white/[0.82]"
                        : "mt-4 text-sm leading-7 text-neutral-600"
                    }
                  >
                    {pkg.body}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <p className="mt-6 text-sm leading-6 text-neutral-500">
        Pricing varies by project size, system complexity, integrations,
        business needs, and implementation scope.
      </p>
    </section>
  );
}
