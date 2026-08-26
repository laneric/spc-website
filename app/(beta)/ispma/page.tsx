import Image from "next/image";

export default function BetaIspmaPage() {
  return (
    <div className="min-h-screen text-white pt-24" style={{ backgroundColor: "#05071c" }}>
      <div className="max-w-5xl mx-auto w-full px-4 sm:px-12 lg:px-16 py-16">
        {/* Header */}
        <h1 className="text-4xl sm:text-5xl md:text-[72px] tracking-tight font-medium text-white mb-6">
          ISPMA
        </h1>
        <p className="text-white/70 text-lg tracking-tight font-medium leading-relaxed max-w-3xl">
          SPC is UC Berkeley&apos;s student chapter of the International Software
          Product Management Association (ISPMA)—our global parent organization.
          Our partnership connects students to an international network of
          product leaders, conferences, and rigorous product management learning.
        </p>

        {/* Summit + India — two-column cards with images */}
        <section className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Summit card */}
            <div className="rounded-xl overflow-hidden bg-white/[0.04] border border-[#dba951]/20">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/photos/spc-old-photos/summit2024.jpg"
                  alt="SPC at the North American Software Product Management Summit"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-medium text-white tracking-tight mb-4">
                  The SPC / ISPMA Summit
                </h2>
                <p className="text-white/70 text-base font-medium leading-relaxed">
                  Each year, our chapter participates in the North American
                  Software Product Management Summit—an ISPMA-led gathering of
                  product professionals, academics, and builders. It&apos;s
                  where we sharpen product craft, learn from working leaders,
                  and bring new ideas back to Berkeley.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="inline-flex px-3 py-1.5 rounded-full border border-[#dba951]/30 text-[#f5c971] text-sm font-medium">
                    Talks
                  </span>
                  <span className="inline-flex px-3 py-1.5 rounded-full border border-[#dba951]/30 text-[#f5c971] text-sm font-medium">
                    Workshops
                  </span>
                  <span className="inline-flex px-3 py-1.5 rounded-full border border-[#dba951]/30 text-[#f5c971] text-sm font-medium">
                    Network
                  </span>
                </div>
              </div>
            </div>

            {/* India card */}
            <div className="rounded-xl overflow-hidden bg-white/[0.04] border border-[#dba951]/20">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/photos/spc-old-photos/india2024.jpg"
                  alt="SPC members at the ISPMA international conference in India"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-medium text-white tracking-tight mb-4">
                  Annual Trip to India
                </h2>
                <p className="text-white/70 text-base font-medium leading-relaxed">
                  Every year, SPC sponsors two members to travel to India and
                  present at ISPMA&apos;s international conference. Delegates
                  represent Berkeley on a global stage—sharing product insights,
                  learning from international teams, and building lasting
                  relationships across the ISPMA community.
                </p>
                <div className="mt-6 space-y-2">
                  <p className="text-sm font-medium text-[#f5c971]">What delegates do</p>
                  <ul className="space-y-2">
                    {[
                      "Give a talk representing SPC at the international conference",
                      "Exchange ideas with product leaders across countries and industries",
                      "Bring back lessons to strengthen SPC&apos;s curriculum and community",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-white/70 text-sm font-medium"
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#dba951] shrink-0"
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA — punchy heading + understated button, ISPMA focused */}
        <section className="mt-20">
          <h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight mb-8 max-w-2xl">
            Explore the standards, certifications, and global network behind
            product management excellence.
          </h2>
          <a
            href="https://ispma.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-4 py-2 rounded-full bg-gradient-to-r from-[#bf8d36] to-[#f5c971] text-[#2c1a04] text-sm font-semibold hover:brightness-105 transition-all"
          >
            Visit ISPMA
          </a>
        </section>
      </div>
    </div>
  );
}