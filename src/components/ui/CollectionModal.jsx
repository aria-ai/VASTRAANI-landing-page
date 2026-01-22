import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import PriceDisplay from "./PriceDisplay";
import InfoPanel from "./InfoPanel";
import { getCollectionImages } from "../../utils/imageUtils";
import { createWhatsAppLink, openWhatsApp } from "../../utils/whatsapp";

/**
 * Manual Image Carousel Component
 * User-controlled carousel for modal view
 */
const ManualCarousel = ({ images, alt, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="relative w-full h-full bg-burgundy-900 flex items-center justify-center">
      {/* Image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${alt} ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
        />
      </AnimatePresence>

      {/* Navigation buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-burgundy-900/80 text-gold-400 hover:bg-burgundy-800 transition-colors backdrop-blur-sm"
            aria-label="Previous image"
          >
            <svg
              className="w-6 h-6"
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
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-burgundy-900/80 text-gold-400 hover:bg-burgundy-800 transition-colors backdrop-blur-sm"
            aria-label="Next image"
          >
            <svg
              className="w-6 h-6"
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

      {/* Slide indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`
                h-2 rounded-full transition-all duration-300
                ${
                  index === currentIndex
                    ? "bg-gold-400 w-8"
                    : "bg-cream-200/60 w-2 hover:bg-cream-200"
                }
              `}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

/**
 * CollectionModal Component
 * Fullscreen modal with manual carousel, info panel, price, and WhatsApp button
 *
 * Single Responsibility: Display collection details in modal view with interactions
 */
const CollectionModal = ({
  collection,
  isOpen,
  onClose,
  initialImageIndex = 0,
}) => {
  const [showInfo, setShowInfo] = useState(false);

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        if (showInfo) {
          setShowInfo(false);
        } else {
          onClose();
        }
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      // Prevent body scroll
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, showInfo, onClose]);

  if (!collection) return null;

  const handleWhatsAppClick = () => {
    const whatsappUrl = createWhatsAppLink(collection.enquiryMessage);
    openWhatsApp(whatsappUrl);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/90"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-7xl h-[90vh] bg-cream-50 rounded-lg shadow-2xl overflow-hidden"
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-burgundy-900 text-gold-400 hover:bg-burgundy-800 transition-colors z-[100]"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Layout - Flex container for carousel and info panel */}
            <div className="relative h-full flex flex-col md:flex-row overflow-hidden">
              {/* Image Carousel - Shrinks when info panel opens on desktop */}
              <motion.div
                className="flex-1 relative min-w-0"
                animate={{
                  marginRight:
                    showInfo &&
                    typeof window !== "undefined" &&
                    window.innerWidth >= 768
                      ? "400px"
                      : "0px",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <ManualCarousel
                  images={getCollectionImages(
                    collection.id,
                    collection.imageCount,
                  )}
                  alt={collection.subtitle}
                  initialIndex={initialImageIndex}
                />

                {/* Bottom controls bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-burgundy-900/95 to-transparent p-6 flex items-center justify-between gap-4">
                  {/* Price */}
                  <PriceDisplay price={collection.price} size="lg" />

                  {/* Buttons */}
                  <div className="flex items-center gap-3">
                    {/* Info button */}
                    <motion.button
                      onClick={() => setShowInfo(!showInfo)}
                      className={`
                        w-12 h-12 flex items-center justify-center rounded-full 
                        transition-colors
                        ${
                          showInfo
                            ? "bg-gold-600 text-burgundy-900"
                            : "bg-cream-50 text-burgundy-900 hover:bg-gold-400"
                        }
                      `}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Toggle info"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </motion.button>

                    {/* WhatsApp button */}
                    <motion.button
                      onClick={handleWhatsAppClick}
                      className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-serif font-semibold rounded-full flex items-center gap-2 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      Inquire
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Info Panel */}
              <InfoPanel
                isOpen={showInfo}
                onClose={() => setShowInfo(false)}
                collection={collection}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CollectionModal;
