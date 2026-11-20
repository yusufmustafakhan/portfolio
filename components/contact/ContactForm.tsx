"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Send } from "lucide-react";

type Props = {
  email: string;
};

const topics = [
  "Partner Alliance / Collaboration",
  "Microsoft CSP Operations",
  "Partner Center & Governance",
  "Career Opportunity",
  "Other",
];

const fieldClass =
  "w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/30";

type FormState = {
  name: string;
  company: string;
  topic: string;
  message: string;
};

export default function ContactForm({ email }: Props) {
  const [form, setForm] = useState<FormState>({
    name: "",
    company: "",
    topic: topics[0],
    message: "",
  });

  const update =
    (field: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = `${form.topic} — ${form.name}${form.company ? ` (${form.company})` : ""}`;
    const body = `${form.message}\n\n—\n${form.name}${form.company ? `\n${form.company}` : ""}`;

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
            Name
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Your name"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-300">
            Company <span className="text-slate-500">(optional)</span>
          </label>
          <input
            id="company"
            value={form.company}
            onChange={update("company")}
            placeholder="Your company"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="topic" className="mb-2 block text-sm font-medium text-slate-300">
          Topic
        </label>
        <select id="topic" value={form.topic} onChange={update("topic")} className={fieldClass}>
          {topics.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={form.message}
          onChange={update("message")}
          placeholder="How can I help?"
          className={`${fieldClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-2xl bg-sky-600 px-6 py-3 font-semibold text-white transition hover:bg-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
      >
        <Send size={18} aria-hidden="true" />
        Send Message
      </button>

      <p className="text-sm text-slate-500">This opens your email app with the message ready to send.</p>
    </form>
  );
}
