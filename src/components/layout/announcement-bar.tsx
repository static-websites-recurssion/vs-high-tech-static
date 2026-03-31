import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="relative z-[60] border-b border-white/10 bg-primary px-3 py-2 text-center text-[11px] leading-snug text-white sm:text-xs sm:leading-normal">
      <p className="mx-auto max-w-5xl">
        <span aria-hidden>🔒</span>{" "}
        <span className="font-medium">Triple ISO Certified</span>
        <span className="mx-1.5 text-white/50 sm:mx-2">|</span>
        <span>Serving AP &amp; Telangana for 28+ Years</span>
        <span className="mx-1.5 text-white/50 sm:mx-2">|</span>
        <span>Call: </span>
        <Link
          href="tel:+919849068920"
          className="font-semibold text-accent underline-offset-2 hover:underline"
        >
          9849068920
        </Link>
      </p>
    </div>
  );
}
