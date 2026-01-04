import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import Container from "../layout/Container";
import { navigation } from "../../data/content";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-cream-50/95 backdrop-blur-md shadow-md"
          : "bg-transparent",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <nav className="flex items-center justify-between py-4 md:py-6">
          {/* Logo */}
          <motion.div className="flex items-center" whileHover={{ scale: 1.2 }}>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="flex flex-col items-center"
            >
              <div
                className={clsx(
                  "w-24 h-24 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-1",
                  // "bg-burgundy-800 border-2 border-gold-500",
                )}
              >
                {/* <span className="text-gold-400 text-xl md:text-2xl font-serif italic">
                  V
                </span> */}
                <img
                  src="./vastraani_logo.png"
                  alt="Our Story"
                  className="w-full h-full object-contain"
                />
              </div>
              {/* <span
                className={clsx(
                  "font-serif text-lg md:text-xl font-semibold tracking-wider",
                  scrolled ? "text-burgundy-900" : "text-cream-50",
                )}
              >
                VASTRAANI
              </span> */}
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={clsx(
                  "text-sm font-medium tracking-wider transition-colors duration-300",
                  scrolled
                    ? "text-burgundy-900 hover:text-gold-600"
                    : "text-cream-50 hover:text-gold-400",
                )}
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={clsx(
              "md:hidden p-2",
              scrolled ? "text-burgundy-900" : "text-cream-50",
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden pb-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col gap-3 pt-4 border-t border-burgundy-200">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-burgundy-900 hover:text-gold-600 text-sm font-medium tracking-wider py-2"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </Container>
    </motion.header>
  );
};

export default Header;
