import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect, useCallback } from "react";
import Container from "../layout/Container";
import Section from "../layout/Section";
import CollectionCard from "../ui/CollectionCard";
import CollectionModal from "../ui/CollectionModal";
import { allCollections } from "../../data/content";

// ─── Tab Strip ────────────────────────────────────────────────────────────────

const TabStrip = ({ collections, activeIndex, onSelect }) => {
  const stripRef = useRef(null);
  const activeTabRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  // Update arrow visibility based on scroll position
  const updateArrows = useCallback(() => {
    const el = stripRef.current;
    if (!el) return;
    setShowLeftArrow(el.scrollLeft > 8);
    setShowRightArrow(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    return () => el.removeEventListener("scroll", updateArrows);
  }, [updateArrows]);

  // Scroll active tab into view when it changes
  useEffect(() => {
    if (activeTabRef.current && stripRef.current) {
      const tab = activeTabRef.current;
      const strip = stripRef.current;
      const tabLeft = tab.offsetLeft;
      const tabRight = tabLeft + tab.offsetWidth;
      const visibleLeft = strip.scrollLeft;
      const visibleRight = visibleLeft + strip.clientWidth;
      if (tabLeft < visibleLeft + 32) {
        strip.scrollTo({ left: tabLeft - 32, behavior: "smooth" });
      } else if (tabRight > visibleRight - 32) {
        strip.scrollTo({ left: tabRight - strip.clientWidth + 32, behavior: "smooth" });
      }
    }
  }, [activeIndex]);

  const scrollBy = (dir) => {
    stripRef.current?.scrollBy({ left: dir * 200, behavior: "smooth" });
  };

  return (
    <div className="relative flex items-center">
      {/* Left arrow — desktop only */}
      <AnimatePresence>
        {showLeftArrow && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => scrollBy(-1)}
            className="hidden md:flex absolute left-0 z-20 w-9 h-9 items-center justify-center rounded-full bg-cream-50 border border-burgundy-200 shadow-md text-burgundy-800 hover:bg-burgundy-800 hover:text-gold-400 transition-colors"
            aria-label="Scroll tabs left"
          >
            ‹
          </motion.button>
        )}
      </AnimatePresence>

      {/* Scrollable strip */}
      <div
        ref={stripRef}
        className="flex gap-2 overflow-x-auto scroll-smooth no-scrollbar px-2 md:px-10 py-1 w-full"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {collections.map((col, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={col.id}
              ref={isActive ? activeTabRef : null}
              onClick={() => onSelect(idx)}
              className={`
                relative flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium
                tracking-wider transition-all duration-300 whitespace-nowrap
                ${isActive
                  ? "bg-burgundy-900 text-gold-400 shadow-lg"
                  : "bg-white border border-burgundy-200 text-burgundy-700 hover:border-burgundy-600 hover:text-burgundy-900"
                }
              `}
            >
              {col.tabLabel}
              {/* Active underline dot */}
              {isActive && (
                <motion.span
                  layoutId="activeTabDot"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gold-400"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Right arrow — desktop only */}
      <AnimatePresence>
        {showRightArrow && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => scrollBy(1)}
            className="hidden md:flex absolute right-0 z-20 w-9 h-9 items-center justify-center rounded-full bg-cream-50 border border-burgundy-200 shadow-md text-burgundy-800 hover:bg-burgundy-800 hover:text-gold-400 transition-colors"
            aria-label="Scroll tabs right"
          >
            ›
          </motion.button>
        )}
      </AnimatePresence>

      {/* Fade edges */}
      {showLeftArrow && (
        <div className="hidden md:block absolute left-10 w-8 h-full bg-gradient-to-r from-cream-50 to-transparent pointer-events-none z-10" />
      )}
      {showRightArrow && (
        <div className="hidden md:block absolute right-10 w-8 h-full bg-gradient-to-l from-cream-50 to-transparent pointer-events-none z-10" />
      )}
    </div>
  );
};

// ─── Collection Panel ─────────────────────────────────────────────────────────

const CollectionPanel = ({ collection, direction, onOpen }) => {
  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? "60%" : "-60%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? "-40%" : "40%", opacity: 0 }),
  };

  return (
    <motion.div
      key={collection.id}
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Collection header */}
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-burgundy-900 mb-3">
          {collection.heading}
        </h2>
        <p className="text-lg md:text-xl text-burgundy-700 font-serif italic mb-2">
          {collection.subheading}
        </p>
        <p className="text-base md:text-lg text-burgundy-600 max-w-3xl mx-auto">
          {collection.description}
        </p>

        <div className="mt-6 flex items-center justify-center">
          <div className="h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent max-w-md w-full" />
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collection.items.map((item) => (
          <CollectionCard key={item.id} collection={item} onOpen={onOpen} />
        ))}
      </div>

      {/* Bottom note */}
      {collection.bottomNote && (
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 text-burgundy-600">
            <span className="text-2xl font-serif">॰</span>
            <span className="text-sm tracking-widest uppercase font-medium">
              {collection.bottomNote}
            </span>
            <span className="text-2xl font-serif">॰</span>
          </div>
        </div>
      )}
    </motion.div>
  );
};

