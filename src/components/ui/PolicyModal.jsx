import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

/**
 * PolicyModal Component
 * Reusable modal for displaying text-heavy content like policies.
 */
const PolicyModal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              className="bg-cream-50 w-full max-w-2xl max-h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-burgundy-100"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-burgundy-100 bg-white">
                <h2 className="text-2xl font-serif font-bold text-burgundy-900">
                  {title}
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-burgundy-50 text-burgundy-700 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto p-6 md:p-8 space-y-8 custom-scrollbar">
                {content.map((section, idx) => (
                  <div key={idx} className="space-y-3">
                    {section.subtitle && (
                      <h3 className="font-serif text-lg font-semibold text-burgundy-800 border-l-3 border-gold-400 pl-3">
                        {section.subtitle}
                      </h3>
                    )}
                    <div className="space-y-2 text-burgundy-700 leading-relaxed text-sm md:text-base">
                      {section.text.map((paragraph, pIdx) => (
                        <p
                          key={pIdx}
                          className={paragraph.startsWith("•") ? "pl-4" : ""}
                        >
                          {paragraph.startsWith("**") ? (
                            <strong>{paragraph.replace(/\*\*/g, "")}</strong>
                          ) : (
                            paragraph
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-burgundy-100 bg-white flex justify-end">
                <button
                  onClick={onClose}
                  className="px-6 py-2 bg-burgundy-900 text-gold-50 font-medium rounded hover:bg-burgundy-800 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PolicyModal;
