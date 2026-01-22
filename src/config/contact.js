/**
 * Contact Configuration
 * Centralized contact information for Vastraani
 *
 * WhatsApp link format: https://wa.me/<country_code><number>
 * This format automatically handles:
 * - Desktop: Opens WhatsApp Web
 * - Mobile: Opens WhatsApp App
 */

export const contactInfo = {
  phone: "+919423307049",
  phoneDisplay: "+91 94233 07049",
  email: "contact@vastraani.com",
  instagram: "@vastraani",
  address: "India",
};

export const contactLinks = {
  // WhatsApp - automatically redirects to web or app based on device
  whatsapp: "https://wa.me/919423307049",

  // Phone - tel: protocol for click-to-call
  phone: "tel:+919423307049",

  // Email - mailto: protocol
  email: "mailto:contact@vastraani.com",

  // Instagram
  instagram: "https://instagram.com/vastraani",
};
