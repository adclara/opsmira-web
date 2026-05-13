import { services } from "@/lib/data";

export function ServicesSection() {
  const [featuredService, ...supportingServices] = services;

  return (
    <section className="section-shell section-space">
      <div className="grid gap-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">What OpsMira implements</span>
          <h2 className="section-title mx-auto text-3xl sm:text-4xl lg:text-[3.4rem]">
            Built around the work that owners and office teams lose the most time to.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-neutral-600">
            OpsMira focuses on operational workflows that create labor cost,
            slow customer response, and make visibility harder than it should
            be. The goal is not more software. The goal is cleaner execution.
          </p>
        </div>

        <article className="luxury-panel grid gap-8 overflow-hidden p-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/55">
              Core offer
            </p>
            <h3 className="mt-4 max-w-[12ch] font-display text-4xl font-semibold leading-[1] tracking-[-0.04em] text-white sm:text-5xl">
              {featuredService.title}
            </h3>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/72">
              {featuredService.body}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Customer follow-up systems",
                "Scheduling coordination",
                "Reporting automation",
                "Owner dashboards"
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1rem] border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/82"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {supportingServices.map((service, index) => {
              const Icon = service.icon;
              const highlighted = index === 1;

              return (
                <article
                  key={service.title}
                  className={
                    highlighted
                      ? "rounded-[1.8rem] border border-[#cad1ff] bg-white p-5 text-foreground shadow-soft"
                      : "rounded-[1.8rem] border border-white/10 bg-white/[0.06] p-5"
                  }
                >
                  <div
                    className={
                      highlighted
                        ? "flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-white"
                        : "flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-brand-300"
                    }
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3
                    className={
                      highlighted
                        ? "mt-5 text-xl font-semibold text-foreground"
                        : "mt-5 text-xl font-semibold text-white"
                    }
                  >
                    {service.title}
                  </h3>
                  <p
                    className={
                      highlighted
                        ? "mt-3 text-sm leading-7 text-neutral-600"
                        : "mt-3 text-sm leading-7 text-white/68"
                    }
                  >
                    {service.body}
                  </p>
                </article>
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
}
