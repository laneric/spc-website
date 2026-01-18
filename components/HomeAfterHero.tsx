"use client";
import Link from "next/link";
import Image from "next/image";
import { ImageCarousel } from "@/components/ImageCarousel";

const LOGO_DEV_PUBLIC_KEY = 'pk_CVnF_-TmQ9y4_mmec2mHMw';

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

// Helper function to get logo URL for a company
function getCompanyLogoUrl(companyName: string): string {
  const domainMap: Record<string, string> = {
    "Oracle": "oracle.com",
    "Zocdoc": "zocdoc.com",
    "ZocDoc": "zocdoc.com",
    "Adobe": "adobe.com",
    "Dropbox": "dropbox.com",
  };
  
  const domain = domainMap[companyName];
  if (domain) {
    return `https://img.logo.dev/${domain}?token=${LOGO_DEV_PUBLIC_KEY}`;
  }
  
  // Fallback to local file path
  return `/logos/companies/${companyName.toLowerCase().replace(/\s+/g, "-")}.png`;
}

export function HomeAfterHero() {
  return (
    <>
      {/* For Students Section - Split Layout */}
      <section className="container-inline section-y">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <div className="font-helvetica text-xs sm:text-sm tracking-wider text-[#003262] mb-4">
              For Students
            </div>
            <h2 className="font-helvetica text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tighter-title mb-6">
              From Learning<br />to Launching
            </h2>
            <p className="font-helvetica text-zinc-700 text-lg leading-relaxed mb-6">
              At SPC, we take pride in our firm commitment to product management education. We offer the Junior Consultant Track and Consultant Track for our members who come with various levels of experience.
            </p>
            <Link href="/join-us" className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm bg-[#003262] text-white hover:bg-[#002244] transition-colors">
              Learn More
            </Link>
          </div>
          <div className="relative aspect-video md:aspect-square overflow-hidden rounded-lg">
            <ImageCarousel images={studentsImages} alt="SPC Students" />
          </div>
        </div>
      </section>

      {/* For Companies Section - Split Layout (Reversed) */}
      <section className="container-inline section-y bg-[#F0F4F8]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative aspect-video md:aspect-square overflow-hidden rounded-lg order-2 md:order-1">
            <ImageCarousel images={companiesImages} alt="SPC Companies" />
          </div>
          <div className="order-1 md:order-2">
            <div className="font-helvetica text-xs sm:text-sm tracking-wider text-[#003262] mb-4">
              For Companies
            </div>
            <h2 className="font-helvetica text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tighter-title mb-6">
              Partner with<br />Berkeley's Top Product Talent
            </h2>
            <p className="font-helvetica text-zinc-700 text-lg leading-relaxed mb-6">
              Partner with SPC for client projects, sponsorship opportunities, or recruitment events. Access high-achieving UC Berkeley consultants with our 100% satisfaction guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-4">
              <a 
                href="/sponsorship.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm bg-[#003262] text-white hover:bg-[#002244] transition-colors"
              >
                Download Sponsorship Package
              </a>
            </div>
            <div className="font-helvetica text-sm text-zinc-700">
              <strong>Contact us:</strong>{" "}
              <a href="mailto:ispma.berkeley@gmail.com" className="text-[#003262] hover:underline">
                ispma.berkeley@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="container-inline section-y">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-helvetica text-4xl sm:text-6xl mb-6 tracking-tighter-title text-center">
            Our Impact
          </h2>
          <p className="font-helvetica text-zinc-700 text-lg leading-relaxed max-w-3xl mx-auto text-center mb-12">
            With mentorship from industry leaders and a track record of success, SPC empowers students to thrive in product management and launch careers at top companies like Amazon, Uber, and IBM.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-[#F0F4F8] rounded-lg p-8 text-center">
              <div className="font-helvetica text-5xl sm:text-6xl mb-3 text-[#003262]">1st</div>
              <div className="font-helvetica text-sm sm:text-base text-zinc-700">University Chapter Worldwide</div>
            </div>
            <div className="bg-[#F0F4F8] rounded-lg p-8 text-center">
              <div className="font-helvetica text-5xl sm:text-6xl mb-3 text-[#003262]">30+</div>
              <div className="font-helvetica text-sm sm:text-base text-zinc-700">Active Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio teaser */}
      <section className="container-inline section-y mb-30">
        <div className="max-w-6xl mx-auto grid gap-6 md:gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-6 md:gap-0">
            <div className="flex flex-col items-start justify-start gap-4">
              <h3 className="font-helvetica text-4xl sm:text-5xl tracking-tighter-title">Our Portfolio</h3>
              <Link href="/about" className="inline-flex rounded-full items-center gap-2 px-4 py-2 text-sm bg-[#003262] text-white hover:bg-[#002244] transition-colors">See work →</Link>
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
              "Oracle",
              "Zocdoc",
              "Adobe",
              "Dropbox",
            ].map((label) => (
              <div key={label} className="h-32 flex items-center justify-center p-4">
                <Image
                  src={getCompanyLogoUrl(label)}
                  alt={label}
                  width={160}
                  height={60}
                  className="object-contain max-h-20 w-full"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}


