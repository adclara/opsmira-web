"use client";

import { motion } from "framer-motion";
import { Zap, BarChart3, Brain, ArrowRight } from "lucide-react";

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function BentoGrid() {
  return (
    <section className="section-shell section-space">
      <div className="mb-10 max-w-2xl">
        <span className="eyebrow">Productos</span>
        <h2 className="section-title mt-3">
          Una plataforma, tres motores de eficiencia
        </h2>
        <p className="section-copy mt-4">
          Cada módulo trabaja de forma autónoma y en conjunto para eliminar
          fricción operativa.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-[1.6fr_1fr] md:grid-rows-2" style={{ minHeight: "520px" }}>
        {/* Card 1 — Automate (spans 2 rows, dark) */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={cardVariant}
          whileHover={{ scale: 1.008 }}
          className="luxury-panel row-span-1 flex flex-col justify-between p-8 md:row-span-2 md:p-10"
        >
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/20">
              <Zap className="h-6 w-6 text-brand-300" />
            </div>
            <p className="mt-5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-brand-300">
              OpsMira Automate
            </p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-white lg:text-3xl">
              Automatiza sin código
            </h3>
            <p className="mt-3 max-w-md text-sm leading-6 text-white/55">
              Permisos, seguimientos y reportes — todos en piloto automático.
              Configura una vez, opera para siempre.
            </p>
          </div>

          {/* Process flow visual */}
          <div className="mt-8 flex items-center gap-3">
            {["Intake", "Proceso", "Entrega"].map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-medium text-white/70">
                  {step}
                </div>
                {i < 2 && (
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-white/20" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="/services"
              className="group inline-flex items-center gap-2 text-sm font-medium text-brand-300 transition hover:text-brand-100"
            >
              Explorar Automate
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>

        {/* Card 2 — Analyze (light) */}
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={cardVariant}
          whileHover={{ scale: 1.01 }}
          className="card flex flex-col justify-between p-7"
        >
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50">
              <BarChart3 className="h-6 w-6 text-brand-600" />
            </div>
            <p className="mt-4 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-brand-600">
              OpsMira Analyze
            </p>
            <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground">
              Visibilidad en tiempo real
            </h3>
            <p className="mt-2 text-sm leading-6 text-neutral-500">
              Dashboards operativos que muestran exactamente dónde se pierde
              tiempo y dinero.
            </p>
          </div>

          {/* Mini bar chart */}
          <div className="mt-6 flex items-end gap-1.5">
            {[40, 55, 35, 70, 50, 85, 65, 90, 75].map((h, i) => (
              <div
                key={i}
                className="w-4 rounded-sm"
                style={{
                  height: `${h * 0.6}px`,
                  background:
                    i >= 6
                      ? "linear-gradient(to top, #4338CA, #5B4CF0)"
                      : "#E5E7EB",
                }}
              />
            ))}
          </div>

          <a
            href="/services"
            className="group mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand-600 transition hover:text-brand-700"
          >
            Explorar Analyze
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Card 3 — Intelligence (dark) */}
        <motion.div
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={cardVariant}
          whileHover={{ scale: 1.01 }}
          className="luxury-panel flex flex-col justify-between p-7"
        >
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/20">
                <Brain className="h-6 w-6 text-brand-300" />
              </div>
              <span className="rounded-full bg-brand-500/15 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-brand-300">
                AI-Powered
              </span>
            </div>
            <p className="mt-4 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-brand-300">
              OpsMira Intelligence
            </p>
            <h3 className="mt-2 text-xl font-bold tracking-tight text-white">
              IA que aprende de tu operación
            </h3>
            <p className="mt-2 text-sm leading-6 text-white/55">
              Predicciones, anomalías y recomendaciones que mejoran cada
              semana.
            </p>
          </div>

          <a
            href="/services"
            className="group mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand-300 transition hover:text-brand-100"
          >
            Explorar Intelligence
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
