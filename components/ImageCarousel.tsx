"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
  alt: string;
  interval?: number; // milliseconds between transitions
}

export function ImageCarousel({ images, alt, interval = 3000 }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 250); // Half of transition duration for smooth fade
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  if (images.length === 0) return null;

  return (
    <div className="relative w-full h-full">
      <Image
        src={images[currentIndex]}
        alt={alt}
        fill
        className={`object-cover transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
        unoptimized
      />
    </div>
  );
}

