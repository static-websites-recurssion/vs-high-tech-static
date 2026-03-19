export default function SectorsPage() {
  return (
    <div className="border-b border-slate-800 bg-black">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <header className="mb-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-300">
            SECTORS
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-slate-50 sm:text-3xl">
            Where VS Hi‑Tech fits in the secure print ecosystem.
          </h1>
          <p className="mt-3 max-w-2xl text-xs leading-relaxed text-slate-300 sm:text-[0.85rem]">
            Structured similarly to competitors like DG press, Parseq, KL Hi‑Tech and Orion Print
            – but tailored to your Indian infrastructure and capabilities.
          </p>
        </header>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 text-xs text-slate-300">
          <section className="rounded-2xl border border-white/10 bg-slate-950/80 p-4">
            <h2 className="text-sm font-semibold text-slate-50">Government & public</h2>
            <p className="mt-2 text-[11px] text-slate-400">
              Secure, auditable documents for ministries, departments and state agencies.
            </p>
            <ul className="mt-3 space-y-1.5 text-[11px] text-slate-400">
              <li>• Tax stamps and revenue labels</li>
              <li>• Licences, permits, tickets & passes</li>
              <li>• Certificates and regulatory notices</li>
            </ul>
          </section>
          <section className="rounded-2xl border border-white/10 bg-slate-950/80 p-4">
            <h2 className="text-sm font-semibold text-slate-50">Banking & financial</h2>
            <p className="mt-2 text-[11px] text-slate-400">
              High‑volume transactional and identity artefacts for banks and NBFCs.
            </p>
            <ul className="mt-3 space-y-1.5 text-[11px] text-slate-400">
              <li>• MICR cheques & credits</li>
              <li>• Deposit books, passbooks & statements</li>
              <li>• Banking, prepaid and co‑branded cards</li>
            </ul>
          </section>
          <section className="rounded-2xl border border-white/10 bg-slate-950/80 p-4">
            <h2 className="text-sm font-semibold text-slate-50">Education & training</h2>
            <p className="mt-2 text-[11px] text-slate-400">
              Secure student‑facing documents that protect reputation and results.
            </p>
            <ul className="mt-3 space-y-1.5 text-[11px] text-slate-400">
              <li>• Mark sheets, transcripts and admit cards</li>
              <li>• Certificates with security features</li>
              <li>• ID cards and access media</li>
            </ul>
          </section>
          <section className="rounded-2xl border border-white/10 bg-slate-950/80 p-4">
            <h2 className="text-sm font-semibold text-slate-50">Telecom, transport & retail</h2>
            <p className="mt-2 text-[11px] text-slate-400">
              Inspired by KL Hi‑Tech and Orion Print, focused on high‑volume authentication media.
            </p>
            <ul className="mt-3 space-y-1.5 text-[11px] text-slate-400">
              <li>• SIM starter kits, PIN mailers & vouchers</li>
              <li>• Toll, transit and smart travel cards</li>
              <li>• Loyalty, promotion and gift cards</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

