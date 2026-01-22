/**
 * WhatsApp Utilities
 * Simple helper to generate WhatsApp links with pre-filled messages
 * Works on both web (WhatsApp Web) and mobile (WhatsApp App) automatically
 */

const WHATSAPP_NUMBER = "919423307049";

/**
 * Detect if user is on mobile device
 * @returns {boolean}
 */
const isMobileDevice = () => {
  if (typeof window === "undefined") return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
};

/**
 * Create WhatsApp link with custom message
 * Uses web.whatsapp.com for desktop and api.whatsapp.com for mobile
 * @param {string} message - The pre-filled message
 * @returns {string} - WhatsApp URL
 */
export const createWhatsAppLink = (message) => {
  const encodedMessage = encodeURIComponent(message);

  // Use web.whatsapp.com for desktop, api.whatsapp.com for mobile
  const baseUrl = isMobileDevice()
    ? "https://api.whatsapp.com/send/"
    : "https://web.whatsapp.com/send/";

  return `${baseUrl}?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}&type=phone_number&app_absent=0`;
};

/**
 * Open WhatsApp link in new tab/app
 * @param {string} whatsappUrl - The WhatsApp URL to open
 */
export const openWhatsApp = (whatsappUrl) => {
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
};

// Common message templates for reuse
export const messageTemplates = {
  contact:
    "Hi! I discovered Vastraani and would love to know more about your handcrafted sarees.",
};
