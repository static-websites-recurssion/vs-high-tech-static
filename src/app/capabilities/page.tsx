export default function CapabilitiesPage() {
  return (
    <div className="border-b border-slate-800 bg-[radial-gradient(circle_at_top,#22c55e22,transparent_60%),radial-gradient(circle_at_bottom,#0ea5e922,transparent_60%)] bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <header className="mb-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-300">
            CAPABILITIES
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-slate-50 sm:text-3xl">
            The VS Hi‑Tech production stack.
          </h1>
          <p className="mt-3 max-w-2xl text-xs leading-relaxed text-slate-300 sm:text-[0.85rem]">
            Built exactly from the equipment and specs in your PDF: NAPH web offset, Konica
            Minolta VDP, multiple perfect binders, CTCP plate‑making and 160 KVA gensets, tuned
            for secure, repeatable output.
          </p>
        </header>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <section className="rounded-3xl border border-white/10 bg-black/80 p-5 text-xs text-slate-300 backdrop-blur">
            <h2 className="text-sm font-semibold text-slate-50">Web offset & UV printing</h2>
            <ul className="mt-3 space-y-1.5">
              <li>• NAPH Graphics web offset add‑on (8‑colour, 4+4)</li>
              <li>• 30,000 A4 pages/hour with online numbering</li>
              <li>• 32‑page A4 signatures (computer stationery)</li>
              <li>• UV ink drying – Print Concept Germany</li>
            </ul>
          </section>
          <section className="rounded-3xl border border-white/10 bg-black/80 p-5 text-xs text-slate-300 backdrop-blur">
            <h2 className="text-sm font-semibold text-slate-50">Variable data printing</h2>
            <ul className="mt-3 space-y-1.5">
              <li>• Variable date machines – Konica Minolta 7120 &amp; 6120</li>
              <li>• Up to 140 A4 pages/minute</li>
              <li>• 1,200×1,200 dpi resolution</li>
              <li>• Auto Inspection Technology & Tone Curve Utility</li>
              <li>• Duty cycle up to 2.5 million prints</li>
              <li>• Intelligent Media Sensor IM‑101</li>
            </ul>
          </section>
          <section className="rounded-3xl border border-white/10 bg-black/80 p-5 text-xs text-slate-300 backdrop-blur">
            <h2 className="text-sm font-semibold text-slate-50">Binding & finishing</h2>
            <ul className="mt-3 space-y-1.5">
              <li>• Multiple perfect binding machines</li>
              <li>• Five‑clamp &amp; four‑clamp lines (Muller Martini, Appu)</li>
              <li>• Automatic 2‑knife programmable trimmer (Japan)</li>
              <li>• Tuned for books, manuals and secure documents</li>
            </ul>
          </section>
          <section className="rounded-3xl border border-white/10 bg-black/80 p-5 text-xs text-slate-300 backdrop-blur">
            <h2 className="text-sm font-semibold text-slate-50">Pre‑press & plates</h2>
            <ul className="mt-3 space-y-1.5">
              <li>• DTP systems for secure artwork handling</li>
              <li>• CTCP plate‑making line</li>
              <li>• Calibrated for security screens and microtext</li>
              <li>• Controlled workflow from file to plate to press</li>
            </ul>
          </section>
          <section className="rounded-3xl border border-white/10 bg-black/80 p-5 text-xs text-slate-300 backdrop-blur">
            <h2 className="text-sm font-semibold text-slate-50">Power & reliability</h2>
            <ul className="mt-3 space-y-1.5">
              <li>• 160 KVA generator sets (2 units)</li>
              <li>• Engineered for long, stable security print runs</li>
              <li>• Protection against grid volatility</li>
            </ul>
          </section>
          <section className="rounded-3xl border border-white/10 bg-black/80 p-5 text-xs text-slate-300 backdrop-blur">
            <h2 className="text-sm font-semibold text-slate-50">Security‑first workflows</h2>
            <ul className="mt-3 space-y-1.5">
              <li>• Controlled access to pre‑press and pressroom</li>
              <li>• Structured approvals at each production stage</li>
              <li>• Batch‑wise sample retention</li>
              <li>• Documented SOPs aligned with secure printers globally</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

