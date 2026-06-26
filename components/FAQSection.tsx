"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What does the free diagnosis include?",
    answer:
      "An on-site or remote assessment of your operations and cost structure, plus a prioritized roadmap of the highest-impact improvements — at no cost and no obligation.",
  },
  {
    question: "How does pricing work?",
    answer:
      "The diagnosis is free. From there, every engagement is scoped to a specific deliverable and priced to the value it creates — process redesign, standards, an app, dashboards, or AI agents. No monthly tiers, no setup fees.",
  },
  {
    question: "How fast do we see results?",
    answer:
      "Most engagements are scoped to show measurable impact within 30–90 days. The diagnosis pinpoints the fastest-payback improvement so you see ROI early, not in month six.",
  },
  {
    question: "Do you replace my team?",
    answer:
      "No. We improve how your team works — better processes, tools, and (where it pays) automation — so they can focus on higher-value work.",
  },
  {
    question: "Where do AI agents fit in?",
    answer:
      "AI agents are one add-on capability, not the headline. Once the process underneath is sound, we automate the follow-ups, reporting, and repetitive work where it clearly pays off.",
  },
  {
    question: "Does it work with our existing tools?",
    answer:
      "Yes. We build around and integrate with your current stack — CRM, calendars, email, ERP, inventory, and project tools. We improve what works rather than replacing it.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-white/8">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-6 text-left transition"
      >
        <span className="pr-8 text-base font-medium text-white sm:text-lg">
          {faq.question}
        </span>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/60">
          {isOpen ? (
            <Minus className="h-4 w-4" />
          ) : (
            <Plus className="h-4 w-4" />
          )}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm leading-6 text-white/50">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#0a0f1e] py-20 lg:py-28">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.4fr_1fr] lg:gap-20">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Frequently asked questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-sm leading-6 text-white/40"
            >
              Can&apos;t find what you&apos;re looking for? Reach out and
              we&apos;ll respond within 24 hours.
            </motion.p>
          </div>

          <div className="border-t border-white/8">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
