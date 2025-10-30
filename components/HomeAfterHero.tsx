import Link from "next/link";

export function HomeAfterHero() {
  return (
    <>
      {/* Bold Intro */}
      <section className="container-inline section-y">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="">
            <h2 className="font-instrument text-4xl sm:text-6xl leading-tight">Build products.<br />Grow leaders.</h2>
          </div>
          <div className="text-right">
            <p className="font-helvetica text-lg text-zinc-700 leading-relaxed">
              We are SPC — Software Product @ Cal. We nurture a rigorous, ambitious community of builders
              where students learn product thinking by shipping real software with real stakeholders.
            </p>
            <p className="font-helvetica text-zinc-600 mt-4">
              Education. Experience. Community.<br />Three pillars, one outcome: PMs who make an impact.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Grid 2x2 */}
      <section className="w-full my-30">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2">
          {/* Card 1 */}
          <div className="relative overflow-hidden p-6 sm:p-8 min-h-[260px] flex flex-col justify-between bg-[rgb(68,44,32)] text-white">
            <div className="font-helvetica text-sm tracking-tight opacity-80">Workshops Hosted</div>
            <div className="flex items-end justify-between">
              <div className="font-instrument text-5xl sm:text-6xl">40+</div>
              {/* simple concentric motif */}
              <div className="relative w-36 h-36">
                <div className="absolute inset-0 bg-[rgb(245,163,152)]" style={{ borderRadius: '50%' }} />
                <div className="absolute inset-4 bg-[rgb(5,72,114)]" style={{ borderRadius: '50%' }} />
                <div className="absolute inset-8 bg-[rgb(245,163,152)]" style={{ borderRadius: '50%' }} />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative overflow-hidden p-6 sm:p-8 min-h-[260px] flex flex-col justify-between bg-yellow-400">
            <div className="font-helvetica text-sm tracking-tight text-black/80">Client Projects</div>
            <div className="flex items-end justify-between">
              <div className="font-instrument text-5xl sm:text-6xl">20+</div>
              {/* geometric motif */}
              <div className="w-40 h-28 relative">
                <div className="absolute inset-0 m-auto w-40 h-28 bg-teal-700 clip-path-trapezoid" />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative overflow-hidden p-6 sm:p-8 min-h-[260px] flex flex-col justify-between bg-[rgb(203,190,160)]">
            <div className="font-helvetica text-sm tracking-tight text-black/70">Members</div>
            <div className="flex items-end justify-between">
              <div className="font-instrument text-5xl sm:text-6xl">60+</div>
              <div className="h-24 w-40 bg-linear-to-r from-orange-500 via-rose-400 to-blue-700 opacity-70" />
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative overflow-hidden p-6 sm:p-8 min-h-[260px] flex flex-col justify-between bg-orange-500 text-black">
            <div className="font-helvetica text-sm tracking-tight opacity-80">Diversity-led Initiatives</div>
            <div className="flex items-end justify-between">
              <div className="font-instrument text-5xl sm:text-6xl">30</div>
              {/* stacked semi-circles motif */}
              <div className="relative w-36 h-28">
                <div className="absolute bottom-0 left-0 right-0 mx-auto w-32 h-10 bg-violet-400" style={{ borderTopLeftRadius: '9999px', borderTopRightRadius: '9999px' }} />
                <div className="absolute bottom-9 left-0 right-0 mx-auto w-32 h-10 bg-violet-400" style={{ borderTopLeftRadius: '9999px', borderTopRightRadius: '9999px' }} />
                <div className="absolute bottom-18 left-0 right-0 mx-auto w-32 h-10 bg-violet-400" style={{ borderTopLeftRadius: '9999px', borderTopRightRadius: '9999px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio teaser */}
      <section className="container-inline section-y mb-30">
        <div className="max-w-6xl mx-auto grid gap-6 md:gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-6 md:gap-0">
            <div className="flex flex-col items-start justify-start gap-4">
              <h3 className="font-instrument text-4xl sm:text-5xl">Our Portfolio</h3>
              <Link href="/about" className="inline-flex rounded-full items-center gap-2 px-4 py-2 text-sm bg-zinc-900 text-white hover:bg-zinc-800 transition-colors">See work →</Link>
            </div>
            <div className="flex items-start md:items-center justify-start gap-4">
              <p className="font-helvetica text-zinc-700 max-w-md">
                We collaborate with startups and campus partners to build impactful products. From
                dev tools to fintech, our teams work end to end - discovery to delivery.
              </p>
            </div>
          </div>

          {/* Logo grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Buildkite",
              "Pin Payments",
              "AirTree",
              "Private Wealth Systems",
              "Cal Innovators",
              "Atlas Labs",
              "Nova Finance",
              "Berkeley RDI",
            ].map((label) => (
              <div key={label} className="bg-white h-28 flex items-center justify-center">
                <div className="text-zinc-800 font-helvetica text-sm opacity-80">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}


