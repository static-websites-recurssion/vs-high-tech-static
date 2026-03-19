export default function TechnologyPage() {
  return (
    <div className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <header className="mb-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-300">
            SECURITY TECHNOLOGY
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-slate-50 sm:text-3xl">
            Layered security, from artwork to fulfilment.
          </h1>
          <p className="mt-3 max-w-2xl text-xs leading-relaxed text-slate-300 sm:text-[0.85rem]">
            Conceptually aligned with global leaders like Koenig &amp; Bauer and Orion Security
            Print — but expressed in terms of VS Hi‑Tech’s processes and Indian market focus.
          </p>
        </header>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 text-xs text-slate-300">
          <section className="rounded-3xl border border-emerald-500/40 bg-black/80 p-5 backdrop-blur">
            <h2 className="text-sm font-semibold text-slate-50">Overt & covert features</h2>
            <ul className="mt-3 space-y-1.5">
              <li>• Fine‑line guilloches and complex backgrounds</li>
              <li>• Microtext and anti‑copy screen patterns</li>
              <li>• Numbering, barcodes and QR with secure sequences</li>
              <li>• UV‑reactive and special effect inks (where specified)</li>
            </ul>
          </section>
          <section className="rounded-3xl border border-white/10 bg-black/80 p-5 backdrop-blur">
            <h2 className="text-sm font-semibold text-slate-50">Data, VDP & workflows</h2>
            <ul className="mt-3 space-y-1.5">
              <li>• Structured variable data feeds from client systems</li>
              <li>• Controlled DTP → plate → press chain</li>
              <li>• Auto‑inspection on Konica Minolta VDP engines</li>
              <li>• Batch‑wise reconciliation and reporting</li>
            </ul>
          </section>
          <section className="rounded-3xl border border-white/10 bg-black/80 p-5 backdrop-blur">
            <h2 className="text-sm font-semibold text-slate-50">Plant & access control</h2>
            <ul className="mt-3 space-y-1.5">
              <li>• Zoned access to pre‑press, press and finishing</li>
              <li>• CCTV coverage on sensitive areas</li>
              <li>• Secured storage for plates and waste</li>
              <li>• Defined visitor and audit protocols</li>
            </ul>
          </section>
          <section className="rounded-3xl border border-white/10 bg-black/80 p-5 backdrop-blur">
            <h2 className="text-sm font-semibold text-slate-50">Quality & compliance</h2>
            <ul className="mt-3 space-y-1.5">
              <li>• Documented SOPs at each production step</li>
              <li>• Incoming substrate and ink checks</li>
              <li>• In‑process inspection and sign‑offs</li>
              <li>• Sampling and retention for investigations</li>
            </ul>
          </section>
          <section className="rounded-3xl border border-white/10 bg-black/80 p-5 backdrop-blur">
            <h2 className="text-sm font-semibold text-slate-50">Client collaboration</h2>
            <ul className="mt-3 space-y-1.5">
              <li>• Joint security design workshops</li>
              <li>• Pilot runs with full technical documentation</li>
              <li>• Support for regulatory and bank audits</li>
              <li>• Continuous improvement loops on mature jobs</li>
            </ul>
          </section>
          <section className="rounded-3xl border border-white/10 bg-black/80 p-5 backdrop-blur">
            <h2 className="text-sm font-semibold text-slate-50">Typical engagement model</h2>
            <ol className="mt-3 space-y-1.5 list-decimal pl-4">
              <li>Discovery – map risks, regulators and flows.</li>
              <li>Design – co‑create documents and security layers.</li>
              <li>Pilot – validate security, production and data.</li>
              <li>Scale – move to industrial volume with reviews.</li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}

