import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

/**
 * AutoScrollCarousel Component
 * Infinite auto-scrolling image carousel with smooth transitions
 *
 * @param {string[]} images - Array of image URLs
 * @param {number} interval - Time in ms between slides (default: 3500)
 * @param {string} alt - Alt text for images
 */
const AutoScrollCarousel = ({
  images = [],
  interval = 3500,
  alt = "Collection image",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [nextSlide, interval, images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden bg-burgundy-50">
      {images.length > 0 ? (
        <>
          <AnimatePresence mode="wait">
            <motion.img
              key={`${currentIndex}-${images[currentIndex]}`}
              src={images[currentIndex]}
              alt={`${alt} ${currentIndex + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              onError={() => {
                console.error(`Failed to load image: ${images[currentIndex]}`);
              }}
            />
          </AnimatePresence>

          {/* Slide indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`
                    w-2 h-2 rounded-full transition-all duration-300
                    ${
                      index === currentIndex
                        ? "bg-gold-400 w-6"
                        : "bg-cream-200/60"
                    }
                  `}
                />
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="w-full h-full bg-burgundy-100 flex items-center justify-center">
          <span className="text-burgundy-400 font-serif italic">
            No images available
          </span>
        </div>
      )}
    </div>
  );
};

export default AutoScrollCarousel;
