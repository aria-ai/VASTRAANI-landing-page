import { motion } from "framer-motion";
import Container from "../layout/Container";
import Section from "../layout/Section";
import { about } from "../../data/content";

const About = () => {
  return (
    <Section id="about" variant="default" padding="lg">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-sm overflow-hidden shadow-2xl">
              <img
                src={about.image}
                alt="Our Story"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/30 to-transparent" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-burgundy-900 mb-6">
              {about.heading}
            </h2>
            <div className="prose prose-lg">
              {about.content.split("\n\n").map((paragraph, index) => (
                <p
                  key={index}
                  className="text-burgundy-800 leading-relaxed mb-4 text-base md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default About;
