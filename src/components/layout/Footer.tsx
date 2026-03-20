export function Footer() {
  return (
    <footer className="border-t border-[rgba(120,160,255,0.18)] bg-[rgba(3,6,17,0.40)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm font-semibold text-[rgba(234,240,255,0.86)]">
            VS Hitech
          </div>
          <div className="text-xs font-semibold text-[rgba(234,240,255,0.60)]">
            © {new Date().getFullYear()} VS Hitech. All rights reserved.
          </div>
        </div>
        <div className="text-xs font-semibold text-[rgba(234,240,255,0.55)]">
          Secure printing infrastructure for mission-critical operations.
        </div>
      </div>
    </footer>
  );
}

