type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  stats?: Array<{ label: string; value: string }>;
  highlights?: string[];
  centered?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  stats = [],
  highlights = [],
  centered = false
}: PageHeroProps) {
  const snapshot =
    stats.length > 0
      ? stats
      : [
          { label: "Focus", value: "Operational clarity" },
          { label: "Approach", value: "AI with oversight" },
          { label: "Outcome", value: "Faster execution" }
        ];

  return (
    <section className="section-shell pb-8 pt-6 lg:pb-10 lg:pt-8">
      <div className="overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#121b36,#161f3f)] px-6 py-8 text-white shadow-[0_20px_60px_rgba(15,23,47,0.2)] sm:px-8 lg:px-10 lg:py-10">
        <div className="relative">
          <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-brand-500/18 blur-3xl" />
          <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className={`relative ${centered ? "mx-auto flex max-w-4xl flex-col items-center text-center" : "grid gap-8 xl:grid-cols-[0.9fr_1.1fr] xl:items-center"}`}>
            <div className={centered ? "flex flex-col items-center" : "max-w-[42rem]"}>
              {eyebrow ? (
                <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.1em] text-brand-100">
                  {eyebrow}
                </span>
              ) : null}
              <h1 className={`mt-5 font-display text-3xl font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-4xl lg:text-[2.8rem] ${centered ? "max-w-[16ch]" : "max-w-[14ch]"}`}>
                {title}
              </h1>
              <p className={`mt-4 text-[0.9rem] leading-6 text-white/72 ${centered ? "max-w-3xl" : "max-w-2xl"}`}>
                {description}
              </p>

              {highlights.length ? (
                <div className={`mt-6 grid gap-2 sm:grid-cols-2 ${centered ? "w-full max-w-3xl text-left" : ""}`}>
                  {highlights.map((item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-white/10 bg-white/[0.06] px-3.5 py-2.5 text-[0.8rem] text-white/82"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            {!centered && (
              <div className="rounded-xl border border-white/10 bg-white/[0.06] p-3 backdrop-blur-xl">
                <div className="rounded-xl bg-white p-4 text-foreground shadow-[0_16px_40px_rgba(15,23,47,0.14)] sm:p-5">
                  <p className="text-[0.65rem] uppercase tracking-[0.1em] text-neutral-500">
                    Operational snapshot
                  </p>
                  <p className="mt-2 text-lg font-semibold tracking-[-0.02em] text-foreground">
                    What this page helps a buyer evaluate.
                  </p>
                  <div className="mt-4 grid gap-2">
                    {snapshot.map((stat) => (
                      <div
                        key={stat.label}
                        className="flex items-center justify-between rounded-lg border border-stone-200 bg-[#f8faff] px-3.5 py-2.5"
                      >
                        <span className="text-[0.8rem] font-medium text-neutral-600">
                          {stat.label}
                        </span>
                        <span className="text-[0.8rem] font-semibold text-brand-700">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
