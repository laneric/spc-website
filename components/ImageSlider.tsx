"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// New 2026-08-25: manual slider for the For Students / For Companies
// sections specifically. Separate from ImageCarousel.tsx (which stays
// untouched, an auto-fading carousel) — this one uses a real horizontal
// slide instead of a fade, and supports both autoplay and click-through
// via the arrows/dots. Clicking resets the autoplay timer so it doesn't
// immediately fight the user's manual navigation.
interface ImageSliderProps {
  images: string[];
  alt: string;
  interval?: number; // milliseconds between auto-advances
}

export function ImageSlider({ images, alt, interval = 6000 }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
    // Resets whenever currentIndex changes (including manual clicks), so
    // the next auto-advance is always a full `interval` after the last
    // navigation, manual or automatic.
  }, [images.length, interval, currentIndex]);

  if (images.length === 0) return null;

  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const goNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  return (
    <div className="group relative w-full h-full overflow-hidden">
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={src} className="relative w-full h-full shrink-0">
            <Image
              src={src}
              alt={`${alt} ${i + 1}`}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            style={{ backgroundColor: "rgba(5,7,28,0.6)", backdropFilter: "blur(6px)" }}
          >
            <FiChevronLeft className="w-5 h-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            style={{ backgroundColor: "rgba(5,7,28,0.6)", backdropFilter: "blur(6px)" }}
          >
            <FiChevronRight className="w-5 h-5" aria-hidden="true" />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to image ${i + 1}`}
                className="w-1.5 h-1.5 rounded-full transition-colors"
                style={{ backgroundColor: i === currentIndex ? "#f5c971" : "rgba(255,255,255,0.4)" }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}