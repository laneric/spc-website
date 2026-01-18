"use client";
import { useEffect } from "react";
import Image from "next/image";

interface ImageModalProps {
  image: { id: number; url: string; alt: string } | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ImageModal({ image, isOpen, onClose }: ImageModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !image) return null;

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden transition-opacity duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={onClose}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-neutral-900/70 backdrop-blur-lg" />
      
      {/* Modal Content */}
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <div className="relative max-w-7xl w-full max-h-[90vh] flex items-center justify-center">
          <div className="relative w-full h-[90vh] max-h-[90vh]">
            <Image
              src={image.url}
              alt={image.alt}
              fill
              className="object-contain"
              unoptimized={image.url.startsWith('http')}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1280px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
