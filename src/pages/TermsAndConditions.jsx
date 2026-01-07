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
                <div className="bg-burgundy-50 p-6 rounded-sm border border-burgundy-200 space-y-3">
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-burgundy-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <p>📍 Pune, Maharashtra</p>
                  </div>

                  <a
                    href="mailto:d.vastraani@gmail.com"
                    className="flex items-center gap-3 hover:text-burgundy-600 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-burgundy-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <p>📧 Email: d.vastraani@gmail.com</p>
                  </a>

                  <a
                    href="tel:+91-XXXXXXXXXX"
                    className="flex items-center gap-3 hover:text-burgundy-600 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-burgundy-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <p>📞 Phone: +91-XXXXXXXXXX</p>
                  </a>

                  <a
                    href="https://wa.me/91XXXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-burgundy-600 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-burgundy-700"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    <p>📱 WhatsApp: +91-XXXXXXXXXX</p>
                  </a>

                  <a
                    href="https://www.instagram.com/d_vastraani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-burgundy-600 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-burgundy-700"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <p>📷 Instagram: @d_vastraani</p>
                  </a>
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
