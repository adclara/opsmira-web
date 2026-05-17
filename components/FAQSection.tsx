"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does implementation take?",
    answer:
      "Your first AI agent is deployed within 5–7 business days. This includes an operational audit, configuration, testing, and handoff. You don't need to do anything technical — we handle everything.",
  },
  {
    question: "Do I need technical knowledge?",
    answer:
      "No. OpsMira is 100% done-for-you. You don't need to code, configure APIs, or manage dashboards. You just review the results and watch your costs drop.",
  },
  {
    question: "How does pricing work?",
    answer:
      "We offer three monthly plans (Starter $299, Professional $599, Premium $899) based on the number of AI agents and support level. All plans include initial setup, training, and ongoing maintenance.",
  },
  {
    question: "What if I don't see results?",
    answer:
      "We measure impact from day one with clear metrics: hours saved, response speed, cost reduction, and revenue recovered. If you don't see value within 30 days, we adjust or pause — no questions asked.",
  },
  {
    question: "Does it work with my existing tools?",
    answer:
      "Yes. OpsMira integrates with your current stack — CRM, calendars, email, ERP, inventory management, and project tools. We don't replace what works, we optimize it with AI agents.",
  },
  {
    question: "How do AI agents improve my supply chain?",
    answer:
      "Our agents monitor inventory levels, predict demand patterns, optimize procurement timing, and flag supply chain bottlenecks in real time. They learn from your historical data to make increasingly accurate recommendations.",
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
