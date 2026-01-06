import { motion } from "framer-motion";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header Spacer */}
      <div className="h-20"></div>

      <Section variant="light" padding="lg">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Page Title */}
            <div className="text-center mb-12">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-burgundy-900 mb-4">
                Terms, Conditions & Policies
              </h1>
              <p className="text-lg md:text-xl text-burgundy-700 font-serif italic">
                A clear overview of Vastraani's guidelines for orders, shipping,
                returns, payments, and customer care.
              </p>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto space-y-8 text-burgundy-800">
              {/* Section 1 */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-burgundy-900 mb-4">
                  1. Introduction
                </h2>
                <p className="leading-relaxed">
                  Welcome to Vastraani. By using our website or purchasing from
                  us, you agree to the terms and conditions listed below.
                </p>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-burgundy-900 mb-4">
                  2. Products & Artisanship
                </h2>
                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                  <li>
                    All outfits are handcrafted/hand-painted/hand-finished.
                  </li>
                  <li>
                    Slight variations in color, print placement, or painting
                    strokes are normal.
                  </li>
                  <li>
                    Actual colors may differ slightly due to screen settings and
                    lighting.
                  </li>
                </ul>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-burgundy-900 mb-4">
                  3. Order Policy
                </h2>
                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                  <li>
                    Order confirmation will be sent via WhatsApp/email/SMS.
                  </li>
                  <li>
                    Made-to-order or hand-painted items take additional time.
                  </li>
                  <li>Orders may be declined/cancelled if required.</li>
                </ul>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-burgundy-900 mb-4">
                  4. Pricing & Payments
                </h2>
                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                  <li>Prices may change periodically without prior notice.</li>
                  <li>Secure online payments accepted.</li>
                  <li>
                    Vastraani is not responsible for payment gateway errors.
                  </li>
                  <li>Customized designs need to have advance payment.</li>
                </ul>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-burgundy-900 mb-4">
                  5. Shipping & Delivery
                </h2>
                <ul className="list-disc list-inside space-y-2 leading-relaxed mb-4">
                  <li>Pan-India shipping available.</li>
                  <li>Delivery timeline depends upon distance and areas.</li>
                </ul>
                <div className="bg-cream-100 p-4 rounded-sm border-l-4 border-gold-500">
                  <p className="font-semibold mb-2">Delivery Timelines:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Ready Products: 3–7 working days</li>
                    <li>Hand-Painted / Custom: 7–21 working days</li>
                  </ul>
                </div>
                <p className="leading-relaxed mt-4">
                  External delays due to courier, festivals, or weather may
                  occur.
                </p>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-burgundy-900 mb-4">
                  6. Return, Exchange & Refund Policy
                </h2>

                <h3 className="font-serif text-xl font-semibold text-burgundy-800 mb-3">
                  Eligibility
                </h3>
                <ul className="list-disc list-inside space-y-2 leading-relaxed mb-4">
                  <li>
                    Only defective or wrong items can be returned/exchanged.
                  </li>
                  <li>Request must be raised within 48 hours of delivery.</li>
                  <li>
                    Product must be unused, unwashed, and in original condition
                    with tags.
                  </li>
                </ul>

                <h3 className="font-serif text-xl font-semibold text-burgundy-800 mb-3">
                  Non-Returnable Items
                </h3>
                <ul className="list-disc list-inside space-y-2 leading-relaxed mb-4">
                  <li>Hand-painted outfits</li>
                  <li>Custom measurements</li>
                  <li>Sale/discounted products</li>
                  <li>Accessories</li>
                  <li>Colour or pattern variations</li>
                  <li>Fitting issues for custom orders</li>
                </ul>

                <h3 className="font-serif text-xl font-semibold text-burgundy-800 mb-3">
                  Process
                </h3>
                <ol className="list-decimal list-inside space-y-2 leading-relaxed mb-4">
                  <li>Raise a request with order ID + photos/videos.</li>
                  <li>After approval, ship the product to us within 5 days.</li>
                  <li>
                    After inspection, we will provide store credit or an
                    exchange.
                  </li>
                </ol>

                <h3 className="font-serif text-xl font-semibold text-burgundy-800 mb-3">
                  Refund
                </h3>
                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                  <li>No cash refunds.</li>
                  <li>Only shop credit (valid for 3 months) or exchange.</li>
                  <li>
                    Refusing delivery will result in deduction of two-way
                    shipping charges.
                  </li>
                </ul>
              </section>

              {/* Section 7 */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-burgundy-900 mb-4">
                  7. Cancellation Policy
                </h2>
                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                  <li>Orders can be cancelled within 2 hours only.</li>
                  <li>
                    Custom and hand-painted orders cannot be cancelled once
                    started.
                  </li>
                </ul>
              </section>

              {/* Section 8 */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-burgundy-900 mb-4">
                  8. Care Instructions
                </h2>
                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                  <li>Dry-clean only.</li>
                  <li>
                    For hand-painted sarees: Hand-wash with cold water and mild
                    shampoo. Do not squeeze, brush, or scrub. Be gentle.
                  </li>
                  <li>Store in breathable bags away from moisture.</li>
                </ul>
              </section>

              {/* Section 9 */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-burgundy-900 mb-4">
                  9. Intellectual Property
                </h2>
                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                  <li>
                    All designs, artworks, photographs, and content belong to
                    Vastraani.
                  </li>
                  <li>Copying or reproducing them is strictly prohibited.</li>
                </ul>
              </section>

              {/* Section 10 */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-burgundy-900 mb-4">
                  10. Privacy Policy
                </h2>
                <p className="leading-relaxed">
                  Customer information is kept private and used only for order
                  processing and delivery.
                </p>
              </section>

              {/* Section 11 */}
              <section>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-burgundy-900 mb-4">
                  11. Contact
                </h2>
                <p className="leading-relaxed mb-4">
                  Have a question or need help?
                </p>
                <div className="bg-burgundy-50 p-6 rounded-sm border border-burgundy-200">
                  <p className="mb-2">📍 Pune, Maharashtra</p>
                  <p className="mb-2">📧 Email: support@vastraani.com</p>
                  <p className="mb-2">📞 Phone: +91 ————</p>
                  <p>📱 Instagram: @vastraani</p>
                </div>
              </section>

              {/* Back to Home */}
              <div className="text-center pt-8 pb-4">
                <a
                  href="/"
                  className="inline-block px-8 py-3 bg-burgundy-900 text-cream-50 font-serif tracking-wider hover:bg-burgundy-800 transition-colors duration-300 rounded-sm"
                >
                  BACK TO HOME
                </a>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>
    </div>
  );
};

export default TermsAndConditions;
