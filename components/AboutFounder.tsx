import {
  aboutStandards,
  implementationPrinciples,
  site,
  values
} from "@/lib/data";

export function AboutFounder() {
  return (
    <section className="section-shell section-space">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="eyebrow">How OpsMira operates</span>
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl">
            Practical operational systems SMB teams can actually run.
          </h2>
          <p className="section-copy mt-5">
            OpsMira helps owners replace repetitive coordination, reporting,
            and follow-up work with a controlled operational layer.
          </p>
          <div className="mt-8 grid gap-3">
            {aboutStandards.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.4rem] border border-stone-300/80 bg-white/80 px-5 py-4 text-sm leading-7 text-neutral-700 shadow-soft"
              >
                <p className="font-semibold text-foreground">{item.title}</p>
                <p className="mt-2">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          <article className="luxury-panel p-7 sm:p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-white/55">
              Service model
            </p>
            <h3 className="mt-4 text-3xl font-semibold text-white">
              Delivery-first by design
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/72">
              {site.founderSummary}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {implementationPrinciples.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-6 text-white/78"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article className="card p-7 sm:p-8">
            <p className="section-kicker">Operating values</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {values.map((value) => (
                <div
                  key={value}
                  className="rounded-2xl border border-stone-300 bg-[#f7f8fd] px-4 py-3 text-sm font-medium text-neutral-700"
                >
                  {value}
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
