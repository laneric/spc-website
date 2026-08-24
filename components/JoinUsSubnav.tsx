"use client";

// Updated 2026-08-22: switched from a full-width bar to a centered
// rounded pill, matching the main nav's pill shape. Sized halfway between
// the old full-bleed bar and the compact main nav pill (main nav: ~8-16px
// padding, py-6-8px, text-15px; old subnav: full-width, h-12/48px).
const links: Array<{ href: string; label: string }> = [
  { href: "#timeline", label: "Timeline" },
  { href: "#coffee-chats", label: "Coffee chats" },
  { href: "#faq", label: "FAQ" },
  { href: "#interview-prep", label: "Interview prep" },
];

export function JoinUsSubnav() {
  return (
    <div className="sticky top-20 z-40 flex justify-center px-4">
      <nav
        className="flex items-center gap-5 rounded-full border border-[#dba951]/25 px-6 py-2.5 shadow-lg shadow-black/30"
        style={{ backgroundColor: "#05071c" }}
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-sm font-medium whitespace-nowrap text-white/70 hover:text-white transition-colors"
          >
            {l.label}
          </a>
        ))}
        <a
          href="#application-process"
          className="shrink-0 inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-[#bf8d36] to-[#f5c971] text-[#2c1a04] text-sm font-semibold hover:brightness-105 transition-all"
        >
          Apply now
        </a>
      </nav>
    </div>
  );
}