"use client";

import { useMemo, useState } from "react";
import { savingsExamples } from "@/lib/data";

const plans = [
  { label: "Starter", price: 299 },
  { label: "Professional", price: 599 },
  { label: "Premium", price: 899 }
];

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}

function SliderRow({
  label,
  value,
  min,
  max,
  step,
  suffix = "",
  onChange
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  suffix?: string;
  onChange: (value: number) => void;
}) {
  return (
    <div className="rounded-[1.6rem] border border-stone-300 bg-white/90 p-4">
      <div className="flex items-center justify-between gap-4">
        <label className="text-sm font-semibold text-foreground">{label}</label>
        <span className="text-sm text-neutral-600">
          {value}
          {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full bg-stone-200 accent-[#405c0b]"
      />
    </div>
  );
}

export function ROICalculator() {
  const [adminHours, setAdminHours] = useState(25);
  const [adminRate, setAdminRate] = useState(25);
  const [ownerHours, setOwnerHours] = useState(15);
  const [ownerRate, setOwnerRate] = useState(50);
  const [recoveredJobs, setRecoveredJobs] = useState(1);
  const [jobValue, setJobValue] = useState(3500);
  const [planPrice, setPlanPrice] = useState(plans[1].price);

  const results = useMemo(() => {
    const laborSavings = adminHours * adminRate;
    const ownerSavings = ownerHours * ownerRate;
    const revenueRecovery = recoveredJobs * jobValue;
    const monthlyValue = laborSavings + ownerSavings + revenueRecovery;
    const yearlyValue = monthlyValue * 12;
    const monthlyNet = monthlyValue - planPrice;
    const roi = planPrice > 0 ? monthlyValue / planPrice : 0;

    return {
      laborSavings,
      ownerSavings,
      revenueRecovery,
      monthlyValue,
      yearlyValue,
      monthlyNet,
      roi
    };
  }, [adminHours, adminRate, ownerHours, ownerRate, recoveredJobs, jobValue, planPrice]);

  return (
    <section className="section-shell section-space">
      <div className="grid gap-6 xl:grid-cols-[0.76fr_1.24fr]">
        <div className="rounded-[2.4rem] border border-stone-300 bg-white/[0.84] p-7 sm:p-8">
          <span className="eyebrow">ROI model</span>
          <h2 className="section-title text-3xl sm:text-4xl lg:text-[3.2rem]">
            Estimate what operational automation could be worth each month.
          </h2>
          <p className="mt-5 text-base leading-8 text-neutral-600">
            These assumptions are designed around realistic 2026 U.S. SMB
            operating costs: administrative labor, owner time, and customer
            opportunity recovery. The model is intentionally practical rather
            than inflated.
          </p>

          <div className="mt-8 grid gap-4">
            {savingsExamples.map((example) => (
              <div
                key={example.title}
                className="rounded-[1.6rem] border border-stone-300 bg-stone-100/75 p-5"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                  {example.title}
                </p>
                <p className="mt-3 font-display text-4xl text-foreground">
                  {example.value}
                </p>
                <p className="mt-2 text-sm leading-7 text-neutral-600">
                  {example.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[2.4rem] border border-[#d8dfd0] bg-[linear-gradient(180deg,rgba(241,244,232,0.8),rgba(255,255,255,0.95))] p-5 shadow-soft sm:p-6">
          <div className="grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
            <div className="grid gap-4">
              <SliderRow
                label="Admin hours saved per month"
                value={adminHours}
                min={0}
                max={60}
                step={1}
                onChange={setAdminHours}
              />
              <SliderRow
                label="Administrative hourly value"
                value={adminRate}
                min={18}
                max={28}
                step={1}
                suffix="/hr"
                onChange={setAdminRate}
              />
              <SliderRow
                label="Owner hours recovered per month"
                value={ownerHours}
                min={0}
                max={40}
                step={1}
                onChange={setOwnerHours}
              />
              <SliderRow
                label="Owner hourly value"
                value={ownerRate}
                min={35}
                max={75}
                step={5}
                suffix="/hr"
                onChange={setOwnerRate}
              />
              <SliderRow
                label="Additional customer projects recovered"
                value={recoveredJobs}
                min={0}
                max={4}
                step={1}
                onChange={setRecoveredJobs}
              />
              <SliderRow
                label="Average project value"
                value={jobValue}
                min={500}
                max={12000}
                step={500}
                onChange={setJobValue}
              />

              <div className="rounded-[1.6rem] border border-stone-300 bg-white/90 p-4">
                <label className="text-sm font-semibold text-foreground">
                  Platform plan
                </label>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {plans.map((plan) => {
                    const active = plan.price === planPrice;

                    return (
                      <button
                        key={plan.label}
                        type="button"
                        onClick={() => setPlanPrice(plan.price)}
                        className={
                          active
                            ? "rounded-[1.3rem] border border-olive-300 bg-olive-700 px-4 py-4 text-left text-white"
                            : "rounded-[1.3rem] border border-stone-300 bg-stone-100/80 px-4 py-4 text-left text-foreground"
                        }
                      >
                        <p className="text-sm font-semibold">{plan.label}</p>
                        <p className="mt-1 text-sm">
                          {formatCurrency(plan.price)}/mo
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="luxury-panel p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-white/[0.65]">
                  Estimated monthly impact
                </p>
                <p className="mt-4 font-display text-6xl leading-none text-white">
                  {formatCurrency(results.monthlyValue)}
                </p>
                <p className="mt-3 text-sm leading-7 text-white/[0.76]">
                  Combined value from labor savings, owner efficiency recovery,
                  and customer opportunity recovery.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Administrative labor", results.laborSavings],
                  ["Owner time", results.ownerSavings],
                  ["Recovered projects", results.revenueRecovery],
                  ["Monthly net value", results.monthlyNet]
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-[1.6rem] border border-stone-300 bg-white p-5"
                  >
                    <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                      {label}
                    </p>
                    <p className="mt-3 font-display text-4xl text-foreground">
                      {formatCurrency(Number(value))}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-[1.8rem] border border-stone-300 bg-[linear-gradient(180deg,#ffffff,#f6f8ef)] p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                      Yearly value
                    </p>
                    <p className="mt-3 font-display text-5xl text-foreground">
                      {formatCurrency(results.yearlyValue)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                      ROI multiple
                    </p>
                    <p className="mt-3 font-display text-5xl text-foreground">
                      {results.roi.toFixed(1)}x
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-neutral-600">
                  Many SMB operators land somewhere in the 3x to 10x+ range when
                  improved response speed and one or more recovered customer
                  projects are included.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
