// Reusable Framer Motion animation variants
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.6 },
};

export const slideUp = {
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -30, opacity: 0 },
  transition: { duration: 0.5, ease: [0.6, 0.05, 0.01, 0.9] },
};

export const slideDown = {
  initial: { y: -30, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5 },
};

export const scaleIn = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.4 },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export const staggerItem = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.3 },
};

export const tapScale = {
  scale: 0.95,
};

export const parallax = (value) => ({
  initial: { y: 0 },
  animate: { y: value },
  transition: { duration: 0.5 },
});
