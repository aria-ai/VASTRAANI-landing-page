import { motion, useMotionValue, useAnimationControls } from "framer-motion";
import { useState, useEffect } from "react";
import Container from "../layout/Container";
import Section from "../layout/Section";
import { testimonials } from "../../data/content";

const Testimonials = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const controls = useAnimationControls();
  const x = useMotionValue(0);

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const cardWidth = 400 + 32; // card width + gap
  const totalWidth = cardWidth * testimonials.length;

  useEffect(() => {
    if (!isPaused && !isDragging) {
      // Get current x position
      const currentX = x.get();

      // Calculate remaining distance to complete the loop
      const targetX = -totalWidth;
      const remainingDistance = targetX - currentX;

      // Calculate duration based on remaining distance (maintain same speed)
      const speed = totalWidth / 60; // pixels per second
      const duration = Math.abs(remainingDistance) / speed;

      // Start animation from current position
      controls.start({
        x: targetX,
        transition: {
          duration: duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    } else {
      controls.stop();
    }
  }, [isPaused, isDragging, controls, totalWidth, x]);

  // Reset position when animation completes a loop
  useEffect(() => {
    const unsubscribe = x.on("change", (latest) => {
      if (latest <= -totalWidth) {
        x.set(0);
      }
    });
    return unsubscribe;
  }, [x, totalWidth]);

  return (
    <Section id="testimonials" variant="accent" padding="lg">
      <Container>
        {/* Heading */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream-50 mb-4">
            TESTIMONIALS
          </h2>
          <p className="text-lg md:text-xl text-cream-100 font-serif italic">
            What Our Customers Say
          </p>
        </motion.div>

        {/* Auto-Scrolling Carousel */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing">
          <motion.div
            className="flex gap-8 select-none"
            style={{ x }}
            animate={controls}
            drag="x"
            dragConstraints={{ left: -totalWidth, right: 0 }}
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            onHoverStart={() => setIsPaused(true)}
            onHoverEnd={() => setIsPaused(false)}
            whileTap={{ cursor: "grabbing" }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                className="glass-effect p-8 rounded-sm flex-shrink-0 w-[350px] md:w-[400px] hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Quote Icon */}
                <div className="text-gold-400 text-5xl font-serif mb-4 leading-none">
                  "
                </div>

                {/* Quote */}
                <p className="text-cream-100 leading-relaxed mb-6 italic text-base min-h-[120px]">
                  {testimonial.quote}
                </p>

                {/* Author */}
                <div className="border-t border-cream-200/20 pt-4">
                  <p className="text-cream-50 font-semibold text-lg">
                    {testimonial.author}
                  </p>
                  <p className="text-cream-200 text-sm mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Interaction Hint */}
        <p className="text-center text-cream-200/60 text-sm mt-8 italic">
          Hover to pause • Drag to scroll
        </p>
      </Container>
    </Section>
  );
};

export default Testimonials;
