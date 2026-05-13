type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  stats?: Array<{ label: string; value: string }>;
  highlights?: string[];
};

export function PageHero({
  eyebrow,
  title,
  description,
  stats = [],
  highlights = []
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
    <section className="section-shell pb-10 pt-6 lg:pb-12 lg:pt-8">
      <div className="overflow-hidden rounded-[2.8rem] bg-[linear-gradient(180deg,#121b36,#161f3f)] px-6 py-8 text-white shadow-[0_30px_90px_rgba(15,23,47,0.24)] sm:px-8 lg:px-10 lg:py-10">
        <div className="relative">
          <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-brand-500/18 blur-3xl" />
          <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative grid gap-10 xl:grid-cols-[0.9fr_1.1fr] xl:items-end">
            <div className="max-w-[42rem]">
              {eyebrow ? (
                <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-brand-100">
                  {eyebrow}
                </span>
              ) : null}
              <h1 className="mt-6 max-w-[12ch] font-display text-5xl font-semibold leading-[0.94] tracking-[-0.055em] text-white sm:text-6xl lg:text-[5rem]">
                {title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                {description}
              </p>

              {highlights.length ? (
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {highlights.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1rem] border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white/82"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl">
              <div className="rounded-[1.7rem] bg-white p-5 text-foreground shadow-[0_24px_60px_rgba(15,23,47,0.18)] sm:p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">
                  Operational snapshot
                </p>
                <p className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-foreground">
                  What this page helps a buyer evaluate.
                </p>
                <div className="mt-6 grid gap-3">
                  {snapshot.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-center justify-between rounded-[1.1rem] border border-stone-200 bg-[#f8faff] px-4 py-3"
                    >
                      <span className="text-sm font-medium text-neutral-600">
                        {stat.label}
                      </span>
                      <span className="text-sm font-semibold text-brand-700">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
