"use client";
import Balancer from "react-wrap-balancer";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative">
      <div className="relative container-inline pt-24 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Club-wide professional photo */}
          <div className="mb-12 w-full aspect-video relative overflow-hidden rounded-lg">
            <Image
              src="/photos/FULL_CLUB_PHOTO.JPG"
              alt="SPC Club Photo"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Main content */}
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-helvetica text-[40px] sm:text-6xl md:text-7xl leading-[1.05] tracking-tighter-title">
              <Balancer>Software Product @ Cal</Balancer>
            </h1>
            <div className="font-helvetica text-[#003262] mt-4 text-lg sm:text-xl">
              Berkeley Chapter of ISPMA
            </div>
            <p className="font-helvetica text-zinc-700 mt-6 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              <Balancer>SPC (Software Product @Cal) is the first student chapter of the International Software Product Management Association (ISPMA), dedicated to fostering a community passionate about product management and technology. We offer a dynamic Product Management Curriculum, hands-on Client Projects with sponsor companies, and access to the prestigious North American Software Product Management Summit.</Balancer>
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <Link href="/about" className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm bg-[#003262] text-white hover:bg-[#002244] transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


