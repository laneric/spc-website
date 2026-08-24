"use client";

import { JoinUsSubnav } from "@/components/JoinUsSubnav";
import { useEffect, useState } from "react";
import { FiChevronDown, FiExternalLink } from "react-icons/fi";

// Dark navy/gold recruitment theme, scoped to this page only 2026-08-22.
// Rest of the site (Home, About, etc.) stays on the light Berkeley-blue
// theme until a site-wide decision is made.
const timelineCardClass =
  "border border-[#dba951]/20 rounded-xl p-4 bg-white/[0.04] backdrop-blur-sm hover:border-[#dba951]/50 transition-colors";

export default function BetaJoinUs() {
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    const applicationOpenDate = new Date("2026-01-20T08:00:00Z");
    const now = new Date();
    setIsApplicationOpen(now >= applicationOpenDate);
  }, []);

  const handleApplyClick = () => {
    if (isApplicationOpen) {
      window.open("https://forms.gle/YdR2rV4D2e2yZ1j98", "_blank", "noopener,noreferrer");
    }
  };

  const applyButtonClass = isApplicationOpen
    ? "inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-semibold tracking-tight text-[#2c1a04] bg-gradient-to-r from-[#bf8d36] to-[#f5c971] shadow-lg shadow-[#bf8d36]/20 hover:shadow-xl hover:shadow-[#bf8d36]/30 hover:scale-105 cursor-pointer transition-all duration-200"
    : "inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-semibold tracking-tight bg-white/10 text-white/40 cursor-not-allowed";

  // NOTE: Member Tracks section (Junior Consultant / Consultant accordion)
  // was removed 2026-08-22 per strategy doc instruction.

  // FAQ + exec advice. Only one real quote exists so far (from the strategy
  // doc). TODO: ask exec for more advice quotes and real FAQ content —
  // placeholders below are marked and should not ship as-is.
  const faqItems = [
    {
      title: "Do I need prior product management experience to apply?",
      content: (
        <p className="text-base tracking-tight font-medium leading-relaxed">
          &ldquo;Don&apos;t worry about prior experience and focus on showcasing your collaborative and positive
          attitude.&rdquo; — Leinita Panda
        </p>
      ),
    },
    {
      // TODO: replace with a real question + exec answer
      title: "[TODO] Add another FAQ question here",
      content: <p className="text-base tracking-tight font-medium leading-relaxed text-white/40">Placeholder — needs exec input.</p>,
    },
  ];

  // TODO: swap these for real, club-approved PM interview prep resources.
  const interviewPrepLinks: Array<{ label: string; href: string }> = [
    { label: "[TODO] Add PM interview prep resource 1", href: "#" },
    { label: "[TODO] Add PM interview prep resource 2", href: "#" },
  ];

  // Updated 2026-08-22: this was still the old Spring-cycle timeline
  // (Jan 20 - Feb 2), which contradicted the "Fall 2026 recruitment" hero
  // copy taken from the flyer. Tabling/Info Session dates below are from
  // the flyer; later stages aren't on the flyer yet, so they're marked
  // TBD rather than guessed — swap in real dates once exec confirms them.
  type TimelineEvent = {
    date: string;
    title: string;
    subtitle?: string;
    start?: string; // ISO date, only set when the date is confirmed
    end?: string; // ISO date, defaults to start if omitted
  };

  const timelineEvents: TimelineEvent[] = [
    { date: "August 26 – 31", title: "SPC Tabling", subtitle: "Sproul Plaza", start: "2026-08-26", end: "2026-08-31" },
    { date: "August 30", title: "Information Session 1", subtitle: "Wheeler Hall", start: "2026-08-30", end: "2026-08-30" },
    { date: "September 2", title: "Information Session 2", subtitle: "Wheeler Hall", start: "2026-09-02", end: "2026-09-02" },
    { date: "TBD", title: "Applications Due" },
    { date: "TBD", title: "Technical Interview" },
    { date: "TBD", title: "Social Event" },
    { date: "TBD", title: "Behavioral Interview" },
  ];

  // "You are here" marker: inserted right before the first event that
  // hasn't ended yet (based on the visitor's local clock). Events with no
  // confirmed date are treated as not-yet-reached but can't anchor the
  // marker themselves, so it lands before the first confirmed-future
  // event, or at the end if every confirmed date has already passed.
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const getEventStatus = (ev: TimelineEvent): "past" | "current" | "upcoming" | "tbd" => {
    if (!ev.start) return "tbd";
    const start = new Date(ev.start);
    const end = new Date(ev.end ?? ev.start);
    if (today < start) return "upcoming";
    if (today > end) return "past";
    return "current";
  };

  const todayMarkerIndex = (() => {
    const idx = timelineEvents.findIndex((ev) => {
      const status = getEventStatus(ev);
      return status === "upcoming" || status === "current";
    });
    return idx === -1 ? timelineEvents.length : idx;
  })();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#05071c] via-[#130e27] to-[#2d1b69] text-white pt-24">
      <JoinUsSubnav />

      <div className="max-w-5xl mx-auto w-full px-4 sm:px-12 lg:px-16 pt-12 pb-16 relative">
        {/* Gold sparkle accents, decorative only */}
        <div className="pointer-events-none absolute top-8 right-8 w-1.5 h-1.5 rounded-full bg-[#f5c971]" aria-hidden="true" />
        <div className="pointer-events-none absolute top-20 right-24 w-1 h-1 rounded-full bg-[#dba951]" aria-hidden="true" />
        <div className="pointer-events-none absolute top-14 right-40 w-1 h-1 rounded-full bg-[#f5c971]" aria-hidden="true" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-4">
          <div>
            <p className="font-serif italic text-[#dba951] text-2xl sm:text-3xl mb-1">Software Product</p>
            <h1 className="text-4xl sm:text-5xl md:text-[64px] tracking-tight font-semibold text-white">
              Fall 2026 recruitment
            </h1>
            <p className="text-white/60 text-sm sm:text-base mt-2">
              UC Berkeley&apos;s most innovative tech product organization
            </p>
          </div>
          <button
            onClick={handleApplyClick}
            disabled={!isApplicationOpen}
            className={applyButtonClass}
            aria-label={isApplicationOpen ? "Apply to SPC" : "Applications open January 20, 2026"}
            title={isApplicationOpen ? "Apply to SPC" : "Applications open January 20, 2026"}
          >
            <span className="flex w-full items-center justify-between sm:justify-center">
              <span>Apply Now</span>
              <FiExternalLink className="w-5 h-5 sm:ml-2 ml-auto" aria-hidden="true" />
            </span>
          </button>
        </div>

        {/* Member Tracks section removed 2026-08-22 per strategy doc */}
        <div className="space-y-16 mt-12">
          <div className="space-y-10">
            <div id="timeline" className="scroll-mt-32">
              <h2 className="text-2xl font-medium text-[#f5c971] tracking-tight mb-8">Recruitment Timeline</h2>
              <div className="relative">
                <div
                  className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#dba951] to-[#5c3b2d]"
                  aria-hidden="true"
                />

                <div className="space-y-4">
                  {timelineEvents.map((ev, i) => {
                    const status = getEventStatus(ev);
                    const dotClass =
                      status === "past"
                        ? "bg-[#5c3b2d] border-2 border-[#130e27]"
                        : status === "current"
                        ? "bg-[#f5c971] border-2 border-[#130e27] ring-2 ring-[#f5c971]/40"
                        : "bg-[#dba951] border-2 border-[#130e27]";
                    const cardOpacity = status === "past" ? "opacity-50" : "";

                    return (
                      <div key={`${ev.date}-${ev.title}`}>
                        {i === todayMarkerIndex ? (
                          <div className="relative pl-12 flex items-center gap-3 py-1" aria-hidden="false">
                            <div className="absolute left-[0.6rem] w-3 h-3 rounded-full bg-[#f5c971] animate-pulse" />
                            <div className="text-xs font-semibold tracking-wide uppercase text-[#f5c971]">
                              You are here — {today.toLocaleDateString("en-US", { month: "long", day: "numeric" })}
                            </div>
                            <div className="flex-1 h-px bg-[#f5c971]/30" />
                          </div>
                        ) : null}
                        <div className={`relative pl-12 ${cardOpacity}`}>
                          <div className={`absolute left-[0.8rem] top-2 w-2 h-2 rounded-full shadow-sm ${dotClass}`} aria-hidden="true" />
                          <div className={timelineCardClass}>
                            <div className="text-lg sm:text-xl font-medium text-white mb-1">{ev.date}</div>
                            <div className="text-base text-white/70 font-medium">{ev.title}</div>
                            {ev.subtitle ? <div className="text-sm text-white/50 font-medium mt-1">{ev.subtitle}</div> : null}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  {todayMarkerIndex === timelineEvents.length ? (
                    <div className="relative pl-12 flex items-center gap-3 py-1">
                      <div className="absolute left-[0.6rem] w-3 h-3 rounded-full bg-[#f5c971] animate-pulse" />
                      <div className="text-xs font-semibold tracking-wide uppercase text-[#f5c971]">
                        You are here — {today.toLocaleDateString("en-US", { month: "long", day: "numeric" })}
                      </div>
                      <div className="flex-1 h-px bg-[#f5c971]/30" />
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            <div id="application-process" className="scroll-mt-32">
              <h2 className="text-2xl font-medium text-[#f5c971] tracking-tight mb-4">Application Process</h2>
              <p className="text-white/70 text-base font-medium leading-relaxed mb-6 max-w-3xl">
                Submit your application through the form below. Selected candidates will be invited to participate in
                technical and behavioral interviews as part of our recruitment process.
              </p>
              <button
                onClick={handleApplyClick}
                disabled={!isApplicationOpen}
                className={applyButtonClass}
                aria-label={isApplicationOpen ? "Apply to SPC" : "Applications open January 20, 2026"}
                title={isApplicationOpen ? "Apply to SPC" : "Applications open January 20, 2026"}
              >
                Apply Now
                <FiExternalLink className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* TODO — no booking link exists yet (same blocker as the Home
                page). Wire the real Calendly/Notion table in here once exec
                fills out the form. Called out in the subnav since it's
                recruitment season. */}
            <div id="coffee-chats" className="scroll-mt-32 rounded-2xl border border-[#dba951]/40 bg-gradient-to-br from-[#5c3b2d]/40 to-[#3f282c]/40 backdrop-blur-sm p-6 sm:p-8">
              <h2 className="text-2xl font-medium text-[#f5c971] tracking-tight mb-2">Coffee Chats</h2>
              <p className="text-white/70 text-base font-medium leading-relaxed">
                Table and booking link coming soon — check back closer to Informal Coffee Chats on January 20.
              </p>
            </div>

            <div id="faq" className="scroll-mt-32">
              <h2 className="text-2xl font-medium text-[#f5c971] tracking-tight mb-4">FAQ &amp; Advice from Exec</h2>
              {/* Custom themed accordion (2026-08-22), replacing the shared
                  Accordion component — that one only ships a light-on-white
                  style, which read as a separate block dropped onto the dark
                  page. Built inline here rather than adding a dark variant
                  to the shared component, since it's only used on this page. */}
              <div className="space-y-3">
                {faqItems.map((item, i) => {
                  const isOpen = openFaqIndex === i;
                  return (
                    <div
                      key={item.title}
                      className="rounded-xl border border-[#dba951]/20 bg-white/[0.04] backdrop-blur-sm overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="w-full flex items-center justify-between gap-4 text-left px-5 py-4"
                      >
                        <span className="text-base sm:text-lg font-medium text-white tracking-tight">{item.title}</span>
                        <FiChevronDown
                          className={`w-5 h-5 shrink-0 text-[#dba951] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                          aria-hidden="true"
                        />
                      </button>
                      {isOpen ? (
                        <div className="px-5 pb-5 text-white/70">{item.content}</div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* TODO: replace placeholder links with real, club-approved PM
                interview prep resources. */}
            <div id="interview-prep" className="scroll-mt-32">
              <h2 className="text-2xl font-medium text-[#f5c971] tracking-tight mb-4">PM Interview Prep Resources</h2>
              <ul className="space-y-2">
                {interviewPrepLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-flex items-center gap-2 text-[#f5c971] font-medium hover:underline"
                    >
                      {link.label}
                      <FiExternalLink className="w-4 h-4" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}