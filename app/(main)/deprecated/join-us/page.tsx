"use client";

import { Accordion } from "@/components/Accordion";
import { useEffect, useState } from "react";
import { FiExternalLink } from "react-icons/fi";

export default function JoinUsPage() {
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
  useEffect(() => {
    setIsApplicationOpen(new Date() >= new Date("2026-01-20T08:00:00Z"));
  }, []);

  const handleApplyClick = () => {
    if (isApplicationOpen) window.open("https://forms.gle/YdR2rV4D2e2yZ1j98", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-zinc-900 pt-24">
      <div className="max-w-5xl mx-auto w-full px-16 py-16">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-[72px] tracking-tight font-medium text-black">Join us</h1>
          <button onClick={handleApplyClick} disabled={!isApplicationOpen} className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold tracking-tight bg-[#1573FF] text-white disabled:bg-zinc-300 disabled:text-zinc-500">
            Apply Now <FiExternalLink className="w-4 h-4" />
          </button>
        </div>
        <Accordion
          variant="beta"
          items={[
            { title: "Junior Consultant Track", content: <p className="text-[20px] tracking-tight font-medium">Join teams working with clients as a junior consultant.</p> },
            { title: "Consultant Track", content: <p className="text-[20px] tracking-tight font-medium">Work directly with clients as a consultant on project teams.</p> },
          ]}
        />
      </div>
    </div>
  );
}
