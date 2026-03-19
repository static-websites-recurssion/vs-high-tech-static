export default function Home() {
  return (
    <div className="flex min-h-screen flex-col text-sm sm:text-base">
      {/* Hero */}
        <section
          className="relative overflow-hidden border-b border-white/10 bg-black"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,#22c55e33,transparent_55%),radial-gradient(circle_at_100%_100%,#0ea5e933,transparent_55%)]" />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-center">
            {/* Left: punchy copy */}
            <div className="flex-1 space-y-7">
              <p className="inline-flex rounded-full border border-emerald-500/40 bg-black/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-300 shadow-[0_0_18px_rgba(16,185,129,0.6)]">
                HIGH SECURITY PRINT · INDIA
              </p>
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-[2.75rem]">
                Premium{" "}
                <span className="bg-[conic-gradient(from_180deg_at_50%_50%,#4ade80,#22d3ee,#a5b4fc,#4ade80)] bg-clip-text text-transparent">
                  security printing
                </span>{" "}
                for cheques, cards & government documents.
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-[0.95rem]">
                VS Hi‑Tech blends high‑speed web offset, variable data and smart card technology to
                deliver documents that are beautiful, hard to copy and engineered for bank‑grade
                and government workflows.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-2.5 text-[13px] font-semibold text-slate-900 shadow-[0_18px_40px_rgba(16,185,129,0.6)] transition hover:bg-emerald-300"
                >
                  Book a capabilities call
                </a>
                <a
                  href="#capabilities"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-black/60 px-5 py-2 text-[13px] font-medium text-slate-100 hover:border-emerald-400/70 hover:text-emerald-200"
                >
                  View plant specs
                </a>
              </div>
              <div className="mt-4 grid max-w-xl grid-cols-3 gap-4 text-[11px] text-slate-300 sm:text-xs">
                <div className="rounded-2xl border border-white/15 bg-black/60 px-3 py-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                    Web offset
                  </p>
                  <p className="mt-1 text-[13px] font-semibold text-slate-50">
                    30,000 A4 pages/hr
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400">
                    8‑colour (4+4) with online numbering.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-black/60 px-3 py-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                    Variable data
                  </p>
                  <p className="mt-1 text-[13px] font-semibold text-slate-50">
                    140 ppm · 1200 dpi
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Konica Minolta 7120 / 6120 with auto‑inspection.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-black/60 px-3 py-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                    Finishing
                  </p>
                  <p className="mt-1 text-[13px] font-semibold text-slate-50">
                    Multi‑line binding
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Muller Martini/Appu perfect binding, 2‑knife trimming.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: visual glass panel */}
            <div className="flex-1">
              <div className="relative mx-auto max-w-md rounded-[2rem] border border-emerald-400/40 bg-gradient-to-br from-emerald-500/20 via-slate-900/90 to-black/95 p-[1px] shadow-[0_0_80px_rgba(16,185,129,0.7)]">
                <div className="rounded-[1.9rem] bg-black/80 p-5 backdrop-blur-xl">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-emerald-300">
                        CORE PROGRAMMES
                      </p>
                      <p className="mt-1 text-sm font-medium text-slate-50">
                        Designed to be almost impossible to duplicate.
                      </p>
                    </div>
                    <div className="h-11 w-11 rounded-3xl bg-emerald-400/20 ring-2 ring-emerald-400/70" />
                  </div>
                  <div className="mt-4 grid gap-3 text-[11px] text-slate-200">
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
                      <p className="text-[11px] font-semibold text-slate-50">
                        Government & revenue
                      </p>
                      <p className="mt-1 text-[11px] text-slate-300">
                        Tax stamps, licences, tickets, certificates and revenue labels with overt
                        and covert security features.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
                      <p className="text-[11px] font-semibold text-slate-50">
                        Banking & financial
                      </p>
                      <p className="mt-1 text-[11px] text-slate-300">
                        MICR cheques, credits, passbooks and statements integrated with clearing
                        and fraud‑prevention systems.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
                      <p className="text-[11px] font-semibold text-slate-50">
                        Smart cards & RFID
                      </p>
                      <p className="mt-1 text-[11px] text-slate-300">
                        Banking cards, biometric and RFID cards, toll and travel tags – inspired
                        by players like KL Hi‑Tech.
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-[10px] text-slate-400">
                    Visual style takes cues from security leaders such as DG press, Thomson Press,
                    Parseq, Orion and Koenig &amp; Bauer, with VS Hi‑Tech positioned as the
                    high‑tech Indian specialist.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Simple teaser sections linking to pages */}
      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top,#22c55e22,transparent_60%),radial-gradient(circle_at_bottom,#0ea5e922,transparent_60%)] bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
          <div className="grid gap-4 sm:grid-cols-3">
            <a
              href="/capabilities"
              className="group rounded-2xl border border-white/10 bg-black/70 p-4 text-xs text-slate-300 backdrop-blur hover:border-emerald-400/70"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-emerald-300">
                PLANT
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-50">Capabilities</p>
              <p className="mt-1 text-[11px] text-slate-400">
                Web offset, VDP, binding, CTCP and power redundancy — all from your technical PDF.
              </p>
            </a>
            <a
              href="/sectors"
              className="group rounded-2xl border border-white/10 bg-black/70 p-4 text-xs text-slate-300 backdrop-blur hover:border-emerald-400/70"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-emerald-300">
                MARKETS
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-50">Sectors</p>
              <p className="mt-1 text-[11px] text-slate-400">
                Government, banking, education, telecom &amp; transport — mapped like your
                competitors.
              </p>
            </a>
            <a
              href="/technology"
              className="group rounded-2xl border border-white/10 bg-black/70 p-4 text-xs text-slate-300 backdrop-blur hover:border-emerald-400/70"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-emerald-300">
                SECURITY
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-50">Technology</p>
              <p className="mt-1 text-[11px] text-slate-400">
                Overt/covert features and workflows inspired by global leaders like Koenig &amp;
                Bauer.
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
