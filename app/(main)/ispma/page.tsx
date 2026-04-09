import Image from "next/image";

export default function IspmaPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF9] text-zinc-900 pt-24">
      <div className="max-w-5xl mx-auto w-full px-16 py-16">
        <h1 className="text-4xl sm:text-5xl md:text-[72px] tracking-tight font-medium text-black mb-6">ISPMA</h1>
        <p className="text-zinc-600 text-lg tracking-tight font-medium leading-relaxed max-w-3xl">
          SPC is UC Berkeley&apos;s student chapter of the International Software Product Management Association (ISPMA).
        </p>
        <section className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-xl overflow-hidden bg-white border border-zinc-200/80">
            <div className="relative aspect-[16/10]">
              <Image src="/photos/spc-old-photos/summit2024.jpg" alt="SPC at summit" fill className="object-cover" />
            </div>
          </div>
          <div className="rounded-xl overflow-hidden bg-white border border-zinc-200/80">
            <div className="relative aspect-[16/10]">
              <Image src="/photos/spc-old-photos/india2024.jpg" alt="SPC in India" fill className="object-cover" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
