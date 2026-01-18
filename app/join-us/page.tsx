import { Accordion } from "@/components/Accordion";

export default function JoinUs() {
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
        <h1 className="font-helvetica text-4xl sm:text-6xl mb-10 tracking-tighter-title text-[#003262]">Join Us</h1>

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
                      <div className="text-lg sm:text-xl font-medium text-black mb-1">January 21</div>
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
                      <div className="text-lg sm:text-xl font-medium text-black mb-1">January 27/28</div>
                      <div className="text-base text-zinc-700 mb-1">Social Picnic Event</div>
                      <div className="text-sm text-zinc-600">
                        Alternative indoor venue available in case of inclement weather
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
                      <div className="text-base text-zinc-700">Application Review</div>
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
              <p className="font-helvetica text-zinc-700 text-lg leading-relaxed">
                Application details and requirements will be posted here. Stay tuned for updates on how to apply to SPC.
              </p>
            </div>

            <div className="bg-berkeley-blue-light p-8 mt-12 border-l-4 border-[#003262]">
              <p className="font-helvetica text-zinc-700 text-lg">
                Interested in joining SPC? We're always looking for passionate students who want to make an impact through product management. More information coming soon.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

