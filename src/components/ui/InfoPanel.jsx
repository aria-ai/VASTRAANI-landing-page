import { motion, AnimatePresence } from "framer-motion";

/**
 * InfoPanel Component
 * Slide-in panel displaying collection details (Google Photos style)
 * Desktop: Appears beside carousel, shrinking carousel width
 * Mobile: Appears as bottom sheet, constrained and scrollable
 *
 * Single Responsibility: Display detailed collection information in animated panel
 */
const InfoPanel = ({ isOpen, onClose, collection }) => {
  if (!collection) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Mobile backdrop only */}
          <motion.div
            className="fixed inset-0 bg-black/60 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Info Panel */}
          <motion.div
            className={`
              fixed md:absolute
              bottom-0 left-0 right-0 md:top-0 md:right-0 md:bottom-0 md:left-auto
              w-full md:w-[400px]
              max-h-[70vh] md:max-h-full
              bg-cream-50 shadow-2xl z-50 overflow-y-auto
              rounded-t-3xl md:rounded-none
            `}
            initial={{
              y: window.innerWidth < 768 ? "100%" : 0,
              x: window.innerWidth >= 768 ? "100%" : 0,
            }}
            animate={{ x: 0, y: 0 }}
            exit={{
              y: window.innerWidth < 768 ? "100%" : 0,
              x: window.innerWidth >= 768 ? "100%" : 0,
            }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 300,
            }}
          >
            {/* Drag handle for mobile */}
            <div className="md:hidden flex justify-center pt-3 pb-2">
              <div className="w-12 h-1 bg-burgundy-300 rounded-full" />
            </div>

            {/* Edge-mounted close button - half in, half out on left border */}
            <motion.button
              onClick={onClose}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-burgundy-900 text-gold-400 hover:bg-burgundy-800 transition-colors shadow-xl border-2 border-cream-50 z-50"
              aria-label="Close info panel"
            >
              <svg
                className="w-5 h-5"
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
            </motion.button>

            {/* Content */}
            <div className="p-6 md:p-8 pt-2">
              {/* Title */}
              <div className="mb-6">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-burgundy-900 mb-2">
                  {collection.title}
                </h3>
                <p className="text-burgundy-700 font-serif italic text-base md:text-lg">
                  {collection.subtitle}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-burgundy-200">
                <p className="text-xs font-medium text-burgundy-600 uppercase tracking-wider mb-2">
                  Price
                </p>
                <p className="text-2xl md:text-3xl font-serif font-bold text-burgundy-900">
                  ₹{collection.price.toLocaleString("en-IN")}
                </p>
              </div>

              {/* Tagline */}
              <div className="mb-6">
                <p className="text-burgundy-800 font-serif italic leading-relaxed text-sm md:text-base">
                  {collection.tagline}
                </p>
              </div>

              {/* Description */}
              {collection.description && (
                <div className="mb-6">
                  <p className="text-burgundy-700 font-serif leading-relaxed text-sm md:text-base">
                    {collection.description}
                  </p>
                </div>
              )}

              {/* Features */}
              {collection.features && collection.features.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-burgundy-800 uppercase tracking-wider mb-4">
                    Details
                  </h4>
                  <ul className="space-y-2">
                    {collection.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-gold-600 mt-1 text-sm">•</span>
                        <span className="text-burgundy-700 font-serif text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Decorative element */}
              <div className="pt-6 border-t border-burgundy-200 mb-6">
                <div className="flex items-center justify-center gap-3 text-burgundy-400">
                  <span className="text-xl font-serif">॰</span>
                  <span className="text-xs tracking-widest uppercase font-medium">
                    Handcrafted with Love
                  </span>
                  <span className="text-xl font-serif">॰</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default InfoPanel;
