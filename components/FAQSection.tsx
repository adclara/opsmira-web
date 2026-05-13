import clsx from "clsx";
import { buyerFaqs, deliveryFacts } from "@/lib/data";

export function FAQSection({ embedded = false }: { embedded?: boolean }) {
  return (
    <section className={clsx(embedded ? "pt-10" : "section-shell section-space")}>
      <div className="grid gap-8 xl:grid-cols-[0.78fr_1.22fr]">
        <div>
          <span className="eyebrow">Buyer questions</span>
          <h2 className="section-title text-3xl sm:text-4xl lg:text-[3.2rem]">
            The main questions buyers ask before they commit.
          </h2>
          <p className="mt-5 text-base leading-8 text-neutral-600">
            This section is here to remove hesitation around fit, rollout,
            oversight, and whether the implementation is likely to justify
            itself financially.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {deliveryFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-[1.4rem] border border-stone-300 bg-[#f8faff] px-4 py-4"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                  {fact.label}
                </p>
                <p className="mt-2 text-sm font-semibold leading-7 text-foreground">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {buyerFaqs.map((item, index) => (
            <article
              key={item.question}
              className={
                index === 1
                  ? "luxury-panel p-6"
                  : "card p-6"
              }
            >
              <h3
                className={
                  index === 1
                    ? "text-xl font-semibold text-white"
                    : "text-xl font-semibold text-foreground"
                }
              >
                {item.question}
              </h3>
              <p
                className={
                  index === 1
                    ? "mt-3 text-sm leading-7 text-white/74"
                    : "mt-3 text-sm leading-7 text-neutral-600"
                }
              >
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
