"use client";

import { useMemo, useState } from "react";

type ContactDetails = {
  name: string;
  email: string;
  phone: string;
  company: string;
  city: string;
  subject: string;
  message: string;
};

const initial: ContactDetails = {
  name: "",
  email: "",
  phone: "",
  company: "",
  city: "",
  subject: "",
  message: "",
};

function toMailto({
  to,
  cc,
  subject,
  body,
}: {
  to: string[];
  cc?: string[];
  subject: string;
  body: string;
}) {
  const params = new URLSearchParams();
  if (cc?.length) params.set("cc", cc.join(","));
  params.set("subject", subject);
  params.set("body", body);
  return `mailto:${encodeURIComponent(to.join(","))}?${params.toString()}`;
}

export function ContactDetailsForm({
  toEmails = ["vsprints@gmail.com", "vshitechs@gmail.com"],
}: {
  toEmails?: string[];
}) {
  const [details, setDetails] = useState<ContactDetails>(initial);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  const errors = useMemo(() => {
    const e: Partial<Record<keyof ContactDetails, string>> = {};
    if (!details.name.trim()) e.name = "Please enter your name.";
    if (!details.email.trim()) e.email = "Please enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(details.email.trim()))
      e.email = "Please enter a valid email.";
    if (!details.phone.trim()) e.phone = "Please enter your phone number.";
    if (!details.subject.trim()) e.subject = "Please enter a subject.";
    if (!details.message.trim()) e.message = "Please enter your message.";
    return e;
  }, [details]);

  const canSubmit = Object.keys(errors).length === 0;

  function onChange<K extends keyof ContactDetails>(key: K, value: string) {
    setDetails((d) => ({ ...d, [key]: value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setAttemptedSubmit(true);
    if (!canSubmit) return;

    const subject = `Website enquiry: ${details.subject.trim()}`;
    const body = [
      "New enquiry from website contact form",
      "",
      `Name: ${details.name.trim()}`,
      `Email: ${details.email.trim()}`,
      `Phone: ${details.phone.trim()}`,
      `Company: ${details.company.trim() || "-"}`,
      `City: ${details.city.trim() || "-"}`,
      "",
      "Message:",
      details.message.trim(),
    ].join("\n");

    window.location.href = toMailto({
      to: toEmails,
      subject,
      body,
    });
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-primary/10 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-primary sm:text-2xl">
            Send us your details
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Fill the form and click send. Your email app will open with a
            pre-filled message.
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-primary" htmlFor="name">
            Name *
          </label>
          <input
            id="name"
            value={details.name}
            onChange={(e) => onChange("name", e.target.value)}
            className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none ring-0 focus:border-primary/40 focus:ring-2 focus:ring-primary/15"
            placeholder="Your full name"
            autoComplete="name"
          />
          {attemptedSubmit && errors.name ? (
            <p className="mt-1 text-xs text-red-600">{errors.name}</p>
          ) : null}
        </div>

        <div>
          <label className="text-sm font-semibold text-primary" htmlFor="email">
            Email *
          </label>
          <input
            id="email"
            value={details.email}
            onChange={(e) => onChange("email", e.target.value)}
            className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none ring-0 focus:border-primary/40 focus:ring-2 focus:ring-primary/15"
            placeholder="name@company.com"
            autoComplete="email"
            inputMode="email"
          />
          {attemptedSubmit && errors.email ? (
            <p className="mt-1 text-xs text-red-600">{errors.email}</p>
          ) : null}
        </div>

        <div>
          <label className="text-sm font-semibold text-primary" htmlFor="phone">
            Phone *
          </label>
          <input
            id="phone"
            value={details.phone}
            onChange={(e) => onChange("phone", e.target.value)}
            className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none ring-0 focus:border-primary/40 focus:ring-2 focus:ring-primary/15"
            placeholder="Your mobile number"
            autoComplete="tel"
            inputMode="tel"
          />
          {attemptedSubmit && errors.phone ? (
            <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
          ) : null}
        </div>

        <div>
          <label
            className="text-sm font-semibold text-primary"
            htmlFor="company"
          >
            Company
          </label>
          <input
            id="company"
            value={details.company}
            onChange={(e) => onChange("company", e.target.value)}
            className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none ring-0 focus:border-primary/40 focus:ring-2 focus:ring-primary/15"
            placeholder="Organization name"
            autoComplete="organization"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-primary" htmlFor="city">
            City
          </label>
          <input
            id="city"
            value={details.city}
            onChange={(e) => onChange("city", e.target.value)}
            className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none ring-0 focus:border-primary/40 focus:ring-2 focus:ring-primary/15"
            placeholder="Hyderabad / Vijayawada / …"
            autoComplete="address-level2"
          />
        </div>

        <div>
          <label
            className="text-sm font-semibold text-primary"
            htmlFor="subject"
          >
            Subject *
          </label>
          <input
            id="subject"
            value={details.subject}
            onChange={(e) => onChange("subject", e.target.value)}
            className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none ring-0 focus:border-primary/40 focus:ring-2 focus:ring-primary/15"
            placeholder="e.g. OMR sheets quotation"
          />
          {attemptedSubmit && errors.subject ? (
            <p className="mt-1 text-xs text-red-600">{errors.subject}</p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <label
            className="text-sm font-semibold text-primary"
            htmlFor="message"
          >
            Message *
          </label>
          <textarea
            id="message"
            value={details.message}
            onChange={(e) => onChange("message", e.target.value)}
            className="mt-1 min-h-[120px] w-full resize-y rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none ring-0 focus:border-primary/40 focus:ring-2 focus:ring-primary/15"
            placeholder="Tell us what you need (qty, size, delivery timeline, security features, etc.)"
          />
          {attemptedSubmit && errors.message ? (
            <p className="mt-1 text-xs text-red-600">{errors.message}</p>
          ) : null}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          By clicking send, you’ll be redirected to your email application.
        </p>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/30 disabled:cursor-not-allowed disabled:opacity-60"
          disabled={!canSubmit && attemptedSubmit}
        >
          Send enquiry
        </button>
      </div>
    </form>
  );
}

