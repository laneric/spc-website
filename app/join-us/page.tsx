"use client";

import { Accordion } from "@/components/Accordion";
import { useEffect, useState } from "react";
import { FiExternalLink } from "react-icons/fi";

export default function JoinUs() {
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);

  useEffect(() => {
    // Check if current time is >= Tuesday, January 20, 2026 12:00 AM PST
    // PST is UTC-8, so we create the date in PST timezone
    const applicationOpenDate = new Date("2026-01-20T08:00:00Z"); // 12:00 AM PST = 8:00 AM UTC
    const now = new Date();
    setIsApplicationOpen(now >= applicationOpenDate);
  }, []);

  const handleApplyClick = () => {
    if (isApplicationOpen) {
      window.open("https://forms.gle/YdR2rV4D2e2yZ1j98", "_blank", "noopener,noreferrer");
    }
  };

  const trackItems = [
    {
      title: "Junior Consultant Track",
      content: (
        <>
          <p className="mb-3">
            Join teams working with clients as a junior consultant. You'll build a strong foundation in product management through hands-on learning while contributing to real client projects.
          </p>
          <p>
            Ideal for those new to product management and eager to develop practical, career-ready skills through direct client engagement.
          </p>
        </>
      ),
    },
    {
      title: "Consultant Track",
      content: (
        <>
          <p className="mb-3">
            Work directly with clients as a consultant on projects spanning UX design, business strategy, and product development.
          </p>
          <p>
            Perfect for those looking to apply product management skills in a professional, results-driven environment with direct client responsibility.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <section className="container-inline pt-24 pb-20 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <h1 className="font-helvetica text-4xl sm:text-6xl tracking-tighter-title text-[#003262]">Join Us</h1>
          <button
            onClick={handleApplyClick}
            disabled={!isApplicationOpen}
            className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-helvetica font-medium transition-colors ${
              isApplicationOpen
                ? "bg-[#003262] text-white hover:bg-[#002244] cursor-pointer"
                : "bg-zinc-300 text-zinc-500 cursor-not-allowed"
            }`}
            aria-label={isApplicationOpen ? "Apply to SPC" : "Applications open January 20, 2026"}
            title={isApplicationOpen ? "Apply to SPC" : "Applications open January 20, 2026"}
          >
            {isApplicationOpen ? (
              <span className="flex w-full items-center justify-between sm:justify-center">
                <span>Apply Now</span>
                <FiExternalLink className="w-4 h-4 sm:ml-2 ml-auto" aria-hidden="true" />
              </span>
            ) : (
              <span className="flex w-full items-center justify-between sm:justify-center">
                <span>Apply Now</span>
                <FiExternalLink className="w-4 h-4 sm:ml-2 ml-auto" aria-hidden="true" />
              </span>
            )}
          </button>
        </div>

        <div className="space-y-12">
          {/* Member Tracks Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="md:col-span-1">
              <h2 className="font-helvetica text-2xl sm:text-3xl tracking-tighter-title text-[#003262]">Member Tracks</h2>
            </div>
            <div className="md:col-span-2">
              <Accordion items={trackItems} />
            </div>
          </div>

          {/* Recruitment Information - Full Width */}
          <div className="space-y-8">
            <div>
              <h2 className="font-helvetica text-2xl sm:text-3xl mb-6 tracking-tighter-title text-[#003262]">Recruitment Timeline</h2>
              <div className="relative font-helvetica">
                {/* Vertical timeline connector */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#E0E8F0]"></div>
                
                <div className="space-y-4">
                  <div className="relative pl-12">
                    <div className="absolute left-[0.8rem] top-2 w-2 h-2 rounded-full bg-[#003262] border-2 border-white"></div>
                    <div className="border border-[#E0E8F0] rounded-lg p-4 bg-white hover:border-[#003262] transition-colors">
                      <div className="text-lg sm:text-xl font-medium text-black mb-1">January 20</div>
                      <div className="text-base text-zinc-700">Informal Coffee Chats</div>
                    </div>
                  </div>
                  
                  <div className="relative pl-12">
                    <div className="absolute left-[0.8rem] top-2 w-2 h-2 rounded-full bg-[#003262] border-2 border-white"></div>
                    <div className="border border-[#E0E8F0] rounded-lg p-4 bg-white hover:border-[#003262] transition-colors">
                      <div className="text-lg sm:text-xl font-medium text-black mb-1">January 20</div>
                      <div className="text-base text-zinc-700">Information Tabling</div>
                    </div>
                  </div>
                  
                  <div className="relative pl-12">
                    <div className="absolute left-[0.8rem] top-2 w-2 h-2 rounded-full bg-[#003262] border-2 border-white"></div>
                    <div className="border border-[#E0E8F0] rounded-lg p-4 bg-white hover:border-[#003262] transition-colors">
                      <div className="text-lg sm:text-xl font-medium text-black mb-1">January 26</div>
                      <div className="text-base text-zinc-700">Information Session 1</div>
                    </div>
                  </div>
                  
                  <div className="relative pl-12">
                    <div className="absolute left-[0.8rem] top-2 w-2 h-2 rounded-full bg-[#003262] border-2 border-white"></div>
                    <div className="border border-[#E0E8F0] rounded-lg p-4 bg-white hover:border-[#003262] transition-colors">
                      <div className="text-lg sm:text-xl font-medium text-black mb-1">January 27</div>
                      <div className="text-base text-zinc-700 mb-1">Social Picnic Event</div>
                      <div className="text-sm text-zinc-600">
                        Come out to meet current members of SPC
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative pl-12">
                    <div className="absolute left-[0.8rem] top-2 w-2 h-2 rounded-full bg-[#003262] border-2 border-white"></div>
                    <div className="border border-[#E0E8F0] rounded-lg p-4 bg-white hover:border-[#003262] transition-colors">
                      <div className="text-lg sm:text-xl font-medium text-black mb-1">January 29</div>
                      <div className="text-base text-zinc-700">Information Session 2</div>
                    </div>
                  </div>
                  
                  <div className="relative pl-12">
                    <div className="absolute left-[0.8rem] top-2 w-2 h-2 rounded-full bg-[#003262] border-2 border-white"></div>
                    <div className="border border-[#E0E8F0] rounded-lg p-4 bg-white hover:border-[#003262] transition-colors">
                      <div className="text-lg sm:text-xl font-medium text-black mb-1">January 30</div>
                      <div className="text-base text-zinc-700">Applications Due</div>
                    </div>
                  </div>
                  
                  <div className="relative pl-12">
                    <div className="absolute left-[0.8rem] top-2 w-2 h-2 rounded-full bg-[#003262] border-2 border-white"></div>
                    <div className="border border-[#E0E8F0] rounded-lg p-4 bg-white hover:border-[#003262] transition-colors">
                      <div className="text-lg sm:text-xl font-medium text-black mb-1">January 31 & February 1</div>
                      <div className="text-base text-zinc-700">Technical Interview</div>
                    </div>
                  </div>
                  
                  <div className="relative pl-12">
                    <div className="absolute left-[0.8rem] top-2 w-2 h-2 rounded-full bg-[#003262] border-2 border-white"></div>
                    <div className="border border-[#E0E8F0] rounded-lg p-4 bg-white hover:border-[#003262] transition-colors">
                      <div className="text-lg sm:text-xl font-medium text-black mb-1">February 1</div>
                      <div className="text-base text-zinc-700">Social Event</div>
                    </div>
                  </div>
                  
                  <div className="relative pl-12">
                    <div className="absolute left-[0.8rem] top-2 w-2 h-2 rounded-full bg-[#003262] border-2 border-white"></div>
                    <div className="border border-[#E0E8F0] rounded-lg p-4 bg-white hover:border-[#003262] transition-colors">
                      <div className="text-lg sm:text-xl font-medium text-black mb-1">February 2</div>
                      <div className="text-base text-zinc-700">Behavioral Interview</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-helvetica text-2xl sm:text-3xl mb-4 tracking-tighter-title text-[#003262]">Application Process</h2>
              <p className="font-helvetica text-zinc-700 text-lg leading-relaxed mb-6">
                Submit your application through the form below. Selected candidates will be invited to participate in technical and behavioral interviews as part of our recruitment process.
              </p>
              <button
                onClick={handleApplyClick}
                disabled={!isApplicationOpen}
                className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-helvetica font-medium transition-colors ${
                  isApplicationOpen
                    ? "bg-[#003262] text-white hover:bg-[#002244] cursor-pointer"
                    : "bg-zinc-300 text-zinc-500 cursor-not-allowed"
                }`}
                aria-label={isApplicationOpen ? "Apply to SPC" : "Applications open January 20, 2026"}
                title={isApplicationOpen ? "Apply to SPC" : "Applications open January 20, 2026"}
              >
                {isApplicationOpen ? (
                  <>
                    Apply Now
                    <FiExternalLink className="w-4 h-4" aria-hidden="true" />
                  </>
                ) : (
                  <>
                    Apply Now
                    <FiExternalLink className="w-4 h-4" aria-hidden="true" />
                  </>
                )}
              </button>
            </div>

            <div className="bg-berkeley-blue-light p-8 mt-12 border-l-4 border-[#003262]">
              <p className="font-helvetica text-zinc-700 text-lg">
                {isApplicationOpen ? (
                  <>
                    Interested in joining SPC? Applications are now open. Click the Apply button above to submit your application and join our community of passionate product managers.
                  </>
                ) : (
                  <>
                    Interested in joining SPC? Applications open on January 20, 2026. We're looking for passionate students who want to make an impact through product management. Stay tuned for more information.
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

