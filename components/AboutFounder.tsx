import {
  aboutStandards,
  engagementPoints,
  implementationPrinciples,
  rolloutTimeline,
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
            Built to deliver practical operational systems SMB teams can actually run.
          </h2>
          <p className="section-copy mt-5">
            OpsMira exists to help owners replace repetitive coordination,
            reporting, and follow-up work with a more controlled operational
            layer. The service is designed around implementation quality, not
            founder storytelling.
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
          <div className="mt-8 rounded-[1.8rem] border border-stone-300 bg-[#f8faff] p-5">
            <p className="section-kicker">Typical rollout</p>
            <div className="mt-4 grid gap-3">
              {rolloutTimeline.map((item) => (
                <div
                  key={item.phase}
                  className="rounded-[1.3rem] border border-stone-300 bg-white px-4 py-4"
                >
                  <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                    {item.phase}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-foreground">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-neutral-600">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
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
              OpsMira translates enterprise-style operations thinking into SMB
              implementation work focused on cost savings, response speed, and
              operational control. Founder background supports the work, but the
              offer itself is the system that gets delivered.
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
            <div className="mt-6 rounded-[1.4rem] border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-white/55">
                Engagement rules
              </p>
              <div className="mt-4 grid gap-3">
                {engagementPoints.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1rem] border border-white/10 bg-white/[0.06] px-4 py-3 text-sm leading-7 text-white/78"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className="card p-7 sm:p-8">
            <p className="section-kicker">Operating standards</p>
            <h3 className="mt-4 text-2xl font-semibold text-foreground">
              What shapes the implementation work
            </h3>
            <p className="mt-4 text-sm leading-7 text-neutral-600">
              {site.founderSummary}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
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
