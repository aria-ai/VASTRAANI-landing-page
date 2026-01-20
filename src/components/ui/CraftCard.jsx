import { motion } from "framer-motion";
import { useState } from "react";

/**
 * CraftCard Component
 * Expandable card for displaying craft philosophy content
 * Reusable card with accordion-style interaction
 *
 * Single Responsibility: Display and manage expansion of individual craft philosophy card
 */
const CraftCard = ({ card, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden rounded-lg bg-gradient-to-br from-cream-50 to-cream-100 border border-burgundy-200 hover:border-gold-500 transition-colors duration-300 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Card Header */}
      <div className="p-6 flex items-start justify-between">
        <div className="flex items-start gap-4 flex-1">
          {/* Icon */}
          <div className="text-4xl">{card.icon}</div>

          {/* Title */}
          <div>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-burgundy-900">
              {card.title}
            </h3>
            {card.description && (
              <p className="text-burgundy-700 font-serif italic mt-1">
                {card.description}
              </p>
            )}
          </div>
        </div>

        {/* Expand/Collapse Icon */}
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-gold-600"
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
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </div>

      {/* Expandable Content */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isExpanded ? "auto" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 pt-2 border-t border-burgundy-100">
          {/* Content Lines */}
          {card.content && (
            <div className="space-y-2">
              {card.content.map((line, idx) => (
                <motion.p
                  key={idx}
                  className="text-burgundy-700 font-serif leading-relaxed"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: isExpanded ? 1 : 0,
                    x: isExpanded ? 0 : -10,
                  }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  {line}
                </motion.p>
              ))}
            </div>
          )}

          {/* Bullet Points (for "Who Is It For") */}
          {card.points && (
            <ul className="space-y-2 mt-4">
              {card.points.map((point, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start gap-2 text-burgundy-700 font-serif"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: isExpanded ? 1 : 0,
                    x: isExpanded ? 0 : -10,
                  }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  <span className="text-gold-600 mt-1">•</span>
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          )}

          {/* Conclusion (for "Who Is It For") */}
          {card.conclusion && (
            <motion.p
              className="text-burgundy-900 font-serif italic mt-4 font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: isExpanded ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              {card.conclusion}
            </motion.p>
          )}

          {/* Decorative Element */}
          <motion.div
            className="mt-6 pt-4 border-t border-burgundy-100 flex items-center justify-center gap-2 text-burgundy-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <span className="text-sm font-serif">॰</span>
            <span className="text-xs tracking-widest uppercase">
              Handcrafted with Love
            </span>
            <span className="text-sm font-serif">॰</span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CraftCard;
