import { isoCompactList, isoCountLabel } from "@/lib/iso-certifications";

export function AnnouncementBar() {
  return (
    <div className="relative z-[60] border-b border-white/10 bg-primary px-2 py-2 text-center text-[11px] leading-snug text-white sm:px-3 sm:text-xs sm:leading-normal">
      <p className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-1.5 gap-y-1 break-words sm:gap-x-2">
        <span aria-hidden>🔒</span>
        <span className="font-medium">
          {isoCountLabel} certified
        </span>
        <span className="hidden text-white/50 sm:inline" aria-hidden>
          |
        </span>
        <span className="hidden text-white/85 sm:inline">{isoCompactList}</span>
        <span className="text-white/50" aria-hidden>
          |
        </span>
        <span>Serving institutions since 1997</span>
        <span className="text-white/50" aria-hidden>
          |
        </span>
        <span className="inline-flex flex-wrap items-baseline justify-center gap-x-1">
          <span>Call:</span>
          <a
            href="tel:+919849068920"
            className="font-semibold text-accent underline-offset-2 hover:underline"
          >
            9849068920
          </a>
        </span>
      </p>
    </div>
  );
}
