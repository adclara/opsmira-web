"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}

function Tooltip({ text }: { text: string }) {
  return (
    <span className="group relative ml-1.5 inline-flex cursor-help">
      <span className="flex h-4 w-4 items-center justify-center rounded-full border border-stone-300 bg-stone-100 text-[9px] font-bold text-neutral-500">
        ?
      </span>
      <span className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 w-52 -translate-x-1/2 rounded-lg border border-stone-200 bg-white px-2.5 py-1.5 text-xs leading-5 text-neutral-600 opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
        {text}
      </span>
    </span>
  );
}

function SliderRow({
  label,
  tooltip,
  value,
  min,
  max,
  step,
  prefix = "",
  suffix = "",
  onChange
}: {
  label: string;
  tooltip: string;
  value: number;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  suffix?: string;
  onChange: (value: number) => void;
}) {
  return (
    <div className="rounded-xl border border-stone-200 bg-white p-3.5">
      <div className="flex items-center justify-between gap-3">
        <label className="flex items-center text-[0.8rem] font-medium text-foreground">
          {label}
          <Tooltip text={tooltip} />
        </label>
        <span className="text-[0.8rem] font-medium text-neutral-600">
          {prefix}{value}{suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-3 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-[#e4e8f7] accent-[#4f46e5]"
      />
    </div>
  );
}

export function ROICalculator() {
  const [adminHours, setAdminHours] = useState(60);
  const [adminRate, setAdminRate] = useState(25);
  const [ownerHours, setOwnerHours] = useState(15);
  const [ownerRate, setOwnerRate] = useState(50);
  const [recoveredJobs, setRecoveredJobs] = useState(2);
  const [jobValue, setJobValue] = useState(3500);

  const results = useMemo(() => {
    const laborSavings = adminHours * adminRate;
    const ownerSavings = ownerHours * ownerRate;
    const revenueRecovery = recoveredJobs * jobValue;
    const monthlyValue = laborSavings + ownerSavings + revenueRecovery;
    const yearlyValue = monthlyValue * 12;

    return { laborSavings, ownerSavings, revenueRecovery, monthlyValue, yearlyValue };
  }, [adminHours, adminRate, ownerHours, ownerRate, recoveredJobs, jobValue]);

  return (
    <section id="savings-calculator" className="section-shell section-space scroll-mt-24">
      <div className="overflow-hidden rounded-2xl border border-stone-200 bg-[linear-gradient(180deg,#eef2ff,#f7f8fc)] p-5 shadow-soft sm:p-6">
        <div className="grid gap-6 xl:grid-cols-[0.72fr_1.28fr]">
          {/* Left descriptive column */}
          <div>
            <span className="eyebrow">Value estimator</span>
            <h2 className="section-title">
              See what the improvements are worth before you invest a dollar.
            </h2>
            <p className="mt-3 text-[0.9rem] leading-6 text-neutral-600">
              Estimate the value an OpsMira engagement could unlock — admin labor
              saved, owner time recovered, and missed work captured. The
              diagnosis that confirms it is free.
            </p>

            <div className="mt-6 grid gap-3">
              <div className="rounded-xl border border-white/80 bg-white/90 p-4">
                <p className="text-[0.65rem] uppercase tracking-[0.1em] text-neutral-500">
                  Administrative labor saved
                </p>
                <p className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-foreground">
                  {formatCurrency(results.laborSavings)}/mo
                </p>
                <p className="mt-1.5 text-[0.8rem] leading-6 text-neutral-600">
                  Example: {adminHours} hours removed monthly at ${adminRate} per hour.
                </p>
              </div>

              <div className="rounded-xl border border-white/80 bg-white/90 p-4">
                <p className="text-[0.65rem] uppercase tracking-[0.1em] text-neutral-500">
                  Owner time recovered
                </p>
                <p className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-foreground">
                  {formatCurrency(results.ownerSavings)}/mo
                </p>
                <p className="mt-1.5 text-[0.8rem] leading-6 text-neutral-600">
                  Example: {ownerHours} owner hours recovered monthly at ${ownerRate} per hour.
                </p>
              </div>

              <div className="rounded-xl border border-white/80 bg-white/90 p-4">
                <p className="text-[0.65rem] uppercase tracking-[0.1em] text-neutral-500">
                  Missed opportunities recovered
                </p>
                <p className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-foreground">
                  {formatCurrency(results.revenueRecovery)}/mo
                </p>
                <p className="mt-1.5 text-[0.8rem] leading-6 text-neutral-600">
                  Example: {recoveredJobs} additional {recoveredJobs === 1 ? "project" : "projects"} recovered monthly at {formatCurrency(jobValue)} each.
                </p>
              </div>
            </div>
          </div>

          {/* Right interactive column — sliders + results */}
          <div className="grid gap-5 xl:grid-cols-[1.02fr_0.98fr]">
            <div className="grid gap-3">
              <SliderRow
                label="Admin hours saved"
                tooltip="Hours your team spends on manual follow-ups, scheduling, and reporting each month"
                value={adminHours}
                min={0}
                max={160}
                step={5}
                suffix=" hrs/mo"
                onChange={setAdminHours}
              />
              <SliderRow
                label="Admin hourly rate"
                tooltip="Average hourly cost of administrative staff doing this work"
                value={adminRate}
                min={15}
                max={50}
                step={1}
                prefix="$"
                suffix="/hr"
                onChange={setAdminRate}
              />
              <SliderRow
                label="Owner hours recovered"
                tooltip="Hours you personally spend on tasks that could be standardized or automated"
                value={ownerHours}
                min={0}
                max={60}
                step={5}
                suffix=" hrs/mo"
                onChange={setOwnerHours}
              />
              <SliderRow
                label="Owner hourly value"
                tooltip="Value of your time per hour as the business owner"
                value={ownerRate}
                min={25}
                max={100}
                step={5}
                prefix="$"
                suffix="/hr"
                onChange={setOwnerRate}
              />
              <SliderRow
                label="Recovered jobs per month"
                tooltip="Customer jobs or leads you estimate are lost to slow, manual processes"
                value={recoveredJobs}
                min={0}
                max={10}
                step={1}
                onChange={setRecoveredJobs}
              />
              <SliderRow
                label="Average job value"
                tooltip="Average revenue per customer project or job"
                value={jobValue}
                min={500}
                max={15000}
                step={500}
                prefix="$"
                onChange={setJobValue}
              />
            </div>

            <div className="space-y-3">
              <div className="luxury-panel p-5">
                <p className="text-[0.65rem] uppercase tracking-[0.1em] text-white/55">
                  Estimated monthly value of improvements
                </p>
                <p className="mt-3 text-4xl font-semibold leading-none tracking-[-0.02em] text-white">
                  {formatCurrency(results.monthlyValue)}
                </p>
                <p className="mt-2 text-[0.8rem] leading-6 text-white/65">
                  Combined value from labor savings, owner time recovery, and
                  recovered customer work.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ["Admin labor saved", results.laborSavings],
                  ["Owner time recovered", results.ownerSavings],
                  ["Opportunities recovered", results.revenueRecovery],
                  ["Annual value", results.yearlyValue]
                ].map(([label, value]) => (
                  <div
                    key={label as string}
                    className="rounded-xl border border-stone-200 bg-white p-4"
                  >
                    <p className="text-[0.65rem] uppercase tracking-[0.1em] text-neutral-500">
                      {label}
                    </p>
                    <p className="mt-2 text-xl font-semibold tracking-[-0.02em] text-foreground">
                      {formatCurrency(Number(value))}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-brand-100 bg-[#eef0ff] p-4">
                <div>
                  <p className="text-[0.85rem] font-semibold text-brand-700">
                    The diagnosis is free.
                  </p>
                  <p className="mt-1 text-[0.8rem] leading-6 text-neutral-600">
                    Investment is scoped to the improvement we deliver — and sized to pay back fast.
                  </p>
                </div>
                <Link href="/contact" className="button-primary">
                  Book Free Diagnosis
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
