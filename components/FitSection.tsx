import clsx from "clsx";
import { fitSignals } from "@/lib/data";

type FitSectionProps = {
  embedded?: boolean;
};

export function FitSection({ embedded = false }: FitSectionProps) {
  return (
    <section className={clsx(embedded ? "pt-10" : "section-shell section-space")}>
      <div className="grid gap-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Fit and expectations</span>
          <h2 className="section-title mx-auto text-3xl sm:text-4xl lg:text-[3.2rem]">
            Clearer qualification helps the right buyers move faster.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-neutral-600">
            OpsMira is not meant to be everything for everyone. This section is
            here to clarify when the service fits well, when it does not, and
            what helps implementation succeed.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          <article className="card p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-600">
              Best fit
            </p>
            <div className="mt-5 grid gap-3">
              {fitSignals.bestFit.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.3rem] border border-stone-300 bg-[#f8faff] px-4 py-4 text-sm leading-7 text-neutral-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article className="luxury-panel p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
              Not the right fit if
            </p>
            <div className="mt-5 grid gap-3">
              {fitSignals.notFit.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.3rem] border border-white/12 bg-white/8 px-4 py-4 text-sm leading-7 text-white/80"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article className="card p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-600">
              What OpsMira needs from you
            </p>
            <div className="mt-5 grid gap-3">
              {fitSignals.needsFromClient.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.3rem] border border-stone-300 bg-[#f8faff] px-4 py-4 text-sm leading-7 text-neutral-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
