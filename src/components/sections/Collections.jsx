import { motion } from "framer-motion";
import Container from "../layout/Container";
import Section from "../layout/Section";
import Grid from "../layout/Grid";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { collections } from "../../data/content";
import { staggerContainer, staggerItem } from "../animations/variants";

const Collections = () => {
  return (
    <Section id="collections" variant="light" padding="lg">
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
            {collections.heading}
          </h2>
          <p className="text-lg md:text-xl text-burgundy-700 font-serif italic">
            {collections.subheading}
          </p>
        </motion.div>

        {/* Collections Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Grid columns={3}>
            {collections.items.map((item, index) => (
              <motion.div key={item.id} variants={staggerItem}>
                <Card
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  overlay={true}
                />
              </motion.div>
            ))}
          </Grid>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Button variant="secondary" size="lg">
            {collections.ctaText}
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Collections;
