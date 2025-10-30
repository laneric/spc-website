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
      <div className={`mx-auto transition-all duration-300 border ${elevated ? "max-w-6xl rounded-2xl glass" : "max-w-none border-transparent bg-transparent"}`}>
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


