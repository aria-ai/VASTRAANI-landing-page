import { motion } from "framer-motion";
import Container from "../layout/Container";
import Section from "../layout/Section";
import PhilosophyCard from "../ui/PhilosophyCard";
import { brandPhilosophy } from "../../data/content";

const BrandPhilosophy = () => {
  return (
    <Section id="philosophy" variant="light" padding="xl">
      <Container>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative element */}
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-burgundy-800 to-burgundy-900 flex items-center justify-center">
              <span className="text-gold-400 text-2xl font-serif">॰</span>
            </div>
          </motion.div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-burgundy-900 mb-4">
            {brandPhilosophy.sectionTitle}
          </h2>

          <p className="text-lg md:text-xl text-burgundy-700 font-serif italic max-w-3xl mx-auto">
            {brandPhilosophy.subtitle}
          </p>

          {/* Decorative divider */}
          <motion.div
            className="mt-8 flex items-center justify-center gap-4"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent max-w-md w-full" />
          </motion.div>
        </motion.div>

        {/* Philosophy Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {brandPhilosophy.cards.map((card, index) => (
            <PhilosophyCard key={card.id} card={card} index={index} />
          ))}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 text-burgundy-600">
            <span className="text-2xl font-serif">॰</span>
            <span className="text-sm tracking-widest uppercase font-medium">
              From Heart to Heritage
            </span>
            <span className="text-2xl font-serif">॰</span>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default BrandPhilosophy;
