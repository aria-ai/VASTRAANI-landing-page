import { motion } from "framer-motion";

/**
 * PriceDisplay Component
 * Reusable price badge with responsive sizing and animations
 *
 * @param {number} price - Price in rupees
 * @param {string} size - 'sm' | 'md' | 'lg'
 * @param {string} className - Additional CSS classes
 */
const PriceDisplay = ({ price, size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-xl px-6 py-3",
  };

  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);

  return (
    <motion.div
      className={`
        inline-flex items-center justify-center
        bg-gradient-to-br from-burgundy-900 to-burgundy-800
        text-gold-400 font-serif font-bold
        rounded-full shadow-lg
        ${sizeClasses[size]}
        ${className}
      `}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
    >
      {formattedPrice}
    </motion.div>
  );
};

export default PriceDisplay;
