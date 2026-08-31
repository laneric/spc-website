import Image from "next/image";
import Link from "next/link";
import { CommunityMarquee } from "@/components/CommunityMarquee";
import { CompanyLogoStack } from "@/components/CompanyLogoStack";
// Added 2026-08-22: wires in the previously-unused For Students / For
// Companies split sections (see components/HomeAfterHero.tsx).
import { HomeAfterHero } from "@/components/HomeAfterHero";

export default function BetaHome() {
  return (
    <>
      {/* Hero section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
        {/* Background photo */}
        <Image
          src="/photos/community/ClubProfPic2.jpg"
          alt="SPC formal group photo on the steps of a building"
          fill
          className="object-cover"
          style={{ objectPosition: "center 35%" }}
          priority
        />

        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.75) 100%)",
          }}
        />

        {/* Top vignette: #12103E → transparent */}
        <div
          className="absolute top-0 left-0 right-0 z-[2]"
          style={{
            height: "150px",
            background: "linear-gradient(to bottom, #12103e98 0%, transparent 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl text-white leading-[1] tracking-tight mb-6"
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
          >
            <span className="bg-gradient-to-r from-[#bf8d36] to-[#f5c971] bg-clip-text text-transparent">SOFTWARE</span><br />PRODUCT AT CAL
          </h1>

          <div className="relative mb-10">
            <div
              className="absolute inset-0 -z-10"
              style={{
                background: "radial-gradient(ellipse 85% 80% at 50% 50%, rgba(0, 0, 0, 0.84) 0%, transparent 100%)",
                filter: "blur(12px)",
                transform: "scaleY(1.2)",
              }}
            />
            <p className="text-white/70 text-base sm:text-lg font-medium leading-[28px] max-w-xl">
              UC Berkeley&apos;s Most Innovative Tech Product Organization
            </p>
          </div>

          {/* Added 2026-08-22: "Learn more" + "Coffee chat us" alongside
              "Join us". Coffee chat us links to the Join Us page's Coffee
              Chats section since there's no standalone booking link yet. */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/join-us"
              className="font-sans inline-flex items-center px-6 py-2.5 rounded-none bg-gradient-to-r from-[#8a8f98] to-[#e2e5e9] text-black text-lg font-medium tracking-tight hover:brightness-105 transition-all duration-200"
            >
              Join Us
            </Link>
            <Link
              href="/join-us#coffee-chats"
              className="font-sans inline-flex items-center px-6 py-2.5 rounded-none bg-gradient-to-r from-[#bf8d36] to-[#f5c971] text-[#2c1a04] text-lg font-medium tracking-tight hover:brightness-105 transition-all duration-200"
            >
              Coffee Chat Us
            </Link>
            <Link
              href="/ispma"
              className="font-sans inline-flex items-center px-6 py-2.5 rounded-none border border-white/40 text-white text-lg font-medium tracking-tight hover:bg-white/10 transition-all duration-200"
            >
              Learn More
            </Link>
          </div>

          <div className="mt-6 animate-bounce">
            <svg
              className="w-[1.8rem] h-[1.8rem] text-white/50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              aria-hidden="true"
            >
              <path
                d="M0 0 L10 6.5 L20 0"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="translate(2 8.5)"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Added 2026-08-22: For Students / For Companies split sections */}
      <HomeAfterHero />

      <section className="relative pt-20 pb-24 px-4" style={{ backgroundColor: "#F5F4F0" }}>
        <div className="relative z-10 max-w-4xl mx-auto text-left text-zinc-900">
          <p className="text-[20px] font-medium text-[#9d6b18] mb-4">Our Impact</p>
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tighter mb-4">
            Built By Students. Felt By The Industry.
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg font-medium max-w-lg mb-16">
             Our community provides PM mentorship to the broader student population through hosting semesterly summits, coordinating speaker events, and working with the best in our industry.
          </p>

          <div className="flex items-start gap-16">
            {[
              { number: "100+", label: "Students mentored" },
              { number: "2", label: "Summits per year" },
              { number: "4-5", label: "Projects per semester" },
            ].map(({ number, label }) => (
              <div key={label} className="py-2">
                <p className="text-5xl sm:text-6xl font-bold tracking-tight mb-2 text-[#bf8d36]">{number}</p>
                <p className="text-zinc-600 text-sm sm:text-base font-medium leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#05071c" }} className="pt-20 pb-24">
        <div className="text-center px-4 pt-4 pb-14">
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tighter text-white mb-3">
            Loved By Our Community
          </h2>
          <p className="text-white/60 text-base sm:text-[20px] font-medium tracking-tight mt-4 mx-auto">
            We work hard. We celebrate harder.
          </p>
        </div>

        <CommunityMarquee />
      </section>

      <section
        className="relative py-16 px-4"
        style={{
          backgroundColor: "#F5F4F0",
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      >
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-lg font-medium text-[#9d6b18] tracking-tight mb-2">Recent Work</p>
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tighter text-zinc-900 mb-6">
            What We&apos;ve Been Working On
          </h2>
          <p className="text-zinc-600 text-[17px] sm:text-[20px] font-medium tracking-tight leading-[28px]">
            We have worked with clients spanning across industries, including
            SpaceX, Adobe, and Dropbox.
          </p>
          <CompanyLogoStack />
        </div>
      </section>

      {/* TODO(coffee-chats): strategy doc wants a coffee chats section + table
          here, but the Calendly/Notion booking link doesn't exist yet.
          Build this once exec fills out the sign-up form and it's live. */}

      {/* Added 2026-08-22: Final CTA */}
      <section style={{ backgroundColor: "#05071c" }} className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white text-4xl sm:text-5xl tracking-tighter-title mb-6">
            Think We&apos;d Vibe?
          </h2>
          <p className="text-white/70 text-base sm:text-lg mb-10 max-w-xl mx-auto">
            Whether you&apos;re a student looking to build real product experience or a
            company looking for a efficient team of PMs, we would love to talk.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/join-us"
              className="inline-flex items-center px-6 py-2.5 rounded-none bg-gradient-to-r from-[#bf8d36] to-[#f5c971] text-[#2c1a04] text-lg font-semibold tracking-tight hover:brightness-105 transition-all duration-200"
            >
              Apply Now
            </Link>
            <a
              href="mailto:ispma.berkeley@gmail.com"
              className="inline-flex items-center px-6 py-2.5 rounded-none border border-white/40 text-white text-lg font-medium tracking-tight hover:bg-white/10 transition-all duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}