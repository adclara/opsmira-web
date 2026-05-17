"use client";

import { motion } from "framer-motion";
import {
  Bot,
  CalendarCheck,
  BarChart3,
  Eye,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Bot,
    eyebrow: "Seguimiento automático",
    title: "Respuesta instantánea a cada lead",
    description:
      "Tu IA responde en segundos, clasifica la urgencia y agenda la siguiente acción — sin intervención humana.",
    color: "from-brand-500/20 to-brand-600/10",
    accent: "bg-brand-500",
    mockup: {
      label: "Lead entrante",
      stat: "< 30s",
      statLabel: "Tiempo de respuesta",
    },
  },
  {
    icon: CalendarCheck,
    eyebrow: "Coordinación de agenda",
    title: "Scheduling sin fricciones",
    description:
      "Sincronización automática de crews, equipos y clientes. Conflictos detectados antes de que sucedan.",
    color: "from-emerald-500/20 to-emerald-600/10",
    accent: "bg-emerald-500",
    mockup: {
      label: "Conflictos resueltos",
      stat: "100%",
      statLabel: "Automatizado",
    },
  },
  {
    icon: BarChart3,
    eyebrow: "Reportes inteligentes",
    title: "Reportes que se escriben solos",
    description:
      "Dashboards en tiempo real con métricas de rendimiento, costos y oportunidades perdidas — sin Excel.",
    color: "from-amber-500/20 to-amber-600/10",
    accent: "bg-amber-500",
    mockup: {
      label: "Reportes generados",
      stat: "24/7",
      statLabel: "Monitoreo continuo",
    },
  },
  {
    icon: Eye,
    eyebrow: "Visibilidad del dueño",
    title: "Todo en un solo vistazo",
    description:
      "Panel de control para el dueño: qué se hizo hoy, qué falta, dónde se pierde dinero. Sin reuniones innecesarias.",
    color: "from-cyan-500/20 to-cyan-600/10",
    accent: "bg-cyan-500",
    mockup: {
      label: "Decisiones informadas",
      stat: "10min",
      statLabel: "Review diario",
    },
  },
];

export function FeaturesShowcase() {
  return (
    <section className="section-shell section-space">
      <div className="mb-12 max-w-2xl">
        <span className="eyebrow">Capacidades</span>
        <h2 className="section-title mt-3">
          Lo que OpsMira implementa por ti
        </h2>
        <p className="section-copy mt-4">
          Cada módulo se despliega en días, no meses. Sin código. Sin
          interrupciones.
        </p>
      </div>

      <div className="space-y-6">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="group grid items-center gap-8 overflow-hidden rounded-2xl border border-stone-300/70 bg-white/95 p-6 shadow-soft backdrop-blur transition hover:shadow-lg sm:p-8 lg:grid-cols-[1fr_1fr] lg:p-10"
          >
            <div>
              <div
                className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${feature.accent}`}
              >
                <feature.icon className="h-5 w-5 text-white" />
              </div>
              <p className="mt-4 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-neutral-400">
                {feature.eyebrow}
              </p>
              <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground lg:text-2xl">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-neutral-500">
                {feature.description}
              </p>
              <a
                href="/services"
                className="group/link mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand-600 transition hover:text-brand-700"
              >
                Conocer más
                <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>

            {/* Mockup card — inspired by pump.co colored feature panels */}
            <div
              className={`rounded-2xl bg-gradient-to-br ${feature.color} p-6 lg:p-8`}
            >
              <div className="rounded-xl border border-white/60 bg-white/80 p-5 shadow-sm backdrop-blur">
                <p className="text-xs font-medium uppercase tracking-[0.1em] text-neutral-400">
                  {feature.mockup.label}
                </p>
                <p className="mt-2 text-4xl font-bold tracking-tight text-foreground">
                  {feature.mockup.stat}
                </p>
                <p className="mt-1 text-sm text-neutral-500">
                  {feature.mockup.statLabel}
                </p>

                <div className="mt-4 flex items-end gap-1">
                  {Array.from({ length: 7 }).map((_, j) => (
                    <div
                      key={j}
                      className="w-5 rounded-sm"
                      style={{
                        height: `${18 + ((j * 37 + i * 13) % 32)}px`,
                        backgroundColor:
                          j >= 5
                            ? "var(--tw-shadow-color, #4338CA)"
                            : "#E5E7EB",
                        background:
                          j >= 5
                            ? "linear-gradient(to top, #4338CA, #5B4CF0)"
                            : "#E5E7EB",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
