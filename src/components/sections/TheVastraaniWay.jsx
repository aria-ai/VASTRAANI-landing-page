import { motion } from "framer-motion";
import { useState } from "react";
import Container from "../layout/Container";
import Section from "../layout/Section";
import CraftCard from "../ui/CraftCard";
import { vastraaniWay } from "../../data/vastraaniWay";

/**
 * TheVastraaniWay Section Component
 * Displays brand philosophy, values, and craft approach
 *
 * Single Responsibility: Orchestrate display of craft philosophy cards
 */
const TheVastraaniWay = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <Section id="vastraani-way" variant="light" padding="xl">
      <Container>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative Icon */}
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-burgundy-800 to-burgundy-900 flex items-center justify-center">
              <span className="text-gold-400 text-2xl font-serif">✨</span>
            </div>
          </motion.div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-burgundy-900 mb-4">
            {vastraaniWay.sectionTitle}
          </h2>

          <p className="text-lg md:text-xl text-burgundy-700 font-serif italic">
            {vastraaniWay.sectionSubtitle}
          </p>

          {/* Decorative Divider */}
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

        {/* Cards - Single Column */}
        <div className="max-w-4xl mx-auto space-y-4">
          {vastraaniWay.cards.map((card, index) => (
            <CraftCard
              key={card.id}
              card={card}
              index={index}
              isExpanded={expandedCard === card.id}
              onClick={() => handleCardClick(card.id)}
            />
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="inline-flex flex-col items-center gap-4">
            <div className="flex items-center gap-3 text-burgundy-600">
              <span className="text-3xl font-serif">॰</span>
              <span className="text-sm tracking-widest uppercase font-medium">
                Made with Intention, Not Repetition
              </span>
              <span className="text-3xl font-serif">॰</span>
            </div>
            <p className="text-burgundy-500 font-serif italic text-sm max-w-md">
              Each piece is a testament to slow fashion, mindful creation, and
              the timeless beauty of handcrafted art.
            </p>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default TheVastraaniWay;
