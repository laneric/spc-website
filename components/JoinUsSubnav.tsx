"use client";

// Updated 2026-08-31: plain, static, in-flow element. No position:fixed,
// no position:sticky, no scroll listener — it sits directly above the
// page title and scrolls away with the rest of the page like ordinary
// content. It does not track the viewport at all.
const links: Array<{ href: string; label: string }> = [
  { href: "#timeline", label: "Timeline" },
  { href: "#coffee-chats", label: "Coffee Chats" },
];

export function JoinUsSubnav() {
  return (
    <div className="flex justify-center px-4 pt-8">
      <nav
        className="flex items-center gap-5 rounded-none border border-[#dba951]/25 px-6 py-2.5 shadow-lg shadow-black/30"
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
          className="shrink-0 inline-flex items-center px-4 py-1.5 rounded-none bg-gradient-to-r from-[#bf8d36] to-[#f5c971] text-[#2c1a04] text-sm font-semibold hover:brightness-105 transition-all"
        >
          Apply Now
        </a>
      </nav>
    </div>
  );
}