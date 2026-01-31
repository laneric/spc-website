import Image from "next/image";
import Link from "next/link";

export default function IspmaPage() {
  return (
    <section className="container-inline pt-24 pb-20 max-w-6xl mx-auto">
      <div className="mb-10">
        <h1 className="font-helvetica text-4xl sm:text-6xl mb-4 tracking-tighter-title text-[#003262]">
          ISPMA
        </h1>
        <p className="font-helvetica text-zinc-700 text-lg leading-relaxed max-w-3xl">
          SPC is UC Berkeley&apos;s student chapter of the International Software Product Management Association (ISPMA) - our global parent organization. Our
          partnership connects students to an international network of product leaders, conferences, and rigorous product management learning.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <a
            href="https://ispma.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm bg-[#003262] text-white hover:bg-[#002244] transition-colors shadow-sm hover:shadow-md"
          >
            Visit ispma.org
          </a>
          <Link
            href="/join-us"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm bg-white text-[#003262] border border-[#003262]/20 hover:border-[#003262]/40 hover:bg-berkeley-blue-light transition-colors"
          >
            Join SPC
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-berkeley-blue-light rounded-lg overflow-hidden">
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
            <h2 className="font-helvetica text-2xl sm:text-3xl mb-4 tracking-tighter-title text-[#003262]">
              The SPC / ISPMA Summit
            </h2>
            <p className="font-helvetica text-zinc-700 text-lg leading-relaxed">
              Each year, our chapter participates in the North American Software Product Management Summit - an ISPMA-led gathering of product professionals,
              academics, and builders. It&apos;s where we sharpen product craft, learn from working leaders, and bring new ideas back to Berkeley.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-white/70 rounded-md p-4">
                <div className="font-helvetica text-sm font-medium text-[#003262]">Talks</div>
                <div className="font-helvetica text-sm text-zinc-700">Industry speakers</div>
              </div>
              <div className="bg-white/70 rounded-md p-4">
                <div className="font-helvetica text-sm font-medium text-[#003262]">Workshops</div>
                <div className="font-helvetica text-sm text-zinc-700">Practical skills</div>
              </div>
              <div className="bg-white/70 rounded-md p-4">
                <div className="font-helvetica text-sm font-medium text-[#003262]">Network</div>
                <div className="font-helvetica text-sm text-zinc-700">Peers + mentors</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-california-gold-light rounded-lg overflow-hidden">
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
            <h2 className="font-helvetica text-2xl sm:text-3xl mb-4 tracking-tighter-title text-[#003262]">
              Annual Trip to India
            </h2>
            <p className="font-helvetica text-zinc-700 text-lg leading-relaxed">
              Every year, SPC sponsors two members to travel to India and present at ISPMA&apos;s international conference. Delegates represent Berkeley on a global
              stage - sharing product insights, learning from international teams, and building lasting relationships across the ISPMA community.
            </p>
            <div className="mt-6 bg-white/70 rounded-md p-5">
              <div className="font-helvetica text-sm font-medium text-[#003262] mb-2">What delegates do</div>
              <ul className="font-helvetica text-sm text-zinc-700 leading-relaxed space-y-2">
                <li className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#003262] shrink-0" aria-hidden="true" />
                  Give a talk representing SPC at the international conference
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#003262] shrink-0" aria-hidden="true" />
                  Exchange ideas with product leaders across countries and industries
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#003262] shrink-0" aria-hidden="true" />
                  Bring back lessons to strengthen SPC&apos;s curriculum and community
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 bg-berkeley-blue-light rounded-lg p-8">
        <h2 className="font-helvetica text-2xl sm:text-3xl mb-4 tracking-tighter-title text-[#003262]">
          Why ISPMA matters to SPC
        </h2>
        <p className="font-helvetica text-zinc-700 text-lg leading-relaxed max-w-4xl">
          ISPMA is more than a name on our header. It&apos;s the backbone behind the conferences, standards, and global network that make SPC a chapter with real
          reach - and a community that thinks beyond campus.
        </p>
      </div>
    </section>
  );
}
