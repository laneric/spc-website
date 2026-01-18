"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";

interface ImageItem {
  id: number;
  url: string;
  alt: string;
}

interface CommunityCarouselProps {
  images: ImageItem[];
}

export function CommunityCarousel({ images }: CommunityCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const beltRef = useRef<HTMLDivElement>(null);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const scrollResetTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollLeftRef = useRef(0);
  
  // Create duplicated array for infinite scroll (triple for seamless looping)
  const duplicatedImages = images.length > 1 
    ? [...images, ...images, ...images]
    : images;

  // Navigate to specific image
  const goToImage = useCallback((index: number) => {
    if (index === currentIndex || index < 0 || index >= images.length) return;
    
    setIsTransitioning(true);
    setCurrentIndex(index);
    setIsPaused(true);
    
    // Clear any existing pause timeout
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    
    // Resume auto-cycle after 5 seconds of inactivity
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
    
    // Reset transition state after animation
    setTimeout(() => setIsTransitioning(false), 300);
  }, [currentIndex, images.length]);

  // Navigate to next image
  const goToNext = useCallback(() => {
    goToImage((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, goToImage]);

  // Navigate to previous image
  const goToPrevious = useCallback(() => {
    goToImage((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, goToImage]);

  // Scroll thumbnail belt to center active thumbnail
  const scrollBeltToActive = useCallback(() => {
    if (!beltRef.current || images.length <= 1) return;
    
    isScrollingRef.current = true;
    const belt = beltRef.current;
    
    // Clear any pending scroll reset
    if (scrollResetTimeoutRef.current) {
      clearTimeout(scrollResetTimeoutRef.current);
      scrollResetTimeoutRef.current = null;
    }
    
    // Calculate the middle set's index (we're using triple duplication)
    const middleSetStart = images.length;
    const targetIndex = middleSetStart + currentIndex;
    
    // Get thumbnail width (including gap)
    const thumbnails = belt.querySelectorAll('[data-thumbnail-index]');
    if (thumbnails.length === 0) {
      isScrollingRef.current = false;
      return;
    }
    
    const firstThumb = thumbnails[0] as HTMLElement;
    const thumbWidth = firstThumb.offsetWidth;
    const gap = 8; // gap-2 = 0.5rem = 8px
    const thumbWithGap = thumbWidth + gap;
    
    // Calculate scroll position to center the thumbnail
    const beltWidth = belt.offsetWidth;
    const targetScroll = (targetIndex * thumbWithGap) - (beltWidth / 2) + (thumbWidth / 2);
    
    belt.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
    
    // Reset scrolling flag after animation completes (smooth scroll takes ~500ms)
    setTimeout(() => {
      isScrollingRef.current = false;
      lastScrollLeftRef.current = belt.scrollLeft;
    }, 600);
  }, [currentIndex, images.length]);
  
  // Handle infinite scroll reset (only for user-initiated scrolling)
  const handleBeltScroll = useCallback(() => {
    if (!beltRef.current || images.length <= 1 || isScrollingRef.current) return;
    
    const belt = beltRef.current;
    const scrollLeft = belt.scrollLeft;
    const scrollDelta = Math.abs(scrollLeft - lastScrollLeftRef.current);
    
    // If scroll delta is very small, it's likely just a programmatic scroll settling
    // Only process significant scroll movements (user-initiated)
    if (scrollDelta < 5) {
      lastScrollLeftRef.current = scrollLeft;
      return;
    }
    
    // Debounce: only check reset after scroll has stopped
    if (scrollResetTimeoutRef.current) {
      clearTimeout(scrollResetTimeoutRef.current);
    }
    
    scrollResetTimeoutRef.current = setTimeout(() => {
      if (!beltRef.current || isScrollingRef.current) return;
      
      const belt = beltRef.current;
      const thumbnails = belt.querySelectorAll('[data-thumbnail-index]');
      if (thumbnails.length === 0) return;
      
      const firstThumb = thumbnails[0] as HTMLElement;
      const thumbWidth = firstThumb.offsetWidth;
      const gap = 8;
      const thumbWithGap = thumbWidth + gap;
      const currentScroll = belt.scrollLeft;
      const setWidth = images.length * thumbWithGap;
      
      // Only reset if we're significantly outside the middle set bounds
      // Use tighter bounds to prevent resetting during programmatic centering
      // Reset instantly (without smooth scroll) to avoid visual jumps
      if (currentScroll < setWidth * 0.2) {
        // Near the start of first set - jump to equivalent position in middle set
        // Temporarily disable smooth scrolling for instant reset
        belt.style.scrollBehavior = 'auto';
        belt.scrollLeft = currentScroll + setWidth;
        belt.style.scrollBehavior = '';
        lastScrollLeftRef.current = belt.scrollLeft;
      } else if (currentScroll > setWidth * 2.8) {
        // Near the end of third set - jump to equivalent position in middle set
        belt.style.scrollBehavior = 'auto';
        belt.scrollLeft = currentScroll - setWidth;
        belt.style.scrollBehavior = '';
        lastScrollLeftRef.current = belt.scrollLeft;
      } else {
        lastScrollLeftRef.current = currentScroll;
      }
    }, 200); // Wait for scroll to settle
    
    lastScrollLeftRef.current = scrollLeft;
  }, [images.length]);

  // Auto-cycle effect
  useEffect(() => {
    if (images.length <= 1) return;
    
    if (!isPaused && !isTransitioning) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, isTransitioning, images.length]);

  // Scroll belt when currentIndex changes
  useEffect(() => {
    scrollBeltToActive();
  }, [currentIndex, scrollBeltToActive]);
  
  // Initialize belt scroll position to middle set
  useEffect(() => {
    if (!beltRef.current || images.length <= 1) return;
    
    // Wait for thumbnails to render
    const initScroll = () => {
      const belt = beltRef.current;
      if (!belt) return;
      
      const thumbnails = belt.querySelectorAll('[data-thumbnail-index]');
      if (thumbnails.length === 0) {
        requestAnimationFrame(initScroll);
        return;
      }
      
      const firstThumb = thumbnails[0] as HTMLElement;
      const thumbWidth = firstThumb.offsetWidth;
      const gap = 8;
      const thumbWithGap = thumbWidth + gap;
      const beltWidth = belt.offsetWidth;
      
      // Start at middle set, centered on first image
      const middleSetStart = images.length;
      const initialScroll = (middleSetStart * thumbWithGap) - (beltWidth / 2) + (thumbWidth / 2);
      
      belt.scrollLeft = initialScroll;
    };
    
    requestAnimationFrame(initScroll);
  }, [images.length]);
  
  // Handle belt scroll for infinite loop
  useEffect(() => {
    const belt = beltRef.current;
    if (!belt || images.length <= 1) return;
    
    belt.addEventListener('scroll', handleBeltScroll, { passive: true });
    return () => belt.removeEventListener('scroll', handleBeltScroll);
  }, [handleBeltScroll, images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!carouselRef.current?.contains(document.activeElement) && 
          !carouselRef.current?.matches(':hover')) {
        return;
      }
      
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrevious]);

  // Handle mouse enter/leave
  const handleMouseEnter = () => {
    setIsPaused(true);
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
  };

  const handleMouseLeave = () => {
    // Resume after a short delay
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 1000);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
      if (scrollResetTimeoutRef.current) {
        clearTimeout(scrollResetTimeoutRef.current);
      }
    };
  }, []);

  if (images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div
      ref={carouselRef}
      className="w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main Display Area */}
      <div className="relative w-full aspect-video sm:aspect-video md:aspect-video overflow-hidden rounded-lg mb-4 bg-zinc-100">
        {/* Main Image */}
        <div className="relative w-full h-full">
          <Image
            src={currentImage.url}
            alt={currentImage.alt}
            fill
            className="object-cover transition-opacity duration-300"
            priority={currentIndex === 0}
            unoptimized={currentImage.url.startsWith('http')}
          />
        </div>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl z-10 hover:cursor-pointer"
              aria-label="Previous image"
            >
              <svg
                className="w-5 h-5 text-zinc-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl z-10 hover:cursor-pointer"
              aria-label="Next image"
            >
              <svg
                className="w-5 h-5 text-zinc-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Thumbnail Belt */}
      {images.length > 1 && (
        <div
          ref={beltRef}
          className="flex gap-2 overflow-x-auto scrollbar-hide pb-2"
        >
          {duplicatedImages.map((image, index) => {
            // Calculate the original index for comparison
            const originalIndex = index % images.length;
            const isActive = originalIndex === currentIndex;
            
            return (
              <button
                key={`${image.id}-${index}`}
                data-thumbnail-index={index}
                onClick={() => goToImage(originalIndex)}
                className={`relative shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-lg transition-all duration-200 p-0.5 hover:cursor-pointer ${
                  isActive
                    ? 'opacity-100'
                    : 'opacity-60 hover:opacity-100 grayscale'
                }`}
                aria-label={`Go to image ${originalIndex + 1}: ${image.alt}`}
                aria-current={isActive ? 'true' : 'false'}
              >
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    unoptimized={image.url.startsWith('http')}
                  />
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
