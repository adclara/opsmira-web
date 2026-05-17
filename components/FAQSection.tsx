"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "¿Cuánto tiempo toma la implementación?",
    answer:
      "El primer workflow se despliega en 5–7 días hábiles. Incluye auditoría, configuración, pruebas y entrega. No necesitas hacer nada técnico — nosotros manejamos todo.",
  },
  {
    question: "¿Necesito conocimientos técnicos?",
    answer:
      "No. OpsMira es 100% done-for-you. No necesitas saber programar, configurar APIs ni manejar dashboards complejos. Tú solo validas los resultados.",
  },
  {
    question: "¿Cómo funciona el modelo de pricing?",
    answer:
      "Ofrecemos tres planes mensuales (Starter $299, Professional $599, Premium $899) según la cantidad de workflows y el nivel de soporte. Todos incluyen setup inicial y mantenimiento.",
  },
  {
    question: "¿Qué pasa si no veo resultados?",
    answer:
      "Medimos el impacto desde el día uno con métricas claras: horas ahorradas, velocidad de respuesta, oportunidades recuperadas. Si no ves valor en los primeros 30 días, ajustamos o pausamos sin compromiso.",
  },
  {
    question: "¿Funciona con las herramientas que ya uso?",
    answer:
      "Sí. OpsMira se integra con tus sistemas existentes — CRM, calendarios, email, WhatsApp, herramientas de gestión de proyectos. No reemplazamos, optimizamos lo que ya tienes.",
  },
  {
    question: "¿Es seguro? ¿Quién tiene acceso a mis datos?",
    answer:
      "Tu data está encriptada y solo se accede con permisos de solo lectura donde sea necesario. Cumplimos con las mejores prácticas de seguridad y nunca compartimos información con terceros.",
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
              Preguntas frecuentes
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-sm leading-6 text-white/40"
            >
              ¿No encuentras lo que buscas? Escríbenos y te respondemos en menos
              de 24 horas.
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
