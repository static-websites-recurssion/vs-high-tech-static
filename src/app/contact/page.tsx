export default function ContactPage() {
  return (
    <div className="bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <header className="mb-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-300">
            CONTACT
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-slate-50 sm:text-3xl">
            Share your security print or card brief.
          </h1>
          <p className="mt-3 max-w-2xl text-xs leading-relaxed text-slate-300 sm:text-[0.85rem]">
            Tell us what you are trying to secure — cheques, tax stamps, certificates, cards or
            tickets — and we will respond with a technical perspective and a plant walkthrough
            slot.
          </p>
        </header>
        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div className="space-y-3 text-xs text-slate-300 sm:text-[0.85rem]">
            <p className="font-semibold text-slate-100">
              VS Hi‑Tech Security Printing (placeholder)
            </p>
            <p className="text-slate-400">
              Replace this panel with your actual registered address, legal entity name and GST
              details once you deploy.
            </p>
            <p>
              <span className="text-slate-500">Email:</span> info@vshitech.example
            </p>
            <p>
              <span className="text-slate-500">Phone:</span> +91‑XXXXXXXXXX
            </p>
          </div>
          <form className="space-y-4 rounded-3xl border border-white/10 bg-black/80 p-5 text-xs backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-1 text-[11px] font-medium text-slate-300">
                Name
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-white/10 bg-black/60 px-3 py-2 text-xs text-slate-100 outline-none placeholder:text-slate-500 focus:border-emerald-400"
                />
              </label>
              <label className="space-y-1 text-[11px] font-medium text-slate-300">
                Organisation
                <input
                  type="text"
                  placeholder="Bank, ministry, enterprise…"
                  className="w-full rounded-xl border border-white/10 bg-black/60 px-3 py-2 text-xs text-slate-100 outline-none placeholder:text-slate-500 focus:border-emerald-400"
                />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-1 text-[11px] font-medium text-slate-300">
                Work email
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-white/10 bg-black/60 px-3 py-2 text-xs text-slate-100 outline-none placeholder:text-slate-500 focus:border-emerald-400"
                />
              </label>
              <label className="space-y-1 text-[11px] font-medium text-slate-300">
                Phone (optional)
                <input
                  type="tel"
                  placeholder="+91…"
                  className="w-full rounded-xl border border-white/10 bg-black/60 px-3 py-2 text-xs text-slate-100 outline-none placeholder:text-slate-500 focus:border-emerald-400"
                />
              </label>
            </div>
            <label className="space-y-1 text-[11px] font-medium text-slate-300">
              What do you want to secure?
              <textarea
                rows={4}
                placeholder="Cheques, tax stamps, certificates, cards, tickets…"
                className="w-full rounded-xl border border-white/10 bg-black/60 px-3 py-2 text-xs text-slate-100 outline-none placeholder:text-slate-500 focus:border-emerald-400"
              />
            </label>
            <div className="flex items-center justify-between gap-4 pt-1 text-[10px] text-slate-500">
              <p>This static form can be wired to email, CRM or ticketing in your deployment.</p>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-4 py-1.5 text-[11px] font-semibold text-slate-900 shadow-[0_10px_25px_rgba(16,185,129,0.6)] hover:bg-emerald-300"
              >
                Send enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

