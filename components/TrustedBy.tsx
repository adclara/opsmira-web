import { homeExperienceCards, site } from "@/lib/data";

export function TrustedBy() {
  return (
    <section className="section-shell pb-8 pt-2 lg:pb-12">
      <div className="rounded-[2.4rem] border border-stone-200 bg-white/95 p-7 shadow-soft sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <span className="eyebrow">How customers receive the work</span>
            <h2 className="section-title text-3xl sm:text-4xl lg:text-[3.2rem]">
              You are buying a working operations system, not vague automation advice.
            </h2>
            <p className="mt-5 text-base leading-8 text-neutral-600">
              OpsMira is structured as a productized implementation service for
              SMBs. We identify the highest-cost workflow problem, configure the
              automation layer around it, support launch, and keep refining the
              result after deployment.
            </p>
            <div className="mt-6 grid gap-3">
              {[
                "Workflow mapping before build work starts",
                "System configuration and launch support included",
                "ROI framed around labor saved, owner time recovered, and missed opportunities captured"
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.3rem] border border-stone-200 bg-[#f8faff] px-4 py-4 text-sm leading-7 text-neutral-700"
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-6 text-neutral-500">
              {site.experienceDisclaimer}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {homeExperienceCards.map((card, index) => {
              const Icon = card.icon;
              const emphasized = index === 1;

              return (
                <article
                  key={card.title}
                  className={
                    emphasized
                      ? "rounded-[1.8rem] border border-[#cad1ff] bg-[linear-gradient(180deg,#eef0ff,#ffffff)] p-5 shadow-soft"
                      : "rounded-[1.8rem] border border-stone-200 bg-[#fbfbfe] p-5"
                  }
                >
                  <div
                    className={
                      emphasized
                        ? "flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-white"
                        : "flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef0ff] text-brand-700"
                    }
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">
                    {card.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
