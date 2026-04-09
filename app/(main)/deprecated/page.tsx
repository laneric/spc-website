import Image from "next/image";
import Link from "next/link";
import { CommunityMarquee } from "@/components/CommunityMarquee";
import { CompanyLogoStack } from "@/components/CompanyLogoStack";

export default function Home() {
  return (
    <>
      <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
        <Image
          src="/photos/spc-old-photos/formal-group.jpg"
          alt="SPC formal group photo"
          fill
          className="object-cover"
          style={{ objectPosition: "center calc(50% - 100px)" }}
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.75) 100%)",
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 z-[2]"
          style={{ height: "150px", background: "linear-gradient(to bottom, #12103e98 0%, transparent 100%)" }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-96 z-[1]"
          style={{ background: "linear-gradient(to top, #2171eaff 0%, #2171eaff 20%, transparent 100%)" }}
        />
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl">
          <Link
            href="/deprecated/services"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white/90 text-lg font-medium tracking-tight mb-8 duration-200"
            style={{ boxShadow: "rgba(255, 255, 255, 0.2) 1px 1px 8px 0px inset" }}
          >
            View past projects
          </Link>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-white leading-[1] tracking-tight mb-6">
            We build products <span className="block">we&apos;re proud of</span>
          </h1>
          <p className="text-white/70 text-base sm:text-lg font-medium leading-[28px] max-w-xl mb-10">
            A student club with unreasonable ambitions. We run live client projects, teach PM from first principles, and connect students with the world&apos;s top product minds.
          </p>
          <Link
            href="/deprecated/join-us"
            className="inline-flex items-center px-6 py-2.5 rounded-full bg-white text-black text-lg font-medium tracking-tight hover:bg-neutral-300 hover:text-neutral-900 transition-all duration-200"
          >
            Join us
          </Link>
        </div>
      </section>
      <section className="relative bg-[#2171eaff] pt-28 pb-72 px-6">
        <div className="relative z-10 max-w-4xl mx-auto text-left text-white">
          <p className="text-[20px] font-medium text-white/60 mb-4">Our Impact</p>
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tighter mb-4">Built by students. Felt by the industry.</h2>
          <p className="text-white/70 text-base sm:text-lg font-medium max-w-lg mb-16">
            No simulations, no fake case studies. Our students do real product work, with real companies, on real deadlines.
          </p>
        </div>
      </section>
      <section className="bg-[#F5F4F0] pb-24">
        <div className="text-center px-6 pt-4 pb-14">
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tighter text-zinc-900 mb-3">Loved by our community</h2>
          <p className="text-zinc-500 text-base sm:text-[20px] font-medium tracking-tight mt-4 mx-auto">We work hard. We celebrate harder.</p>
        </div>
        <CommunityMarquee />
      </section>
      <section className="relative py-28 px-6 min-h-[56vh] bg-[#FAFAF9] overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-lg font-medium text-zinc-400 tracking-tight mb-2">Recent Work</p>
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tighter text-zinc-900 mb-6">What we&apos;ve been working on</h2>
          <p className="text-zinc-500 text-[17px] sm:text-[20px] font-medium tracking-tight leading-[28px]">
            Real product work from our client projects-students shipping features with companies like Oracle, Adobe, and Dropbox.
          </p>
          <CompanyLogoStack />
        </div>
      </section>
    </>
  );
}
