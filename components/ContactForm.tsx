"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="card p-7 sm:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-neutral-700">
          Name
          <input
            type="text"
            name="name"
            className="mt-2 w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-sm text-foreground outline-none transition focus:border-olive-500"
          />
        </label>
        <label className="text-sm font-medium text-neutral-700">
          Company
          <input
            type="text"
            name="company"
            className="mt-2 w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-sm text-foreground outline-none transition focus:border-olive-500"
          />
        </label>
        <label className="text-sm font-medium text-neutral-700">
          Email
          <input
            type="email"
            name="email"
            className="mt-2 w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-sm text-foreground outline-none transition focus:border-olive-500"
          />
        </label>
        <label className="text-sm font-medium text-neutral-700">
          Preferred contact method
          <select className="mt-2 w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-sm text-foreground outline-none transition focus:border-olive-500">
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
            className="mt-2 w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-sm text-foreground outline-none transition focus:border-olive-500"
          />
        </label>
        <label className="text-sm font-medium text-neutral-700">
          Industry
          <input
            type="text"
            name="industry"
            className="mt-2 w-full rounded-2xl border border-stone-300 bg-white px-4 py-3 text-sm text-foreground outline-none transition focus:border-olive-500"
          />
        </label>
      </div>

      <label className="mt-5 block text-sm font-medium text-neutral-700">
        What problem are you trying to solve?
        <textarea
          name="problem"
          rows={6}
          className="mt-2 w-full rounded-[1.6rem] border border-stone-300 bg-white px-4 py-3 text-sm text-foreground outline-none transition focus:border-olive-500"
        />
      </label>

      <button type="submit" className="button-primary mt-6">
        Request Consultation
      </button>
      <p className="mt-4 text-xs leading-6 text-neutral-500">
        This form is front-end only for now and is ready to be connected later
        to Resend, Formspree, or a custom API route.
      </p>
      {submitted ? (
        <p className="mt-3 text-sm font-medium text-olive-800">
          Thanks. The form structure is ready and can be connected to your email
          or API workflow next.
        </p>
      ) : null}
    </form>
  );
}
