import { packages } from "@/lib/data";

export function PackagesSection() {
  return (
    <section className="section-shell section-space">
      <span className="eyebrow">Packages</span>
      <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl">
        Flexible Support Based on Your Operation
      </h2>

      <div className="mt-12 grid gap-5 xl:grid-cols-4 md:grid-cols-2">
        {packages.map((pkg, index) => (
          <article
            key={pkg.title}
            className={`card p-6 ${index === 1 ? "bg-olive-700 text-white" : ""}`}
          >
            <div className="flex h-full flex-col">
              <h3 className="text-xl font-semibold">{pkg.title}</h3>
              <p
                className={`mt-4 font-display text-4xl ${
                  index === 1 ? "text-white" : "text-foreground"
                }`}
              >
                {pkg.price}
              </p>
              <p
                className={`mt-4 text-sm leading-7 ${
                  index === 1 ? "text-white/80" : "text-neutral-600"
                }`}
              >
                {pkg.body}
              </p>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-6 text-sm leading-6 text-neutral-500">
        Pricing varies by project size, system complexity, integrations,
        business needs, and implementation scope.
      </p>
    </section>
  );
}
