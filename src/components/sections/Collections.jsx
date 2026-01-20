import { motion } from "framer-motion";
import { useState } from "react";
import Container from "../layout/Container";
import Section from "../layout/Section";
import CollectionCard from "../ui/CollectionCard";
import CollectionModal from "../ui/CollectionModal";
import { collections } from "../../data/content";

/**
 * Collections Section Component
 * Displays Pushpadhara collection grid with auto-scrolling cards
 * Manages modal state for individual collection details
 *
 * Single Responsibility: Orchestrate collection display and modal interactions
 */
const Collections = () => {
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialImageIndex, setInitialImageIndex] = useState(0);

  const handleOpenModal = (collection, startIndex = 0) => {
    setSelectedCollection(collection);
    setInitialImageIndex(startIndex);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Delay clearing selection to allow exit animation
    setTimeout(() => {
      setSelectedCollection(null);
      setInitialImageIndex(0);
    }, 300);
  };

  return (
    <Section id="collections" variant="light" padding="xl">
      <Container>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative element */}
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-burgundy-800 to-burgundy-900 flex items-center justify-center">
              <span className="text-gold-400 text-2xl font-serif">🌸</span>
            </div>
          </motion.div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-burgundy-900 mb-4">
            {collections.heading}
          </h2>

          <p className="text-lg md:text-xl text-burgundy-700 font-serif italic mb-2">
            {collections.subheading}
          </p>

          <p className="text-base md:text-lg text-burgundy-600 max-w-3xl mx-auto">
            {collections.description}
          </p>

          {/* Decorative divider */}
          <motion.div
            className="mt-8 flex items-center justify-center gap-4"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent max-w-md w-full" />
          </motion.div>
        </motion.div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.items.map((collection) => (
            <CollectionCard
              key={collection.id}
              collection={collection}
              onOpen={handleOpenModal}
            />
          ))}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 text-burgundy-600">
            <span className="text-2xl font-serif">॰</span>
            <span className="text-sm tracking-widest uppercase font-medium">
              Handcrafted on Khadi Cotton
            </span>
            <span className="text-2xl font-serif">॰</span>
          </div>
        </motion.div>
      </Container>

      {/* Collection Modal */}
      <CollectionModal
        collection={selectedCollection}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        initialImageIndex={initialImageIndex}
      />
    </Section>
  );
};

export default Collections;
