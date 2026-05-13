"use client";

import { useState } from "react";
import { contactPrompts, site } from "@/lib/data";

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    preferredContact: "Email",
    phone: "",
    industry: "",
    requestVolume: "Under 50 requests",
    urgentOutcome: "Reduce admin workload",
    problem: "",
    tools: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function updateField(name: string, value: string) {
    setForm((current) => ({
      ...current,
      [name]: value
    }));
  }

  function buildMailtoLink() {
    const subject = `OpsMira workflow audit request - ${form.company || form.name || "New inquiry"}`;
    const body = [
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Email: ${form.email}`,
      `Preferred contact method: ${form.preferredContact}`,
      `Phone: ${form.phone}`,
      `Industry: ${form.industry}`,
      `Approximate monthly request volume: ${form.requestVolume}`,
      `Most urgent outcome: ${form.urgentOutcome}`,
      "",
      "Primary workflow problem:",
      form.problem,
      "",
      "Current tools / channels involved:",
      form.tools
    ].join("\n");

    return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form
      className="card p-7 sm:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        setError("");

        if (!form.name || !form.email || !form.problem) {
          setSubmitted(false);
          setError("Please fill in your name, email, and the main workflow problem before submitting.");
          return;
        }

        setSubmitted(true);
        window.location.href = buildMailtoLink();
      }}
    >
      <div className="mb-6 rounded-[1.6rem] border border-[#d9def3] bg-[#f8faff] p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
          Implementation intake
        </p>
        <p className="mt-3 text-sm leading-7 text-neutral-600">
          Share the workflow bottleneck, where admin time is getting burned, or
          which customer or scheduling process keeps slipping. This page is
          designed to start the first implementation conversation.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-neutral-700">
          Name
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="mt-2 w-full rounded-2xl border border-stone-300 bg-[#fbfcff] px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand-500"
          />
        </label>
        <label className="text-sm font-medium text-neutral-700">
          Company
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
            className="mt-2 w-full rounded-2xl border border-stone-300 bg-[#fbfcff] px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand-500"
          />
        </label>
        <label className="text-sm font-medium text-neutral-700">
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="mt-2 w-full rounded-2xl border border-stone-300 bg-[#fbfcff] px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand-500"
          />
        </label>
        <label className="text-sm font-medium text-neutral-700">
          Preferred contact method
          <select
            name="preferredContact"
            value={form.preferredContact}
            onChange={(event) => updateField("preferredContact", event.target.value)}
            className="mt-2 w-full rounded-2xl border border-stone-300 bg-[#fbfcff] px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand-500"
          >
            <option>Email</option>
            <option>Phone</option>
            <option>LinkedIn</option>
          </select>
        </label>
        <label className="text-sm font-medium text-neutral-700">
          Phone
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="mt-2 w-full rounded-2xl border border-stone-300 bg-[#fbfcff] px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand-500"
          />
        </label>
        <label className="text-sm font-medium text-neutral-700">
          Industry
          <input
            type="text"
            name="industry"
            value={form.industry}
            onChange={(event) => updateField("industry", event.target.value)}
            className="mt-2 w-full rounded-2xl border border-stone-300 bg-[#fbfcff] px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand-500"
          />
        </label>
        <label className="text-sm font-medium text-neutral-700">
          Approximate monthly request volume
          <select
            name="requestVolume"
            value={form.requestVolume}
            onChange={(event) => updateField("requestVolume", event.target.value)}
            className="mt-2 w-full rounded-2xl border border-stone-300 bg-[#fbfcff] px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand-500"
          >
            <option>Under 50 requests</option>
            <option>50-150 requests</option>
            <option>150-300 requests</option>
            <option>300+ requests</option>
          </select>
        </label>
        <label className="text-sm font-medium text-neutral-700">
          Most urgent outcome
          <select
            name="urgentOutcome"
            value={form.urgentOutcome}
            onChange={(event) => updateField("urgentOutcome", event.target.value)}
            className="mt-2 w-full rounded-2xl border border-stone-300 bg-[#fbfcff] px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand-500"
          >
            <option>Reduce admin workload</option>
            <option>Improve customer response speed</option>
            <option>Recover missed opportunities</option>
            <option>Reduce reporting burden</option>
            <option>Improve scheduling coordination</option>
            <option>Increase owner visibility</option>
          </select>
        </label>
      </div>

      <label className="mt-5 block text-sm font-medium text-neutral-700">
        What workflow is costing you the most time, money, or follow-up right now?
        <textarea
          name="problem"
          rows={6}
          value={form.problem}
          onChange={(event) => updateField("problem", event.target.value)}
          className="mt-2 w-full rounded-[1.6rem] border border-stone-300 bg-[#fbfcff] px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand-500"
          placeholder="Example: missed calls are not getting followed up, scheduling changes create office chaos, reporting is still manual, owners are stuck chasing updates..."
        />
      </label>

      <label className="mt-5 block text-sm font-medium text-neutral-700">
        What tools or communication channels are involved today?
        <textarea
          name="tools"
          rows={4}
          value={form.tools}
          onChange={(event) => updateField("tools", event.target.value)}
          className="mt-2 w-full rounded-[1.6rem] border border-stone-300 bg-[#fbfcff] px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand-500"
          placeholder="Example: phone calls, Gmail, text messages, Google Calendar, Jobber, spreadsheets, WhatsApp..."
        />
      </label>

      <div className="mt-5 rounded-[1.6rem] border border-stone-300 bg-[#f8faff] p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-600">
          Helpful details to include
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {contactPrompts.map((item) => (
            <div
              key={item}
              className="rounded-[1.2rem] border border-stone-300 bg-white px-4 py-4 text-sm leading-7 text-neutral-700"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <button type="submit" className="button-primary mt-6">
        Request Workflow Audit
      </button>
      <p className="mt-4 text-xs leading-6 text-neutral-500">
        On this static GitHub Pages deployment, submitting opens a prefilled
        email draft to OpsMira so the intake still works without a hosted
        backend.
      </p>
      {error ? (
        <p className="mt-3 text-sm font-medium text-[#b42318]">{error}</p>
      ) : null}
      {submitted ? (
        <p className="mt-3 text-sm font-medium text-brand-700">
          Thanks. Your email draft should open with the intake details prefilled.
        </p>
      ) : null}
    </form>
  );
}
