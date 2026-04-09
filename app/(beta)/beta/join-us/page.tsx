"use client";

import { Accordion } from "@/components/Accordion";
import { useEffect, useState } from "react";
import { FiExternalLink } from "react-icons/fi";

const timelineCardClass =
  "border border-zinc-200/80 rounded-xl p-4 bg-white hover:border-[#1573FF]/40 transition-colors shadow-sm";

export default function BetaJoinUs() {
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);

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
    ? "inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold tracking-tight bg-[#1573FF] text-white hover:bg-[#1573FF]/90 cursor-pointer transition-colors"
    : "inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold tracking-tight bg-zinc-300 text-zinc-500 cursor-not-allowed";

  const trackItems = [
    {
      title: "Junior Consultant Track",
      content: (
        <>
          <p className="mb-3 text-[20px] tracking-tight font-medium">
            Join teams working with clients as a junior consultant. You&apos;ll build a strong foundation in product
            management through hands-on learning while contributing to real client projects.
          </p>
          <p className="text-[20px] tracking-tight font-medium">
            Ideal for those new to product management and eager to develop practical, career-ready skills through direct
            client engagement.
          </p>
        </>
      ),
    },
    {
      title: "Consultant Track",
      content: (
        <>
          <p className="mb-3 text-[20px] tracking-tight font-medium">
            Work directly with clients as a consultant on projects spanning UX design, business strategy, and product
            development.
          </p>
          <p className="text-[20px] tracking-tight font-medium">
            Perfect for those looking to apply product management skills in a professional, results-driven environment
            with direct client responsibility.
          </p>
        </>
      ),
    },
  ];

  const timelineEvents: Array<{ date: string; title: string; subtitle?: string }> = [
    { date: "January 20", title: "Informal Coffee Chats" },
    { date: "January 20", title: "Information Tabling" },
    { date: "January 26", title: "Information Session 1" },
    { date: "January 27", title: "Social Picnic Event", subtitle: "Come out to meet current members of SPC" },
    { date: "January 29", title: "Information Session 2" },
    { date: "January 30", title: "Applications Due" },
    { date: "January 31 & February 1", title: "Technical Interview" },
    { date: "February 1", title: "Social Event" },
    { date: "February 2", title: "Behavioral Interview" },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-zinc-900 pt-24">
      <div className="max-w-5xl mx-auto w-full px-16 py-16">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-[72px] tracking-tight font-medium text-black">Join us</h1>
          <button
            onClick={handleApplyClick}
            disabled={!isApplicationOpen}
            className={applyButtonClass}
            aria-label={isApplicationOpen ? "Apply to SPC" : "Applications open January 20, 2026"}
            title={isApplicationOpen ? "Apply to SPC" : "Applications open January 20, 2026"}
          >
            <span className="flex w-full items-center justify-between sm:justify-center">
              <span>Apply Now</span>
              <FiExternalLink className="w-4 h-4 sm:ml-2 ml-auto" aria-hidden="true" />
            </span>
          </button>
        </div>

        <div className="space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-medium text-black tracking-tight">Member Tracks</h2>
            </div>
            <div className="md:col-span-2">
              <Accordion items={trackItems} variant="beta" />
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-medium text-black tracking-tight mb-8">Recruitment Timeline</h2>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-zinc-200" aria-hidden="true" />

                <div className="space-y-4">
                  {timelineEvents.map((ev) => (
                    <div key={`${ev.date}-${ev.title}`} className="relative pl-12">
                      <div
                        className="absolute left-[0.8rem] top-2 w-2 h-2 rounded-full bg-[#1573FF] border-2 border-white shadow-sm"
                        aria-hidden="true"
                      />
                      <div className={timelineCardClass}>
                        <div className="text-lg sm:text-xl font-medium text-black mb-1">{ev.date}</div>
                        <div className="text-base text-zinc-600 font-medium">{ev.title}</div>
                        {ev.subtitle ? <div className="text-sm text-zinc-500 font-medium mt-1">{ev.subtitle}</div> : null}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-medium text-black tracking-tight mb-4">Application Process</h2>
              <p className="text-zinc-600 text-base font-medium leading-relaxed mb-6 max-w-3xl">
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
                <FiExternalLink className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
