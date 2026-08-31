import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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
        We&apos;re UC Berkeley&apos;s ISPMA student chapter. People here tell you what they actually think about your
        work, the bar stays reasonably high, and it&apos;s fine to get something wrong as long as you fix it.
      </>
    ),
    subPoints: [
      {
        heading: "How We Communicate",
        text: "We try to write clearly and make decisions people can actually follow. A deck should be as long as it needs to be, not longer.",
      },
      {
        heading: "Built For Students",
        text: "Mentors and leads are here because they want to help you get better at this. That mostly means real ownership over real work, with enough support that you're not on your own.",
      },
    ],
  },
  {
    label: "Our Community",
    title: "Work Hard, Play Hard",
    byline: "SPC · Community",
    imageSrc: "/photos/community/BIGLITTLE_REVEAL_1.png",
    imageAlt: "SPC community at a big-little reveal",
    body: (
      <>
        Retreats, socials, and smaller hangouts are a normal part of being in the club, not something we tack on.
        We post updates on{" "}
        <Link
          href="https://www.instagram.com/spc.berkeley/"
          className="text-[#f5c971] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </Link>
        , and longer recaps on{" "}
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
        text: "New members get paired with someone who's already been through it, so there's always someone to ask when you're not sure who else to go to.",
      },
      {
        heading: "The Rest Of College",
        text: "Formals, intramurals, random weeknight plans. Some of the friendships from this club end up outlasting any one project.",
      },
    ],
  },
  {
    label: "How We Work",
    title: "Client Interests at Heart",
    byline: "SPC · Client projects",
    imageSrc: "/photos/spc-old-photos/formal-group.jpg",
    imageAlt: "SPC formal group photo",
    body: (
      <>
        Most semesters, a small team works on real deliverables for a partner company. The workshops and curriculum
        are built around the same core skills: figuring out what problem you&apos;re actually solving, deciding what to
        build, and being able to explain the reasoning behind it.
      </>
    ),
    subPoints: [
      {
        heading: "Junior And Consultant Tracks",
        text: "New members get more support at first and take on more client-facing work as they're ready for it.",
      },
      {
        heading: "ISPMA",
        text: "We're a chapter of a larger organization, so there's a network beyond Berkeley if you want context from outside the club.",
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
        People end up in product, strategy, and engineering roles at a range of companies. Most of them have already
        had practice talking through messy, unclear problems with other people in the room, which tends to be the
        thing that carries over.
      </>
    ),
    subPoints: [
      {
        heading: "Concrete Stories",
        text: "Interviews usually come down to what you actually shipped, what surprised you along the way, and what you'd do differently next time.",
      },
      {
        heading: "People Who Stay In Touch",
        text: "Alumni and sponsors come back for coffee chats or recruiting. The summit trip is one of the things people still bring up years later.",
      },
    ],
  },
];

// Hidden 2026-08-25 per request — page returns 404. All original content
// preserved below in AboutPageContent; to bring it back, restore the nav
// link in components/BetaTopbar.tsx, restore the Footer/hero links to
// /about in components/BetaFooter.tsx and app/(beta)/page.tsx, and swap
// the default export below to `return <AboutPageContent />;`.
export default function BetaAboutPage() {
  notFound();
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- kept for easy restoration, see comment above
function AboutPageContent() {
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