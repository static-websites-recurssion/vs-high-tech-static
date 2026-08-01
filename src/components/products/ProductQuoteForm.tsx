"use client";

import type { FormEvent } from "react";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";

export function ProductQuoteForm({
  productName,
}: {
  productName: string;
}) {
  const [sent, setSent] = useState(false);

  const subject = useMemo(
    () => `Product enquiry — ${productName}`,
    [productName]
  );

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const name = String(fd.get("name") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const quantity = String(fd.get("quantity") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    const bodyLines = [
      "Product enquiry from website",
      "",
      `Product: ${productName}`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Quantity: ${quantity || "—"}`,
      "",
      "Message:",
      message || "—",
    ];

    const mailto = `mailto:vsprints@gmail.com?cc=${encodeURIComponent(
      "vshitechs@gmail.com"
    )}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      bodyLines.join("\n")
    )}`;

    setSent(true);
    window.location.href = mailto;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-primary/10 bg-white p-6 shadow-sm"
    >
      <h3 className="text-lg font-bold text-primary">
        Request a quote for this product
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Fill in the details and click send. Your email app will open with the
        message ready — just press send.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4">
        <div>
          <label htmlFor="p-name" className="text-sm font-medium text-primary">
            Name <span className="text-destructive">*</span>
          </label>
          <input
            id="p-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-1 w-full rounded-lg border border-input bg-white px-3 py-2.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label
            htmlFor="p-phone"
            className="text-sm font-medium text-primary"
          >
            Phone <span className="text-destructive">*</span>
          </label>
          <input
            id="p-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="mt-1 w-full rounded-lg border border-input bg-white px-3 py-2.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            placeholder="Mobile or landline"
          />
        </div>

        <div>
          <label htmlFor="p-email" className="text-sm font-medium text-primary">
            Email <span className="text-destructive">*</span>
          </label>
          <input
            id="p-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1 w-full rounded-lg border border-input bg-white px-3 py-2.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="p-quantity"
            className="text-sm font-medium text-primary"
          >
            Quantity
          </label>
          <input
            id="p-quantity"
            name="quantity"
            type="text"
            className="mt-1 w-full rounded-lg border border-input bg-white px-3 py-2.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            placeholder="e.g. 10,000 sheets"
          />
        </div>

        <div>
          <label
            htmlFor="p-message"
            className="text-sm font-medium text-primary"
          >
            Message <span className="text-destructive">*</span>
          </label>
          <textarea
            id="p-message"
            name="message"
            rows={4}
            required
            className="mt-1 min-h-[120px] w-full resize-y rounded-lg border border-input bg-white px-3 py-2.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            placeholder="Tell us your timeline, security requirements, delivery location, etc."
          />
        </div>
      </div>

      <div className="mt-6">
        <Button type="submit" variant="accent" size="lg" className="w-full">
          {sent ? "Opening your email…" : "Send Enquiry"}
        </Button>
      </div>
    </form>
  );
}

