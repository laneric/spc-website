"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";

const photos = [
  "/photos/community/BANQUET_1.png",
  "/photos/community/BIGLITTLE_REVEAL_1.png",
  "/photos/community/GIRLS_BEACH_1.png",
  "/photos/community/ICE_SKATING_1.png",
  "/photos/community/olympics.png",
  "/photos/community/retreat_1.png",
  "/photos/spc-old-photos/banquet.jpg",
  "/photos/spc-old-photos/banquet2.jpg",
  "/photos/spc-old-photos/hiking.jpg",
  "/photos/spc-old-photos/retreat_fa24.jpg",
  "/photos/spc-old-photos/sixflags (1).jpg",
  "/photos/spc-old-photos/sixflags.jpg",
  "/photos/spc-old-photos/sixflags2.jpg",
  "/photos/spc-old-photos/spc-exec.jpg",
  "/photos/spc-old-photos/spc-group.jpg",
  "/photos/spc-old-photos/summit2024.jpg",
  "/photos/spc-old-photos/fa26_1.jpg",
  "/photos/spc-old-photos/fa26_2.jpg",
  "/photos/spc-old-photos/fa26_3.jpg",
  "/photos/spc-old-photos/fa26_4.jpg",
];

const SPEED = 10; // px per second

export function CommunityMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const drag = useRef({ active: false, startX: 0, startPos: 0 });
  const rafRef = useRef<number>(0);
  const halfWidthRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Measure the full width of one set of photos (track is doubled)
    const measure = () => {
      halfWidthRef.current = track.scrollWidth / 2;
    };
    measure();

    let last = performance.now();

    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;

      if (!drag.current.active) {
        posRef.current -= SPEED * dt;
        // Seamless wrap: jump forward one set when we've scrolled past it
        if (posRef.current <= -halfWidthRef.current) {
          posRef.current += halfWidthRef.current;
        }
        track.style.transform = `translateX(${posRef.current}px)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    drag.current = { active: true, startX: e.clientX, startPos: posRef.current };
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!drag.current.active) return;
    const delta = e.clientX - drag.current.startX;
    let next = drag.current.startPos + delta;
    // Keep within one full wrap range so the loop stays seamless
    const half = halfWidthRef.current;
    if (next > 0) next -= half;
    if (next < -half) next += half;
    posRef.current = next;
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${next}px)`;
    }
  };

  const stopDrag = () => {
    drag.current.active = false;
  };

  return (
    <div
      className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
      onMouseMove={onMouseMove}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
    >
      <div
        ref={trackRef}
        className="flex"
        style={{ width: "max-content", willChange: "transform" }}
        onMouseDown={onMouseDown}
      >
        {[...photos, ...photos].map((src, i) => (
          <div
            key={i}
            className="relative shrink-0 mx-3 rounded-2xl overflow-hidden shadow-sm"
            style={{ width: 320, height: 240 }}
          >
            <Image
              src={src}
              alt="SPC community photo"
              fill
              className="object-cover pointer-events-none"
              sizes="320px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}