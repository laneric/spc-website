// Added 2026-10-26: site-wide announcement bar for the Product Sprint event.
// Rendered in app/(beta)/layout.tsx. Remove it from the layout (or delete
// this file) once the event is over, or swap the text and link for the next one.
import Link from "next/link";

const ANNOUNCEMENT = {
  short: "Product Sprint TODAY 10/26",
  long: "Product Sprint: Panel + Build Competition TODAY 10/26, 5:30pm at Jarvis Auditorium",
  cta: "RSVP",
  // Changed 2026-10-26: links to the Events page instead of Partiful directly
  href: "/events",
};

export function AnnouncementBar() {
  return (
    <Link
      href={ANNOUNCEMENT.href}
      className="fixed top-0 left-0 right-0 z-[35] flex h-9 items-center justify-center gap-3 bg-gradient-to-r from-[#bf8d36] to-[#f5c971] px-4 text-[#2c1a04] text-sm font-semibold tracking-tight hover:brightness-105 transition-all duration-200"
    >
      <span className="sm:hidden">{ANNOUNCEMENT.short}</span>
      <span className="hidden sm:inline">{ANNOUNCEMENT.long}</span>
      <span className="underline underline-offset-2">{ANNOUNCEMENT.cta} &rarr;</span>
    </Link>
  );
}