import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

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
    title: "Honest Feedback, Reasonable Standards",
    byline: "SPC · Berkeley",
    imageSrc: "/photos/spc-old-photos/retreat_fa24.jpg",
    imageAlt: "SPC members together at a retreat",
    body: (
      <>
        We’re UC Berkeley’s ISPMA student chapter. People here say what they think about the work, keep the bar
        high without being cruel, and leave space to get things wrong and fix them.
      </>
    ),
    subPoints: [
      {
        heading: "Craft Without Theater",
        text: "We care about clear writing, clear decisions, and decks that earn their length. Nobody is here to perform being busy.",
      },
      {
        heading: "Actually For Students",
        text: "Mentors and leads are trying to help you level up. The point is useful reps and real ownership, not resume filler.",
      },
    ],
  },
  {
    label: "Our Community",
    title: "Not Only The Work",
    byline: "SPC · Community",
    imageSrc: "/photos/community/BIGLITTLE_REVEAL_1.png",
    imageAlt: "SPC community at a big-little reveal",
    body: (
      <>
        Retreats, socials, and low-key hangs are a real part of the club, not an afterthought. Photos and updates on{" "}
        <Link
          href="https://www.instagram.com/spc.berkeley/"
          className="text-[#f5c971] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </Link>
        ; longer stuff on{" "}
        <Link
          href="https://www.linkedin.com/company/uc-berkeley-spc/"
          className="text-[#f5c971] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
        .
      </>
    ),
    subPoints: [
      {
        heading: "Big-Little",
        text: "New members get paired with someone who’s been around a while, so you’re not guessing who to ask first.",
      },
      {
        heading: "The Rest Of College",
        text: "Formals, IMs, random weeknight hangs. Some of the friendships last longer than any single project.",
      },
    ],
  },
  {
    label: "How We Work",
    title: "Client Projects At The Center",
    byline: "SPC · Client projects",
    imageSrc: "/photos/spc-old-photos/formal-group.jpg",
    imageAlt: "SPC formal group photo",
    body: (
      <>
        Most semesters, small teams ship real work with a partner company. Workshops and curriculum chase the same habits:
        figure out what problem you’re solving, decide what to build, and be able to explain the tradeoffs out loud.
      </>
    ),
    subPoints: [
      {
        heading: "Junior And Consultant Tracks",
        text: "You start with more support and take on more client-facing responsibility as you’re ready. Nothing magical, just structure.",
      },
      {
        heading: "ISPMA",
        text: "We’re a chapter of a larger org. When you want context outside Berkeley, that network is there.",
      },
    ],
  },
  {
    label: "Where We Go",
    title: "After SPC",
    byline: "SPC · Alumni",
    imageSrc: "/photos/spc-old-photos/summit2024.jpg",
    imageAlt: "SPC at the North American Software Product Management Summit",
    body: (
      <>
        People head into product, strategy, and engineering at lots of different companies. The common thread is usually
        that they’ve already practiced talking through messy, ambiguous work with other people in the room.
      </>
    ),
    subPoints: [
      {
        heading: "Concrete Stories",
        text: "Interviews tend to be about what you shipped, what surprised you, and what you’d try differently next time.",
      },
      {
        heading: "People Who Stay In Touch",
        text: "Alumni and sponsors come back for coffee or recruiting. The summit trip is one of the things that still feels tangible years later.",
      },
    ],
  },
];

export default function BetaAboutPage() {
  return (
    <div className="min-h-screen text-white pt-24" style={{ backgroundColor: "#05071c" }}>
      <div className="max-w-5xl mx-auto w-full px-4 sm:px-12 lg:px-16 py-16">
        <header className="text-center max-w-2xl mx-auto mb-20 md:mb-24">
          <h1 className="text-4xl sm:text-5xl md:text-[72px] tracking-tight font-medium text-white">About SPC</h1>
          <p className="text-white/60 text-[20px] font-medium tracking-tight leading-[28px] mt-4">
            Software Product @ Cal teaches product through Berkeley coursework and live client projects. We’re a
            community of people who show up for the work and for each other.
          </p>
        </header>

        <div className="relative">
          <div
            className="pointer-events-none absolute left-[3.9px] top-10 bottom-10 hidden md:block w-px bg-[#dba951]/20"
            aria-hidden="true"
          />

          <div className="space-y-20 md:space-y-24">
            {timelineItems.map((item) => (
              <article key={item.label} className="flex flex-col md:flex-row gap-6 md:gap-10 md:items-start">
                <div className="relative z-[1] flex items-start gap-3 md:w-48 shrink-0">
                  <span
                    className="mt-[9px] size-[8.8px] shrink-0 rounded-full bg-[#dba951] ring-[5px]"
                    style={{ boxShadow: "0 0 0 5px #05071c" }}
                    aria-hidden="true"
                  />
                  <span className="text-[20px] font-medium tracking-tight text-white/50 leading-snug">
                    {item.label}
                  </span>
                </div>

                <div className="min-w-0 flex-1 space-y-5">
                  <div>
                    <h2 className="text-[40px] font-medium text-white tracking-tighter leading-none">{item.title}</h2>
                    <p className="text-[17px] text-white/40 font-medium mt-1">{item.byline}</p>
                  </div>

                  <div className="relative w-full aspect-16/10 rounded-3xl overflow-hidden bg-white/5">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 720px, 100vw"
                    />
                  </div>

                  <p className="text-white/70 text-[20px] font-medium tracking-tight leading-relaxed">{item.body}</p>

                  {item.subPoints?.map((sp) => (
                    <div key={sp.heading}>
                      <h3 className="text-[20px] font-semibold text-[#f5c971] tracking-tight">{sp.heading}</h3>
                      <p className="text-white/70 text-[20px] font-medium tracking-tight leading-relaxed mt-1">{sp.text}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}