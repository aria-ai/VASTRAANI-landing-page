import { motion } from "framer-motion";

const PhilosophyCard = ({ card, index }) => {
  return (
    <motion.div
      className="relative bg-gradient-to-br from-cream-50 to-cream-100 rounded-sm p-8 border border-burgundy-100 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Sacred pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-32 h-32 text-gold-500 text-9xl font-serif">
          {card.icon}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-burgundy-800 to-burgundy-900 text-gold-400 text-3xl font-serif shadow-lg"
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          {card.icon}
        </motion.div>

        {/* Title */}
        <p className="text-xs font-medium tracking-widest text-burgundy-600 uppercase mb-2">
          {card.title}
        </p>

        {/* Heading */}
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-burgundy-900 mb-6">
          {card.heading}
        </h3>

        {/* Content paragraphs */}
        <div className="space-y-4 mb-6">
          {card.content.map((paragraph, idx) => (
            <p
              key={idx}
              className="text-burgundy-700 leading-relaxed font-serif text-base"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Pillars (if exists) */}
        {card.pillars && (
          <div className="space-y-3 mb-6">
            {card.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 text-burgundy-700"
              >
                <span className="text-xl">{pillar.symbol}</span>
                <span className="font-serif italic">{pillar.text}</span>
              </div>
            ))}
          </div>
        )}

        {/* Symbolizes (if exists) */}
        {card.symbolizes && (
          <div className="mb-6">
            <p className="text-sm font-semibold text-burgundy-800 mb-3 uppercase tracking-wide">
              Symbolizes:
            </p>
            <ul className="space-y-2">
              {card.symbolizes.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-burgundy-700"
                >
                  <span className="text-gold-600 mt-1">•</span>
                  <span className="font-serif">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Essence */}
        <div className="pt-6 border-t border-burgundy-200">
          <p className="text-burgundy-900 font-serif italic font-semibold text-lg">
            {card.essence}
          </p>
        </div>

        {/* Tagline (if exists) */}
        {card.tagline && (
          <div className="mt-4">
            <p className="text-gold-700 font-serif text-sm tracking-wider uppercase">
              {card.tagline}
            </p>
          </div>
        )}

        {/* Footer (if exists) */}
        {card.footer && (
          <div className="mt-6 pt-6 border-t border-burgundy-200">
            <p className="text-burgundy-700 font-serif italic text-sm leading-relaxed">
              {card.footer}
            </p>
          </div>
        )}
      </div>

      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-burgundy-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default PhilosophyCard;
