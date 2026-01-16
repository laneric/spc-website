# AGENTS.md · Software Product @ Cal (SPC) Website

Bold. Modern. Minimal.

This document defines how to build and maintain the SPC marketing site using **Next.js 15**, **React**, and **Tailwind CSS**. It covers design principles, fonts, global tokens, component blueprints, and page structure including Home, About, Students, Team, and Events pages.

# Club Context
SPC (Software Product @Cal) is the first student chapter of the International Software Product Management Association (ISPMA), dedicated to fostering a community passionate about product management and technology. We offer a dynamic Product Management Curriculum, hands-on Client Projects with sponsor companies, and access to the prestigious North American Software Product Management Summit.

---

## 1) Design Principles

* **Bold hierarchy**: oversized headline typography and generous whitespace.
* **Modern minimalism**: limited palette, high contrast, quiet micro‑interactions.
* **Clarity first**: every section communicates one idea.
* **Motion with purpose**: subtle transforms and blur on the floating top bar.

---

## 2) Tech Stack

* **Next.js 15 + App Router**
* **TypeScript**
* **Tailwind CSS** with CSS variables for tokens
* **next/font** for typography

---

## 3) Typography

### Fonts

* **Helvetica Neue** (local fonts in `/public/fonts`)

```ts
// app/fonts.ts
import localFont from "next/font/local";

export const helveticaNeue = localFont({
  src: [
    { path: "/fonts/helvetica-neue-regular.woff2", weight: "400" },
    { path: "/fonts/helvetica-neue-medium.woff2", weight: "500" },
    { path: "/fonts/helvetica-neue-bold.woff2", weight: "700" },
  ],
  variable: "--font-helvetica",
  display: "swap",
});
```

Attach in layout:

```tsx
// app/layout.tsx
import { helveticaNeue } from "./fonts";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${helveticaNeue.variable} antialiased bg-white text-zinc-900`}>
        {children}
      </body>
    </html>
  );
}
```

---

## 4) Floating Topbar

**Behavior:** starts flush with background, morphs to glassmorphic rounded bar on scroll.

```tsx
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export function Topbar() {
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`sticky top-0 z-50 transition-all duration-300 ${elevated ? "px-4 sm:px-6 md:px-8 py-3" : ""}`}>
      <div className={`mx-auto transition-all duration-300 ${elevated ? "max-w-6xl rounded-2xl glass" : "max-w-none"}`}>
        <nav className={`flex items-center ${elevated ? "h-14" : "h-16"} justify-between container-inline`}>
          <div className="flex-1">
            <Link href="/" className="font-helvetica text-lg tracking-tight">SPC</Link>
          </div>
          <ul className="flex items-center gap-6 text-sm font-helvetica">
            <li><Link href="/about" className="opacity-80 hover:opacity-100">About</Link></li>
            <li><Link href="/students" className="opacity-80 hover:opacity-100">Students</Link></li>
            <li><Link href="/team" className="opacity-80 hover:opacity-100">Team</Link></li>
            <li><Link href="/events" className="opacity-80 hover:opacity-100">Events</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
```

---

## 5) Pages

### Directory structure

```
app/
  page.tsx               → Home
  about/page.tsx         → About
  students/page.tsx      → Students
  team/page.tsx          → Team
  events/page.tsx        → Events
```

### Home (app/page.tsx)

```tsx
import { Topbar } from "@/components/Topbar";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Topbar />
      <Hero />
    </>
  );
}
```

### About Page

```tsx
import { Topbar } from "@/components/Topbar";

export default function About() {
  return (
    <>
      <Topbar />
      <section className="container-inline pt-24 pb-20 max-w-4xl mx-auto">
        <h1 className="font-helvetica text-4xl sm:text-6xl mb-6">About SPC</h1>
        <p className="font-helvetica text-zinc-600 text-lg leading-relaxed">
          Software Product @ Cal is a UC Berkeley club fostering excellence in product thinking, design, and engineering. Our mission is to help students bridge theory and practice by shipping real software products.
        </p>
      </section>
    </>
  );
}
```

### Students Page

```tsx
import { Topbar } from "@/components/Topbar";

export default function Students() {
  return (
    <>
      <Topbar />
      <section className="container-inline pt-24 pb-20 max-w-4xl mx-auto">
        <h1 className="font-helvetica text-4xl sm:text-6xl mb-6">For Students</h1>
        <p className="font-helvetica text-zinc-600 text-lg leading-relaxed">
          We empower Berkeley students with mentorship, product training, and hands-on experience through real-world projects and workshops.
        </p>
      </section>
    </>
  );
}
```

### Team Page

```tsx
import { Topbar } from "@/components/Topbar";

export default function Team() {
  return (
    <>
      <Topbar />
      <section className="container-inline pt-24 pb-20 max-w-6xl mx-auto">
        <h1 className="font-helvetica text-4xl sm:text-6xl mb-10">Meet the Team</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* map over team data here */}
        </div>
      </section>
    </>
  );
}
```

### Events Page

```tsx
import { Topbar } from "@/components/Topbar";

export default function Events() {
  return (
    <>
      <Topbar />
      <section className="container-inline pt-24 pb-20 max-w-5xl mx-auto">
        <h1 className="font-helvetica text-4xl sm:text-6xl mb-6">Events</h1>
        <p className="font-helvetica text-zinc-600 text-lg leading-relaxed mb-10">
          Join our upcoming workshops, speaker sessions, and hackathons where creativity meets product impact.
        </p>
        {/* Future: dynamic events list */}
      </section>
    </>
  );
}
```

---

## 6) Style Guidelines

* Maintain minimal white space with strong typography.
* Reuse the topbar on all pages.
* Use `font-helvetica` for all text.
* Keep each page under one clear concept section.
* Use consistent vertical rhythm: apply `section-y` (currently `pt-24 pb-20`) to all top-level sections including the home hero and subsequent sections.

---

## 8) Brand Voice

Always write in a professional, concise, and powerful tone. Every sentence should advance meaning.

Guidelines:

* Lead with outcomes and value; avoid filler and superlatives.
* Prefer short, direct sentences; keep paragraphs tight (1–3 sentences).
* Use active voice and concrete nouns/verbs.
* Align to SPC’s pillars: education, experience, community.
* Keep link labels short and clear (e.g., “Learn more”, “Download package”).

---

## 7) Future Enhancements

* Dark mode toggle.
* Dynamic events fetched from Notion or Airtable.
* Team data rendered from JSON or CMS.
* Smooth route transitions using Framer Motion.