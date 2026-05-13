import { services, comparisonRows } from "@/lib/data";

export function ServicesSection() {
  const [featuredService, ...supportingServices] = services;

  return (
    <section className="section-shell section-space">
      <div className="grid gap-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">What OpsMira implements</span>
          <h2 className="section-title mx-auto">
            The work that costs you the most time.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[0.9rem] leading-6 text-neutral-600">
            OpsMira focuses on operational workflows that create labor cost,
            slow customer response, and reduce visibility.
          </p>
        </div>

        <article className="luxury-panel grid gap-6 overflow-hidden p-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.1em] text-white/55">
              Core offer
            </p>
            <h3 className="mt-3 max-w-[16ch] font-display text-2xl font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-3xl">
              {featuredService.title}
            </h3>
            <p className="mt-3 max-w-xl text-[0.9rem] leading-6 text-white/72">
              {featuredService.body}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {supportingServices.map((service, index) => {
              const Icon = service.icon;
              const highlighted = index === 1;

              return (
                <article
                  key={service.title}
                  className={
                    highlighted
                      ? "rounded-xl border border-[#cad1ff] bg-white p-4 text-foreground shadow-soft"
                      : "rounded-xl border border-white/10 bg-white/[0.06] p-4"
                  }
                >
                  <div
                    className={
                      highlighted
                        ? "flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white"
                        : "flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-brand-300"
                    }
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3
                    className={
                      highlighted
                        ? "mt-3 text-base font-semibold text-foreground"
                        : "mt-3 text-base font-semibold text-white"
                    }
                  >
                    {service.title}
                  </h3>
                  <p
                    className={
                      highlighted
                        ? "mt-2 text-[0.8rem] leading-6 text-neutral-600"
                        : "mt-2 text-[0.8rem] leading-6 text-white/68"
                    }
                  >
                    {service.body}
                  </p>
                </article>
              );
            })}
          </div>
        </article>

        <div className="overflow-hidden rounded-xl border border-stone-200 bg-white shadow-soft">
          <div className="border-b border-stone-200 px-5 py-4">
            <h3 className="text-[0.9rem] font-semibold text-foreground">What it replaces</h3>
          </div>
          <div className="divide-y divide-stone-200">
            {comparisonRows.map((row) => (
              <div key={row.label} className="grid gap-1 px-5 py-3 sm:grid-cols-[0.3fr_1fr_1fr] sm:items-center sm:gap-4">
                <p className="text-[0.8rem] font-semibold text-foreground">{row.label}</p>
                <p className="text-[0.8rem] leading-5 text-neutral-500">{row.before}</p>
                <p className="text-[0.8rem] font-medium leading-5 text-brand-700">{row.after}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
