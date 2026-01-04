import { motion } from "framer-motion";
import Container from "../layout/Container";
import Section from "../layout/Section";
import Grid from "../layout/Grid";
import { features } from "../../data/content";
import { staggerContainer, staggerItem } from "../animations/variants";

const Features = () => {
  return (
    <Section id="features" variant="cream" padding="lg">
      <Container>
        {/* Heading */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-burgundy-900 mb-4">
            {features.heading}
          </h2>
          <p className="text-lg md:text-xl text-burgundy-700 font-serif italic">
            {features.subheading}
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Grid columns={2}>
            {features.items.map((feature, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white p-8 rounded-sm shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="font-serif text-2xl font-semibold text-burgundy-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-burgundy-700 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Features;
