"use client";
import { useState } from "react";
import Image from "next/image";
import { ImageModal } from "./ImageModal";

interface ImageItem {
  id: number;
  url: string;
  alt: string;
}

interface CommunityGridProps {
  images: ImageItem[];
}

export function CommunityGrid({ images }: CommunityGridProps) {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (image: ImageItem) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Small delay before clearing selected image to allow fade-out animation
    setTimeout(() => {
      setSelectedImage(null);
    }, 300);
  };

  if (images.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => handleImageClick(image)}
            className="relative aspect-square overflow-hidden rounded-lg bg-zinc-100 hover:opacity-90 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-berkeley-blue focus:ring-offset-2"
            aria-label={`View ${image.alt}`}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              className="object-cover"
              unoptimized={image.url.startsWith('http')}
            />
          </button>
        ))}
      </div>
      
      <ImageModal
        image={selectedImage}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
