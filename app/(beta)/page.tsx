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
          src="/photos/spc-old-photos/formal-group.jpg"
          alt="SPC formal group photo"
          fill
          className="object-cover"
          style={{ objectPosition: "center calc(50% - 100px)" }}
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

        {/* Bottom bleed gradient */}
        <div
          className="absolute bottom-0 left-0 right-0 h-96 z-[1]"
          style={{
            background:
              "linear-gradient(to top, #130e27 0%, #130e27 20%, transparent 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white/90 text-lg font-medium tracking-tight mb-8 duration-200"
            style={{ boxShadow: "rgba(255, 255, 255, 0.2) 1px 1px 8px 0px inset" }}
          >
            View past projects
            <svg className="w-[1em] h-[1em] opacity-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 4 L16 12 L8 20"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-white leading-[1] tracking-tight mb-6">
            We build products <span className="block">we&apos;re proud of</span>
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
              A student club with unreasonable ambitions. We run live client projects,
              teach PM from first principles, and connect students with the world&apos;s
              top product minds.
            </p>
          </div>

          {/* Added 2026-08-22: "Learn more" + "Coffee chat us" alongside
              "Join us". Coffee chat us links to the Join Us page's Coffee
              Chats section since there's no standalone booking link yet. */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/join-us"
              className="inline-flex items-center px-6 py-2.5 rounded-full bg-white text-black text-lg font-medium tracking-tight hover:bg-neutral-300 hover:text-neutral-900 transition-all duration-200"
            >
              Join us
            </Link>
            <Link
              href="/join-us#coffee-chats"
              className="inline-flex items-center px-6 py-2.5 rounded-full bg-[#FDB515] text-black text-lg font-medium tracking-tight hover:bg-[#FDB515]/80 transition-all duration-200"
            >
              Coffee chat us
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-2.5 rounded-full border border-white/40 text-white text-lg font-medium tracking-tight hover:bg-white/10 transition-all duration-200"
            >
              Learn more
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

      <section className="relative bg-gradient-to-b from-[#130e27] to-[#2d1b69] pt-28 pb-72 px-4">
        <div className="relative z-10 max-w-4xl mx-auto text-left text-white">
          <p className="text-[20px] font-medium text-[#dba951] mb-4">Our Impact</p>
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tighter mb-4">
            Built by students. Felt by the industry.
          </h2>
          <p className="text-white/70 text-base sm:text-lg font-medium max-w-lg mb-16">
            No simulations, no fake case studies. Our students do real product work, with real companies, on real deadlines.
          </p>

          <div className="flex items-start gap-16">
            {[
              { number: "100+", label: "Students mentored" },
              { number: "6", label: "Client projects shipped" },
              { number: "1st", label: "ISPMA student chapter in North America" },
            ].map(({ number, label }) => (
              <div key={label} className="py-2">
                <p className="text-5xl sm:text-6xl font-bold tracking-tight mb-2 text-[#f5c971]">{number}</p>
                <p className="text-white/70 text-sm sm:text-base font-medium leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: "280px",
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(5,7,28,0.08) 25%, rgba(5,7,28,0.35) 50%, rgba(5,7,28,0.72) 75%, #05071c 100%)",
          }}
        />
      </section>

      <section className="bg-[#05071c] pb-24">
        <div className="text-center px-4 pt-4 pb-14">
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tighter text-white mb-3">
            Loved by our community
          </h2>
          <p className="text-white/60 text-base sm:text-[20px] font-medium tracking-tight mt-4 mx-auto">
            We work hard. We celebrate harder.
          </p>
        </div>

        <CommunityMarquee />
      </section>

      <section
        className="relative py-28 px-4 min-h-[56vh] bg-[#05071c] overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(219,169,81,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(219,169,81,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, #05071c 0%, rgba(5,7,28,0.3) 25%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, #05071c 0%, rgba(5,7,28,0.3) 25%, transparent 100%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-lg font-medium text-[#dba951] tracking-tight mb-2">Recent Work</p>
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tighter text-white mb-6">
            What we&apos;ve been working on
          </h2>
          <p className="text-white/60 text-[17px] sm:text-[20px] font-medium tracking-tight leading-[28px]">
            Real product work from our client projects—students shipping features
            with companies like Oracle, Adobe, and Dropbox.
          </p>
          <CompanyLogoStack />
        </div>
      </section>

      {/* TODO(coffee-chats): strategy doc wants a coffee chats section + table
          here, but the Calendly/Notion booking link doesn't exist yet.
          Build this once exec fills out the sign-up form and it's live. */}

      {/* Added 2026-08-22: Final CTA */}
      <section className="bg-[#2d1b69] py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-helvetica text-white text-4xl sm:text-5xl tracking-tighter-title mb-6">
            Think we&apos;d vibe?
          </h2>
          <p className="font-helvetica text-white/70 text-base sm:text-lg mb-10 max-w-xl mx-auto">
            Whether you&apos;re a student looking to build real product experience, or a
            company looking for a team that ships, let&apos;s talk.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/join-us"
              className="inline-flex items-center px-6 py-2.5 rounded-full bg-gradient-to-r from-[#bf8d36] to-[#f5c971] text-[#2c1a04] text-lg font-semibold tracking-tight hover:brightness-105 transition-all duration-200"
            >
              Apply Now
            </Link>
            <a
              href="mailto:ispma.berkeley@gmail.com"
              className="inline-flex items-center px-6 py-2.5 rounded-full border border-white/40 text-white text-lg font-medium tracking-tight hover:bg-white/10 transition-all duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}