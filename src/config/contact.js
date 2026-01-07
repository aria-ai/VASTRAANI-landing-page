// Contact Configuration
// Single source of truth for all contact information and links

export const contactInfo = {
  email: "d.vastraani@gmail.com",
  phone: "+91-XXXXXXXXXX",
  whatsapp: "91XXXXXXXXXX", // Without + or - for wa.me link
  location: "Pune, Maharashtra",
};

// Device-aware contact links
export const contactLinks = {
  email: `mailto:${contactInfo.email}`,
  phone: `tel:${contactInfo.phone}`,
  whatsapp: `https://wa.me/${contactInfo.whatsapp}`,
};

// Social media links
export const socialMedia = {
  instagram: {
    name: "@d_vastraani",
    url: "https://www.instagram.com/d_vastraani",
  },
  pinterest: {
    name: "Vastraani",
    url: "https://pin.it/6MOqHJ09c",
  },
};

// Social links array for SocialIcons component
export const socialLinks = [
  { platform: "instagram", url: socialMedia.instagram.url },
  { platform: "pinterest", url: socialMedia.pinterest.url },
  { platform: "whatsapp", url: contactLinks.whatsapp },
  { platform: "gmail", url: contactLinks.email },
];
