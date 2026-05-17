"use client";

import { useState } from "react";
import { contactPrompts } from "@/lib/data";
import { submitContact, type FormStatus, type ContactFormData } from "@/lib/contact";

export function ContactForm() {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    company: "",
    email: "",
    preferredContact: "Email",
    phone: "",
    industry: "",
    requestVolume: "Under 50 requests",
    urgentOutcome: "Reduce admin workload",
    problem: "",
    tools: "",
    _gotcha: ""
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function updateField(name: string, value: string) {
    setForm((current) => ({
      ...current,
      [name]: value
    }));
  }

  return (
    <form
      className="card p-7 sm:p-8"
      onSubmit={async (event) => {
        event.preventDefault();
        setErrorMsg("");

        if (!form.name || !form.email || !form.problem) {
          setStatus("error");
          setErrorMsg("Please fill in your name, email, and the main operational problem before submitting.");
          return;
        }

        setStatus("submitting");
        try {
          await submitContact(form);
          setStatus("success");
        } catch (err) {
          setStatus("error");
          setErrorMsg(err instanceof Error ? err.message : "Submission failed. Please try again.");
        }
      }}
    >
      <div className="mb-6 rounded-[1.6rem] border border-[#d9def3] bg-[#f8faff] p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
          Implementation intake
        </p>
        <p className="mt-3 text-sm leading-7 text-neutral-600">
          Tell us where your business is losing money — operational delays,
          process bottlenecks, missed leads, or manual admin. We use this
          to identify the best first AI agent deployment.
        </p>
      </div>

      <input
        type="text"
        name="_gotcha"
        value={form._gotcha}
        onChange={(e) => updateField("_gotcha", e.target.value)}
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

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
        What operational bottleneck is costing you the most time, money, or revenue right now?
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

      <button
        type="submit"
        className="button-primary mt-6"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Submitting…" : "Request Operations Audit"}
      </button>
      {status === "error" && errorMsg ? (
        <p className="mt-3 text-sm font-medium text-[#b42318]">{errorMsg}</p>
      ) : null}
      {status === "success" ? (
        <p className="mt-3 text-sm font-medium text-brand-700">
          Thanks — your intake has been submitted. We will review your operational details and follow up shortly.
        </p>
      ) : null}
    </form>
  );
}
