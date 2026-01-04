import { motion } from "framer-motion";
import { clsx } from "clsx";

const Card = ({
  image,
  title,
  description,
  overlay = true,
  onClick,
  className = "",
  children,
  ...props
}) => {
  return (
    <motion.div
      className={clsx(
        "group relative overflow-hidden rounded-sm cursor-pointer",
        "shadow-md hover:shadow-2xl transition-all duration-500",
        className,
      )}
      whileHover={{ y: -8 }}
      onClick={onClick}
      {...props}
    >
      {/* Image */}
      {image && (
        <div className="relative aspect-[3/4] overflow-hidden">
          <motion.img
            src={image}
            alt={title || "Card image"}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />

          {/* Overlay */}
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/80 via-burgundy-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          )}
        </div>
      )}

      {/* Content */}
      {(title || description || children) && (
        <div
          className={clsx(
            "p-6",
            image && "absolute bottom-0 left-0 right-0 text-white",
            image &&
              "translate-y-full group-hover:translate-y-0 transition-transform duration-500",
          )}
        >
          {title && (
            <h3 className="font-serif text-2xl mb-2 font-semibold">{title}</h3>
          )}
          {description && (
            <p className="text-sm opacity-90 line-clamp-3">{description}</p>
          )}
          {children}
        </div>
      )}
    </motion.div>
  );
};

export default Card;
