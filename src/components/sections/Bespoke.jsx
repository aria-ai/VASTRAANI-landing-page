import { motion } from "framer-motion";
import Container from "../layout/Container";
import Section from "../layout/Section";
import { bespoke } from "../../data/content";

const Bespoke = () => {
  return (
    <Section id="bespoke" variant="light" padding="lg">
      <Container>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold-500 font-serif italic text-lg mb-2 block">
            {bespoke.subheading}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-burgundy-900 mb-6">
            {bespoke.heading}
          </h2>
          <p className="text-burgundy-700 max-w-2xl mx-auto leading-relaxed">
            {bespoke.description}
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
          {/* Customization Options */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-sm shadow-lg border border-burgundy-100"
          >
            <h3 className="font-serif text-2xl text-burgundy-800 mb-8 border-b border-gold-200 pb-4">
              {bespoke.whatCanBeCustomized.title}
            </h3>

            <div className="space-y-8">
              {/* Outfits */}
              <div>
                <h4 className="font-serif text-xl text-burgundy-700 mb-4 flex items-center gap-3">
                  <span className="text-gold-500 text-2xl">✂️</span>
                  {bespoke.whatCanBeCustomized.outfits.title}
                </h4>
                <ul className="space-y-3 pl-4 border-l-2 border-gold-100/50">
                  {bespoke.whatCanBeCustomized.outfits.items.map(
                    (item, idx) => (
                      <li
                        key={idx}
                        className="text-burgundy-600 flex items-start gap-2"
                      >
                        <span className="text-gold-400 mt-1.5 text-xs">◆</span>
                        <span>{item}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              {/* Sarees */}
              <div>
                <h4 className="font-serif text-xl text-burgundy-700 mb-4 flex items-center gap-3">
                  <span className="text-gold-500 text-2xl">🎨</span>
                  {bespoke.whatCanBeCustomized.sarees.title}
                </h4>
                <ul className="space-y-3 pl-4 border-l-2 border-gold-100/50">
                  {bespoke.whatCanBeCustomized.sarees.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-burgundy-600 flex items-start gap-2"
                    >
                      <span className="text-gold-400 mt-1.5 text-xs">◆</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* How It Works & Contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-12"
          >
            {/* How It Works */}
            <div>
              <h3 className="font-serif text-2xl text-burgundy-800 mb-6">
                {bespoke.howItWorks.title}
              </h3>
              <div className="space-y-6">
                {bespoke.howItWorks.steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-burgundy-50 border border-burgundy-100 flex items-center justify-center text-burgundy-800 font-serif font-bold group-hover:bg-burgundy-800 group-hover:text-gold-400 transition-colors duration-300">
                      {idx + 1}
                    </div>
                    <p className="text-burgundy-700 pt-2 text-lg">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Note & Policy */}
            <div className="bg-burgundy-50/50 p-6 rounded-sm border-l-4 border-gold-400">
              <p className="text-burgundy-800 italic mb-4 font-serif text-lg">
                "{bespoke.note}"
              </p>
              <p className="text-xs text-burgundy-500 uppercase tracking-widest font-semibold">
                {bespoke.policy}
              </p>
            </div>

            {/* Contact CTA */}
            <div className="text-center md:text-left pt-4">
              <p className="text-burgundy-600 mb-3">{bespoke.contact.text}</p>
              <a
                href={`mailto:${bespoke.contact.email}`}
                className="inline-flex items-center gap-2 text-xl font-serif text-burgundy-900 hover:text-gold-600 transition-colors border-b border-gold-400 pb-1"
              >
                <span>💌 {bespoke.contact.email}</span>
              </a>
              <div className="mt-2">
                <a
                  href={`tel:${bespoke.contact.phone.replace(/\D/g, "")}`}
                  className="text-lg text-burgundy-800 hover:text-gold-600 transition-colors"
                >
                  📱 {bespoke.contact.phone}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default Bespoke;
