import { homeExperienceCards, site } from "@/lib/data";

export function TrustedBy() {
  return (
    <section className="section-shell section-space pt-8">
      <span className="eyebrow">Trusted Experience</span>
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl">
            Built From Real-World High-Volume Operations
          </h2>
          <p className="section-copy mt-5">
            OpsMira is built on hands-on experience in supply chain, warehouse
            operations, quality assurance, inbound and outbound execution,
            inventory flow, training, and process improvement across high-volume
            business environments.
          </p>
          <p className="mt-5 max-w-2xl text-xs leading-6 text-neutral-500">
            {site.experienceDisclaimer}
          </p>
        </div>

        <div className="grid gap-4">
          {homeExperienceCards.map((card) => {
            const Icon = card.icon;

            return (
              <article key={card.title} className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-olive-50 p-3 text-olive-800">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-neutral-600">
                      {card.body}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
