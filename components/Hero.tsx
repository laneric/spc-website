"use client";
import Balancer from "react-wrap-balancer";

export function Hero() {
  return (
    <section className="relative">
      {/* Decorative header with floating placeholders */}
      <div className="relative container-inline mt-[20vh] pt-14 pb-16 sm:pb-20">
        <div className="relative max-w-4xl mx-auto text-center">
          {/* Mobile: Images row above title */}
          <div className="pointer-events-none flex items-center justify-center gap-3 mb-8 md:hidden">
            <div className="rounded-2xl ring-1 ring-zinc-200 bg-white overflow-hidden" style={{ rotate: "-8deg", width: 68, height: 68 }}>
              <img src="https://picsum.photos/seed/spc-a/300" alt="Decorative placeholder" className="h-full w-full object-cover" />
            </div>
            <div className="rounded-2xl ring-1 ring-zinc-200 bg-white overflow-hidden" style={{ rotate: "12deg", width: 60, height: 60 }}>
              <img src="https://picsum.photos/seed/spc-b/240" alt="Decorative placeholder" className="h-full w-full object-cover" />
            </div>
            <div className="rounded-2xl ring-1 ring-zinc-200 bg-white overflow-hidden" style={{ rotate: "18deg", width: 72, height: 72 }}>
              <img src="https://picsum.photos/seed/spc-c/320" alt="Decorative placeholder" className="h-full w-full object-cover" />
            </div>
            <div className="rounded-2xl ring-1 ring-zinc-200 bg-white overflow-hidden" style={{ rotate: "-14deg", width: 64, height: 64 }}>
              <img src="https://picsum.photos/seed/spc-d/256" alt="Decorative placeholder" className="h-full w-full object-cover" />
            </div>
          </div>

          <h1 className="font-instrument text-[40px] sm:text-6xl md:text-7xl leading-[1.05] tracking-tight">
            <Balancer>Empowering Product Leaders</Balancer>
          </h1>
          <p className="font-helvetica text-zinc-600 mt-6 text-lg sm:text-xl max-w-2xl mx-auto">
            <Balancer>UC Berkeley's first ISPMA chapter. Student‑run consulting delivering data‑driven solutions.</Balancer>
          </p>
          <div className="mt-8 flex items-center justify-center gap-2">
            <a className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm bg-zinc-900 text-white hover:bg-zinc-800 transition-colors" href="/students">Join Us</a>
            <a className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm ring-1 ring-zinc-200 text-zinc-900 hover:bg-zinc-50 transition-colors" href="/about">About</a>
          </div>

          {/* Desktop: Floating placeholder photos from Picsum */}
          <div className="pointer-events-none hidden md:block">
            <div className="rounded-2xl ring-1 ring-zinc-200 bg-white absolute overflow-hidden" style={{ left: -36, top: -34, rotate: "-8deg", width: 68, height: 68 }}>
              <img src="https://picsum.photos/seed/spc-a/300" alt="Decorative placeholder" className="h-full w-full object-cover" />
            </div>
            <div className="rounded-2xl ring-1 ring-zinc-200 bg-white absolute overflow-hidden" style={{ right: -34, top: -22, rotate: "12deg", width: 60, height: 60 }}>
              <img src="https://picsum.photos/seed/spc-b/240" alt="Decorative placeholder" className="h-full w-full object-cover" />
            </div>
            <div className="rounded-2xl ring-1 ring-zinc-200 bg-white absolute overflow-hidden" style={{ left: -72, bottom: -22, rotate: "18deg", width: 72, height: 72 }}>
              <img src="https://picsum.photos/seed/spc-c/320" alt="Decorative placeholder" className="h-full w-full object-cover" />
            </div>
            <div className="rounded-2xl ring-1 ring-zinc-200 bg-white absolute overflow-hidden" style={{ right: -58, bottom: -34, rotate: "-14deg", width: 64, height: 64 }}>
              <img src="https://picsum.photos/seed/spc-d/256" alt="Decorative placeholder" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