// ─── CollectionsHub ───────────────────────────────────────────────────────────

const CollectionsHub = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialImageIndex, setInitialImageIndex] = useState(0);

  // Swipe state for mobile drag-to-switch
  const dragStartX = useRef(null);

  // goTo: two clean separated state updates — never nest setState inside another setState updater
  const goTo = (idx) => {
    if (idx === activeIndex) return;
    setDirection(idx > activeIndex ? 1 : -1);
    setActiveIndex(idx);
  };

  // Keyboard left/right within the section
  useEffect(() => {
    const handler = (e) => {
      if (isModalOpen) return;
      if (e.key === "ArrowRight") {
        const next = (activeIndex + 1) % allCollections.length;
        setDirection(1);
        setActiveIndex(next);
      }
      if (e.key === "ArrowLeft") {
        const prev = (activeIndex - 1 + allCollections.length) % allCollections.length;
        setDirection(-1);
        setActiveIndex(prev);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isModalOpen, activeIndex]);

  const handleOpenModal = (collection, startIndex = 0) => {
    setSelectedCollection(collection);
    setInitialImageIndex(startIndex);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedCollection(null);
      setInitialImageIndex(0);
    }, 300);
  };

  // Touch swipe on the cards area
  const handleDragStart = (e) => {
    dragStartX.current = e.touches?.[0]?.clientX ?? e.clientX;
  };

  const handleDragEnd = (e) => {
    if (dragStartX.current === null) return;
    const endX = e.changedTouches?.[0]?.clientX ?? e.clientX;
    const delta = dragStartX.current - endX;
    dragStartX.current = null;
    if (Math.abs(delta) > 60) {
      if (delta > 0) {
        const next = (activeIndex + 1) % allCollections.length;
        setDirection(1);
        setActiveIndex(next);
      } else {
        const prev = (activeIndex - 1 + allCollections.length) % allCollections.length;
        setDirection(-1);
        setActiveIndex(prev);
      }
    }
  };

  const active = allCollections[activeIndex];

  return (
    <Section id="collections" variant="light" padding="xl">
      <Container>
        {/* Section super-heading */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block mb-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-burgundy-800 to-burgundy-900 flex items-center justify-center">
              <span className="text-gold-400 text-xl font-serif">🌸</span>
            </div>
          </div>
          <p className="text-xs tracking-[0.3em] uppercase font-medium text-burgundy-500 mb-1">
            Our Collections
          </p>
        </motion.div>

        {/* Sticky tab strip wrapper */}
        <div className="sticky top-16 z-30 bg-cream-50/95 backdrop-blur-sm py-3 mb-10 -mx-4 px-4 md:-mx-8 md:px-8 border-b border-burgundy-100/50">
          <TabStrip
            collections={allCollections}
            activeIndex={activeIndex}
            onSelect={goTo}
          />
        </div>

        {/* Swipeable cards area */}
        <div
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
          style={{ touchAction: "pan-y" }}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <CollectionPanel
              key={active.id}
              collection={active}
              direction={direction}
              onOpen={handleOpenModal}
            />
          </AnimatePresence>
        </div>

        {/* Pagination dots (always visible, useful when many collections) */}
        {allCollections.length > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            {allCollections.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? "bg-burgundy-800 w-6 h-2"
                    : "bg-burgundy-200 hover:bg-burgundy-400 w-2 h-2"
                }`}
                aria-label={`Go to collection ${idx + 1}`}
              />
            ))}
          </div>
        )}
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

export default CollectionsHub;
