import { motion } from "framer-motion";
import { clsx } from "clsx";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  disabled = false,
  ...props
}) => {
  const variantClasses = {
    primary: "bg-gold-600 text-white hover:bg-gold-700 border-gold-600",
    secondary:
      "bg-transparent border-2 border-gold-600 text-gold-700 hover:bg-gold-50",
    outline:
      "bg-transparent border-2 border-cream-300 text-burgundy-900 hover:bg-cream-100",
    ghost: "bg-transparent text-burgundy-900 hover:bg-cream-100",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      className={clsx(
        "font-medium rounded-sm transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "uppercase tracking-wider",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
