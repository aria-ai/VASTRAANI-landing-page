import { motion } from "framer-motion";
import { useState } from "react";
import AutoScrollCarousel from "../ui/AutoScrollCarousel";
import PriceDisplay from "../ui/PriceDisplay";
import { getCollectionImages } from "../../utils/imageUtils";

/**
 * CollectionCard Component
 * Displays a collection with auto-scrolling images, price, and hover effects
 * Opens modal on click
 *
 * Single Responsibility: Display collection preview and handle click/hover interactions
 */
const CollectionCard = ({ collection, onOpen }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative h-[500px] md:h-[600px] overflow-hidden rounded-sm cursor-pointer group"
      onClick={() => onOpen(collection)}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Auto-scrolling carousel */}
      <AutoScrollCarousel
        images={getCollectionImages(collection.id, collection.imageCount)}
        alt={collection.subtitle}
        interval={1000 * (30 / collection.imageCount)}
      />

      {/* Price badge - always visible */}
      <div className="absolute bottom-4 right-4 z-20">
        <PriceDisplay price={collection.price} size={isHovered ? "lg" : "md"} />
      </div>

      {/* Hover overlay with blur and tagline */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center p-8 bg-gradient-to-t from-burgundy-900/95 via-burgundy-900/80 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ backdropFilter: isHovered ? "blur(8px)" : "blur(0px)" }}
      >
        <motion.div
          className="text-center max-w-md"
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: isHovered ? 0 : 20,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-gold-400 mb-3">
            {collection.title}
          </h3>
          <p className="text-cream-100 font-serif italic text-lg">
            {collection.tagline}
          </p>
        </motion.div>
      </motion.div>

      {/* Subtle border on hover */}
      <motion.div
        className="absolute inset-0 border-2 border-gold-500 pointer-events-none rounded-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default CollectionCard;
