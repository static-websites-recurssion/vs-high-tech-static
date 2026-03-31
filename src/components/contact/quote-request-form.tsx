"use client";

import type { FormEvent } from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

const productTypes = [
  "Question Papers",
  "OMR Sheets",
  "Answer Booklets",
  "Certificates",
  "Cheque Books",
  "Pass Books",
  "Barcode Printing",
  "Lottery Tickets",
  "Carbonless Forms",
  "Other",
] as const;

const inputClass =
  "mt-1.5 w-full rounded-lg border border-input bg-white px-3 py-2.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

const labelClass = "text-sm font-medium text-primary";

export function QuoteRequestForm() {
  const [mailHint, setMailHint] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const name = String(fd.get("name") ?? "").trim();
    const company = String(fd.get("company") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const productType = String(fd.get("productType") ?? "").trim();
    const quantity = String(fd.get("quantity") ?? "").trim();
    const deliveryLocation = String(fd.get("deliveryLocation") ?? "").trim();
    const requirements = String(fd.get("requirements") ?? "").trim();

    const bodyLines = [
      "Quote request from website",
      "",
      `Name: ${name}`,
      `Company / Organization: ${company}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Product Type: ${productType}`,
      `Quantity Required: ${quantity || "—"}`,
      `Delivery Location: ${deliveryLocation || "—"}`,
      "",
      "Special Requirements:",
      requirements || "—",
    ];

    const subject = `Website enquiry — ${productType} — ${company}`;
    const mailto = `mailto:vsprints@gmail.com?cc=${encodeURIComponent(
      "vshitechs@gmail.com"
    )}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      bodyLines.join("\n")
    )}`;

    setMailHint(true);
    window.location.href = mailto;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-primary/10 bg-white p-6 shadow-sm sm:p-8"
    >
      <h2 className="text-xl font-bold text-primary sm:text-2xl">
        Quote Request Form
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Submit opens your email app with a pre-filled message to our team
        (static site — no server upload).
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="quote-name" className={labelClass}>
            Name <span className="text-destructive">*</span>
          </label>
          <input
            id="quote-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="quote-company" className={labelClass}>
            Company / Organization <span className="text-destructive">*</span>
          </label>
          <input
            id="quote-company"
            name="company"
            type="text"
            required
            autoComplete="organization"
            className={inputClass}
            placeholder="Company or institution name"
          />
        </div>
        <div>
          <label htmlFor="quote-email" className={labelClass}>
            Email <span className="text-destructive">*</span>
          </label>
          <input
            id="quote-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="quote-phone" className={labelClass}>
            Phone <span className="text-destructive">*</span>
          </label>
          <input
            id="quote-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={inputClass}
            placeholder="Mobile or landline"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="quote-product" className={labelClass}>
            Product Type <span className="text-destructive">*</span>
          </label>
          <select
            id="quote-product"
            name="productType"
            required
            defaultValue=""
            className={`${inputClass} cursor-pointer appearance-none bg-[length:1rem] bg-[right_0.75rem_center] bg-no-repeat pr-10`}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%231a2563' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
            }}
          >
            <option value="" disabled>
              Select a product type
            </option>
            {productTypes.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="quote-quantity" className={labelClass}>
            Quantity Required
          </label>
          <input
            id="quote-quantity"
            name="quantity"
            type="text"
            className={inputClass}
            placeholder="e.g. 10,000 sheets"
          />
        </div>
        <div>
          <label htmlFor="quote-location" className={labelClass}>
            Delivery Location
          </label>
          <input
            id="quote-location"
            name="deliveryLocation"
            type="text"
            className={inputClass}
            placeholder="City / address"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="quote-requirements" className={labelClass}>
            Special Requirements
          </label>
          <textarea
            id="quote-requirements"
            name="requirements"
            rows={4}
            className={`${inputClass} min-h-[100px] resize-y`}
            placeholder="Timelines, security needs, finishing, or other notes"
          />
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" variant="accent" size="lg">
          Send Enquiry
        </Button>
        {mailHint ? (
          <p className="text-sm text-muted-foreground" role="status">
            If your mail app did not open, email{" "}
            <a
              href="mailto:vsprints@gmail.com"
              className="font-medium text-accent hover:underline"
            >
              vsprints@gmail.com
            </a>
            .
          </p>
        ) : null}
      </div>
    </form>
  );
}
