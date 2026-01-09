import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { useState, useEffect } from "react";
import Button from "../ui/Button";
import { hero } from "../../data/content";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Transform values for logo animation
  // Logo moves from center to top-left header position
  const logoScale = useTransform(scrollY, [0, 200], [1, 0.23]);
  const logoXPercent = useTransform(scrollY, [0, 200], [0, -44]);
  const logoYPercent = useTransform(scrollY, [0, 200], [0, -28]);

  // Use motion template for calc values
  const logoX = useMotionTemplate`calc(-50% + ${logoXPercent}vw)`;
  const logoY = useMotionTemplate`calc(-50% + ${logoYPercent}vh)`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${hero.backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-900/60 via-burgundy-900/40 to-burgundy-900/70" />
      </motion.div>

      {/* Animated Logo - Transitions from center to header */}
      <motion.img
        src={hero.logo}
        alt="Vastraani"
        className="fixed top-1/3 left-1/2 z-50 h-40 md:h-48 lg:h-64 w-auto pointer-events-none"
        style={{
          scale: logoScale,
          x: logoX,
          y: logoY,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Spacer for logo */}
        <div className="h-40 md:h-48 lg:h-64 mb-6 md:mb-8" />

        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-gold-400 font-serif italic mb-4 md:mb-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {hero.subtitle}
        </motion.p>

        <motion.p
          className="text-base md:text-lg lg:text-xl text-cream-100 font-sans mb-8 md:mb-12 max-w-2xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {hero.description}
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => scrollToSection(hero.ctaAction)}
          >
            {hero.ctaText}
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-cream-50"
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
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
