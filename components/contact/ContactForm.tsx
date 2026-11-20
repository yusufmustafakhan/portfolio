"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { CircleCheck, Loader2, Send } from "lucide-react";

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

// Key comes from .env.local (locally) and Vercel Environment Variables (live site).
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

const fieldClass =
  "w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/30";

type FormState = {
  name: string;
  email: string;
  company: string;
  topic: string;
  message: string;
};

type Status = "idle" | "sending" | "sent" | "error";

const emptyForm: FormState = {
  name: "",
  email: "",
  company: "",
  topic: topics[0],
  message: "",
};

export default function ContactForm({ email }: Props) {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [status, setStatus] = useState<Status>("idle");

  const update =
    (field: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm({ ...form, [field]: e.target.value });

  const companyPart = form.company ? " (" + form.company + ")" : "";
  const subject = "Portfolio: " + form.topic + " - " + form.name + companyPart;

  const openEmailApp = () => {
    const body =
      form.message + "\n\n--\n" + form.name + "\n" + form.email + (form.company ? "\n" + form.company : "");
    window.location.href =
      "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // No key configured: fall back to the visitor's email app.
    if (!ACCESS_KEY) {
      openEmailApp();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject,
          from_name: "Portfolio Contact Form",
          name: form.name,
          email: form.email,
          company: form.company,
          topic: form.topic,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        setForm(emptyForm);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center">
        <CircleCheck className="mx-auto mb-4 text-emerald-400" size={40} aria-hidden="true" />
        <h3 className="text-xl font-semibold text-white">Message sent</h3>
        <p className="mt-2 text-slate-300">Thanks for reaching out. I will get back to you soon.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-sky-400 hover:text-sky-300"
        >
          Send another message
        </button>
      </div>
    );
  }

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
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            placeholder="you@company.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
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
          className={fieldClass + " resize-y"}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-2xl bg-sky-600 px-6 py-3 font-semibold text-white transition hover:bg-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? (
          <Loader2 size={18} className="animate-spin" aria-hidden="true" />
        ) : (
          <Send size={18} aria-hidden="true" />
        )}
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "error" && (
        <p className="text-sm text-rose-400" role="alert">
          Something went wrong.{" "}
          <button type="button" onClick={openEmailApp} className="underline hover:text-rose-300">
            Send it from your email app instead
          </button>
        </p>
