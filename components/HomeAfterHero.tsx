"use client";
import Link from "next/link";
import { ImageCarousel } from "@/components/ImageCarousel";

// NOTE: this component used to also render "Our Impact" stats and a
// "Portfolio" logo teaser. Both were removed (2026-08-22) because they
// duplicated/conflicted with the Impact and Recent Work sections that
// already live directly on app/(beta)/page.tsx with different numbers.
// This file now only owns the For Students / For Companies split sections.
//
// Re-themed 2026-08-22 to the dark navy/gold branding: section backgrounds
// use the two exact "Simple/Backgrounds" colors from the branding doc
// (#194070 dark blue, #2d1b69 dark violet) rather than the old light
// Berkeley-blue/gold tints.

const studentsImages = [
  '/photos/spc-old-photos/confetti.jpg',
  '/photos/spc-old-photos/spc-exec.jpg',
  '/photos/spc-old-photos/formal-group.jpg',
  '/photos/spc-old-photos/spc-group.jpg',
  '/photos/spc-old-photos/newbie.jpg'
];

const companiesImages = [
  '/photos/spc-old-photos/ibm.jpg',
  '/photos/spc-old-photos/microsoft.jpg',
  '/photos/spc-old-photos/netflix.jpg',
  '/photos/spc-old-photos/nvidia.jpg'
];

export function HomeAfterHero() {
  return (
    <>
      {/* For Students Section - Split Layout */}
      <section className="container-inline section-y" style={{ backgroundColor: "#194070" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <div className="font-helvetica text-xs sm:text-sm tracking-wider text-[#f5c971] mb-4 font-medium">
              For Students
            </div>
            <h2 className="font-helvetica text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tighter-title mb-6 text-white">
              From Learning<br />to Launching
            </h2>
            <p className="font-helvetica text-white/70 text-lg leading-relaxed mb-6">
              At SPC, we take pride in our firm commitment to product management education. We offer the Junior Consultant Track and Consultant Track for our members who come with various levels of experience.
            </p>
            <Link href="/join-us" className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold bg-gradient-to-r from-[#bf8d36] to-[#f5c971] text-[#2c1a04] hover:brightness-105 transition-all shadow-sm hover:shadow-md">
              Learn More
            </Link>
          </div>
          <div className="relative aspect-video md:aspect-square overflow-hidden rounded-lg">
            <ImageCarousel images={studentsImages} alt="SPC Students" />
          </div>
        </div>
      </section>

      {/* For Companies Section - Split Layout (Reversed) */}
      <section className="container-inline section-y" style={{ backgroundColor: "#2d1b69" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative aspect-video md:aspect-square overflow-hidden rounded-lg order-2 md:order-1">
            <ImageCarousel images={companiesImages} alt="SPC Companies" />
          </div>
          <div className="order-1 md:order-2">
            <div className="font-helvetica text-xs sm:text-sm tracking-wider text-[#f5c971] mb-4 font-medium">
              For Companies
            </div>
            <h2 className="font-helvetica text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tighter-title mb-6 text-white">
              Partner with<br />Berkeley's Top Product Talent
            </h2>
            <p className="font-helvetica text-white/70 text-lg leading-relaxed mb-6">
              Partner with SPC for client projects, sponsorship opportunities, or recruitment events. Access high-achieving UC Berkeley consultants with our 100% satisfaction guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-4">
              <a
                href={`mailto:ispma.berkeley@gmail.com`}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold bg-gradient-to-r from-[#bf8d36] to-[#f5c971] text-[#2c1a04] hover:brightness-105 transition-all shadow-sm hover:shadow-md"
              >
                Work with SPC
              </a>


            </div>
          </div>
        </div>
      </section>
    </>
  );
}