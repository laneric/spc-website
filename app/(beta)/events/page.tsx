// Added 2026-10-26: Events page, sits next to ISPMA and Services in the nav.
// To add a future event, copy the EVENT object into an array and map over it.
const EVENT = {
  title: "Product Sprint: Panel + Build Competition",
  date: "Monday, Oct 26",
  time: "5:30pm to 8:30pm PT",
  checkIn: "Check-in opens 5:15pm",
  location: "Jarvis Auditorium",
  rsvpUrl: "https://partiful.com/e/FTODoRP7ePLsz74DqmsM",
  blurb:
    "Hear what Product Managers actually do straight from PMs in the industry, then build your own product in one hour. No PM experience needed. Come solo or bring friends, we form teams on-site.",
  speakers: [
    "Aamna Khan, Product Manager @ Meta",
    "Aymen Naim @ Twilio",
    "Anthony Lam @ Remesh",
    "Arvind Muralimohan @ Realm Labs AI",
  ],
  agenda: [
    { title: "Speaker panel", detail: "PMs share their journeys and what product work looks like in their industries." },
    { title: "Product framework", detail: "A quick crash course on how to approach a product sprint." },
    { title: "Product sprint (1 hr)", detail: "Teams of 4 to 5 design a product from scratch." },
    { title: "Live pitches + judging", detail: "Judged on innovation and feasibility. The winning team earns a prize." },
    { title: "Networking + free pizza", detail: "Connect with speakers and judges." },
  ],
  takeaways: [
    "A clear picture of what Product Management is",
    "Real advice on breaking into the industry",
    "Hands-on experience taking a product from idea to pitch",
  ],
  partners: "In collaboration with SCET Fellows",
};

export default function BetaEvents() {
  return (
    <div className="min-h-screen text-white pt-24" style={{ backgroundColor: "#05071c" }}>
      <div className="max-w-5xl mx-auto w-full px-4 sm:px-12 lg:px-16 py-16">
        {/* Header */}
        <h1 className="text-4xl sm:text-5xl md:text-[72px] tracking-tight font-medium text-white mb-8">
          Events
        </h1>

        {/* Featured event */}
        <section
          className="border border-[#dba951]/30 p-6 sm:p-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(219,169,81,0.14) 0%, rgba(219,169,81,0.04) 55%, transparent 100%)",
          }}
        >
          {/* Changed 2026-10-28: event is over, label updated from "Upcoming" */}
          <p className="text-[#f5c971] text-lg font-medium tracking-tight mb-3">Completed</p>
          <h2 className="text-3xl sm:text-5xl tracking-tighter font-medium text-white mb-6">
            {EVENT.title}
          </h2>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-10 gap-y-2 text-white/80 text-base sm:text-lg font-medium mb-6">
            <p>{EVENT.date}</p>
            <p>{EVENT.time}</p>
            <p>{EVENT.location}</p>
          </div>

          <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
            {EVENT.blurb}
          </p>

          {/* Changed 2026-10-28: RSVP button replaced with a completed note.
              EVENT.rsvpUrl and EVENT.checkIn are kept above for reference. */}
          <p className="inline-flex items-center px-6 py-2.5 rounded-none border border-[#dba951]/40 text-[#f5c971] text-lg font-semibold tracking-tight">
            This event has ended
          </p>
        </section>

        {/* Agenda + Speakers */}
        <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h2 className="text-2xl font-medium text-white tracking-tight mb-4">What To Expect</h2>
            <div className="space-y-4">
              {EVENT.agenda.map((item) => (
                <div key={item.title}>
                  <p className="font-medium text-[#f5c971]">{item.title}</p>
                  <p className="text-white/70">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-medium text-white tracking-tight mb-4">Speakers</h2>
              <ul className="space-y-2 text-white/80">
                {EVENT.speakers.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-medium text-white tracking-tight mb-4">You&apos;ll Walk Away With</h2>
              <ul className="space-y-2 text-white/80">
                {EVENT.takeaways.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <p className="text-white/40 text-sm mt-16">{EVENT.partners}</p>
      </div>
    </div>
  );
}