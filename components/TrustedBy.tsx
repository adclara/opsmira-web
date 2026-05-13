import { homeExperienceCards, site } from "@/lib/data";

export function TrustedBy() {
  return (
    <section className="section-shell pb-8 pt-6 lg:pb-12">
      <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="rounded-[2.4rem] border border-stone-300 bg-white/[0.82] p-7 shadow-soft sm:p-8">
          <span className="eyebrow">Operational credibility</span>
          <h2 className="section-title text-3xl sm:text-4xl lg:text-[3.35rem]">
            Enterprise-level cost thinking, translated for SMB operators.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-600">
            OpsMira is built around the idea that most growing businesses are
            not losing money because they need more software. They are losing
            money because administrative work is fragmented, follow-up is
            inconsistent, response time is slow, and owners are carrying too
            much coordination themselves.
          </p>
          <p className="mt-6 text-sm leading-7 text-neutral-600">
            {site.founderSummary}
          </p>
          <p className="mt-6 text-xs leading-6 text-neutral-500">
            {site.experienceDisclaimer}
          </p>
        </div>

        <div className="luxury-panel p-6 sm:p-8">
          <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-white/[0.65]">
                Adrian Clara
              </p>
              <p className="mt-3 max-w-2xl text-2xl font-semibold leading-tight text-white sm:text-3xl">
                Supply chain and operations experience shaped by real process
                cost reduction, workflow diagnosis, and execution-heavy
                environments.
              </p>
            </div>
            <div className="rounded-[1.6rem] border border-white/10 bg-white/5 px-5 py-4 text-right">
              <p className="text-xs uppercase tracking-[0.24em] text-white/[0.55]">
                Savings lens
              </p>
              <p className="mt-2 font-display text-4xl text-white">$50M</p>
              <p className="text-sm text-white/[0.7]">largest improvement framing</p>
            </div>
          </div>

          <div className="mt-6 grid gap-4">
            {homeExperienceCards.map((card) => {
              const Icon = card.icon;

              return (
                <article
                  key={card.title}
                  className="rounded-[1.8rem] border border-white/10 bg-white/[0.06] p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-white/10 p-3 text-olive-100">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-white/[0.72]">
                        {card.body}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
