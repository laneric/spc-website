import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const NOTION_LEADERSHIP_EMBED_SRC =
  "https://ripple-increase-bbd.notion.site/ebd//33eddfe3637f80d59003dc612a0ac59e?v=33eddfe3637f808fa63c000c9a3bc9fb";

type SubPoint = { heading: string; text: string };
type TimelineItem = {
  label: string;
  title: string;
  byline: string;
  imageSrc: string;
  imageAlt: string;
  body: ReactNode;
  subPoints?: SubPoint[];
};

const timelineItems: TimelineItem[] = [
  {
    label: "Our Culture",
    title: "Honest feedback, reasonable standards",
    byline: "SPC · Berkeley",
    imageSrc: "/photos/spc-old-photos/retreat_fa24.jpg",
    imageAlt: "SPC members together at a retreat",
    body: <>We’re UC Berkeley’s ISPMA student chapter. People here say what they think about the work, keep the bar high without being cruel, and leave space to get things wrong and fix them.</>,
  },
  {
    label: "Our Community",
    title: "Not only the work",
    byline: "SPC · Community",
    imageSrc: "/photos/community/BIGLITTLE_REVEAL_1.png",
    imageAlt: "SPC community at a big-little reveal",
    body: <>Retreats, socials, and low-key hangs are a real part of the club.</>,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF9] text-zinc-900 pt-24">
      <div className="max-w-5xl mx-auto w-full px-6 sm:px-12 lg:px-16 py-16">
        <header className="text-center max-w-2xl mx-auto mb-20 md:mb-24">
          <h1 className="text-4xl sm:text-5xl md:text-[72px] tracking-tight font-medium text-black">About SPC</h1>
          <p className="text-zinc-500 text-[20px] font-medium tracking-tight leading-[28px] mt-4">
            Software Product @ Cal teaches product through Berkeley coursework and live client projects.
          </p>
        </header>
        <div className="space-y-20 md:space-y-24">
          {timelineItems.map((item) => (
            <article key={item.label} className="space-y-5">
              <h2 className="text-[40px] font-medium text-black tracking-tighter leading-none">{item.title}</h2>
              <p className="text-[17px] text-zinc-400 font-medium mt-1">{item.byline}</p>
              <div className="relative w-full aspect-16/10 rounded-3xl overflow-hidden bg-zinc-200">
                <Image src={item.imageSrc} alt={item.imageAlt} fill className="object-cover" sizes="(min-width: 1024px) 720px, 100vw" />
              </div>
              <p className="text-zinc-600 text-[20px] font-medium tracking-tight leading-relaxed">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
      <section id="leadership" className="max-w-6xl mx-auto w-full px-6 sm:px-12 lg:px-16 pb-20 md:pb-28 scroll-mt-28">
        <h2 className="text-2xl font-medium text-black tracking-tight mb-2">Leadership</h2>
        <p className="text-zinc-600 text-[20px] font-medium tracking-tight leading-relaxed max-w-3xl mb-8">
          Meet our executive board and learn how to book a coffee chat
        </p>
        <div className="w-full rounded-2xl overflow-hidden border border-zinc-200/80 bg-white shadow-sm min-h-[600px] md:min-h-[720px] h-[calc(100vh-12rem)] md:h-[720px]">
          <iframe
            title="SPC leadership on Notion"
            src={NOTION_LEADERSHIP_EMBED_SRC}
            width="100%"
            height="100%"
            className="border-0 block min-h-[600px] md:min-h-[720px] h-full w-full"
            allowFullScreen
          />
        </div>
        <div className="mt-6">
          <Link href="/deprecated/join-us" className="text-[#1573FF] hover:underline">Join SPC</Link>
        </div>
      </section>
    </div>
  );
}
