import { motion } from "framer-motion";
import Container from "../layout/Container";
import Section from "../layout/Section";
import { testimonials } from "../../data/content";
import { staggerContainer, staggerItem } from "../animations/variants";

const Testimonials = () => {
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

        {/* Testimonials Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={staggerItem}
              className="glass-effect p-8 rounded-sm"
            >
              {/* Quote Icon */}
              <div className="text-gold-400 text-5xl font-serif mb-4">"</div>

              {/* Quote */}
              <p className="text-cream-100 leading-relaxed mb-6 italic">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="border-t border-cream-200/20 pt-4">
                <p className="text-cream-50 font-semibold">
                  {testimonial.author}
                </p>
                <p className="text-cream-200 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
};

export default Testimonials;
