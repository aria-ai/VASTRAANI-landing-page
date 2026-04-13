// Vastraani - Real content from client
// Updated: January 2026

import {
  pushpadharaCollections,
  pushpadharaCollectionInfo,
  jhankaarCollections,
  jhankaarCollectionInfo,
  phaguncollections,
  phaguncollectionInfo,
  dhoopChhaonCollections,
  dhoopChhaonCollectionInfo,
} from "./collections";

export const navigation = [
  { name: "HOME", href: "#home" },
  { name: "COLLECTIONS", href: "#collections" },
  { name: "OUR STORY", href: "#about" },
  { name: "WHY VASTRAANI", href: "#features" },
  { name: "CONTACT", href: "#footer" },
];

export const hero = {
  logo: "/vastraani_logo.png",
  subtitle: "From Divinity To Design",
  description:
    "Wearable art. Indian heritage. Modern elegance. Thoughtfully crafted — where tradition, craftsmanship, and every fabric breathe a story.",
  ctaText: "EXPLORE THE COLLECTION",
  ctaAction: "#collections",
  backgroundImage: "/hero-bg-1.jpg",
};

export const collections = {
  heading: "THE PUSHPADHARA COLLECTION",
  subheading: "First Bloom — Where every petal tells a story",
  description:
    "Hand-painted sarees on pure khadi cotton, celebrating colours, traditions, and timeless craftsmanship.",
  items: pushpadharaCollections,
};

export const jhankaarCollection = {
  id: "jhankaar",
  heading: "THE झंकार COLLECTION",
  tabLabel: "झंकार — Jhankaar",
  subheading: "When your outfit walks… it sings. ✨",
  description:
    "Where elegance doesn't just shine — it sounds beautiful. Maslin suit sets adorned with signature coin lace that creates a graceful music with every step.",
  items: jhankaarCollections,
  collectionInfo: jhankaarCollectionInfo,
};

/**
 * Master registry — order here controls tab order in CollectionsHub.
 * To add a new collection: import its data above and push an entry here.
 */
export const allCollections = [
  {
    id: "pushpadhara",
    tabLabel: "Pushpadhara",
    heading: "THE PUSHPADHARA COLLECTION",
    subheading: "First Bloom — Where every petal tells a story",
    description:
      "Hand-painted sarees on pure khadi cotton, celebrating colours, traditions, and timeless craftsmanship.",
    items: pushpadharaCollections,
    collectionInfo: pushpadharaCollectionInfo,
    bottomNote: "Handcrafted on Khadi Cotton",
  },
  {
    id: "jhankaar",
    tabLabel: "झंकार — Jhankaar",
    heading: "THE झंकार COLLECTION",
    subheading: "When your outfit walks… it sings. ✨",
    description:
      "Where elegance doesn't just shine — it sounds beautiful. Maslin suit sets adorned with signature coin lace that creates a graceful music with every step.",
    items: jhankaarCollections,
    collectionInfo: jhankaarCollectionInfo,
    bottomNote: "Maslin · Zari Embroidery · Mirror Work · Coin Lace",
  },
  {
    id: "phagun",
    tabLabel: "Phagun",
    heading: "THE PHAGUN COLLECTION",
    subheading: "Woven with festive spirit, worn with grace.",
    description:
      "Premium Russian Jacquard suit sets featuring intricate zari weaving and handcrafted detailing — each piece a celebration of festive tradition.",
    items: phaguncollections,
    collectionInfo: phaguncollectionInfo,
    bottomNote: "Russian Jacquard · Zari Weaving · Hand Zardosi",
  },
  {
    id: "dhoop-chhaon",
    tabLabel: "Dhoop Chhaon ☀️",
    heading: "DHOOP CHHAON — THE SUMMER WHISPER",
    subheading: "Where the warmth of the sun meets the soul of shade.",
    description:
      "Seven hand-painted Mulmul sarees crafted for the woman on the go — lightweight, breathable, and effortlessly chic in the peak of summer heat.",
    items: dhoopChhaonCollections,
    collectionInfo: dhoopChhaonCollectionInfo,
    bottomNote: "Mul Mulmul Cotton · Hand-Painted · Contrast Lace · Blouse Included",
  },
];

export const features = {
  heading: "WHY CHOOSE VASTRAANI?",
  subheading: "Designed for the woman who loves tradition with a modern edge",
  items: [
    {
      title: "Handcrafted with Precision",
      description:
        "Every piece is meticulously handcrafted with precision and passion, ensuring the highest quality.",
      icon: "✨",
    },
    {
      title: "Divine Heritage",
      description:
        "Inspired by India's divine heritage and sacred traditions, woven into every design.",
      icon: "🙏",
    },
    {
      title: "Art-Driven Designs",
      description:
        "Art-driven designs, not mass-produced. Each piece tells a unique story.",
      icon: "🎨",
    },
    {
      title: "Premium Quality",
      description:
        "Soft fabrics and premium finishing. Made for comfort, confidence, and celebration.",
      icon: "👗",
    },
    {
      title: "Ethical Production",
      description:
        "Ethical, small-batch production supporting traditional artisans and sustainable practices.",
      icon: "🌿",
    },
    {
      title: "Timeless Elegance",
      description:
        "Designed beyond trends — we create experiences that feel soulful, graceful, and timeless.",
      icon: "💫",
    },
  ],
};

export const testimonials = [
  {
    id: 1,
    quote:
      "I wore the hand-painted saree from Vastraani to my sister's wedding and I've never felt more beautiful. The compliments haven't stopped! Every stroke tells a story.",
    author: "Priya Sharma",
    role: "Wedding Guest, Mumbai",
  },
  {
    id: 2,
    quote:
      "The craftsmanship is absolutely divine. I bought a festive collection piece and the detailing is museum-quality. You can feel the devotion in every thread.",
    author: "Ananya Kapoor",
    role: "Art Collector, Delhi",
  },
  {
    id: 3,
    quote:
      "As a bride, I wanted something unique that honored tradition while feeling modern. Vastraani delivered exactly that. My wedding saree became a family heirloom the moment I wore it.",
    author: "Meera Patel",
    role: "Bride, Ahmedabad",
  },
  {
    id: 4,
    quote:
      "I've been searching for ethical, artisan-made clothing for years. Vastraani is everything I hoped for — beautiful, sustainable, and deeply meaningful.",
    author: "Kavya Reddy",
    role: "Sustainable Fashion Advocate, Bangalore",
  },
  {
    id: 5,
    quote:
      "The Indo-Western fusion collection is perfect for my lifestyle. I can wear it to work events and cultural celebrations. Versatile, elegant, and so comfortable!",
    author: "Shreya Malhotra",
    role: "Corporate Professional, Pune",
  },
  {
    id: 6,
    quote:
      "I gifted my mother a Vastraani saree for her 60th birthday. She cried when she saw it. The blend of tradition and artistry touched her soul. Thank you for creating such magic.",
    author: "Nandini Iyer",
    role: "Daughter & Gift Giver, Chennai",
  },
  {
    id: 7,
    quote:
      "Every piece from Vastraani feels like wearable poetry. I wore their festive collection to Diwali celebrations and felt like royalty. The fabric, the colors, the embroidery — perfection.",
    author: "Aarohi Deshmukh",
    role: "Festive Wear Enthusiast, Nagpur",
  },
  {
    id: 8,
    quote:
      "As someone who appreciates art, I see Vastraani as more than clothing. These are canvases that move, breathe, and come alive when you wear them. Absolutely stunning.",
    author: "Ishita Bose",
    role: "Fine Arts Teacher, Kolkata",
  },
  {
    id: 9,
    quote:
      "The quality is unmatched. I've bought from many brands, but nothing compares to the softness, finish, and attention to detail that Vastraani offers. Worth every penny.",
    author: "Divya Menon",
    role: "Fashion Enthusiast, Kochi",
  },
];

export const about = {
  heading: "OUR STORY",
  content: `Vastraani began with a simple belief — that clothing is a form of devotion.

From hand-painted art to thoughtfully stitched silhouettes, our journey is rooted in culture, emotion, and gratitude. We honour Indian craftsmanship, celebrate feminine grace, and create designs that speak softly yet leave a lasting impression.

Every collection is inspired by life's deeper moments — Nature, memories, festivals, relationships, and the beauty within simplicity.

Vastraani is not a brand. It is a feeling — of purity, pride, and personal expression.`,
  mission:
    "To bring divine-inspired, artistically crafted ethnic wear to modern women who value elegance, culture, and emotion.",
  vision:
    "To redefine Indian ethnic wear through soulful storytelling, responsible craftsmanship, and timeless design.",
  image: "/collection-1.jpg",
};

export const brandPhilosophy = {
  sectionTitle: "Understanding Our Sacred Journey",
  subtitle: "Every thread tells a story, every pattern holds meaning",

  cards: [
    {
      id: "brand-name",
      icon: "दि",
      title: "Brand Name Meaning",
      heading: "दि VASTRAANI",
      content: [
        '"दि VASTRAANI" is a sacred union of identity, language, and philosophy.',
        "\"दि\" is inspired by 'Divya/दिव्या' — the soul behind the brand.",
        'It also means "THE" (दि), symbolizing uniqueness, authority, and singular presence.',
        '"VASTRAANI" comes from Sanskrit, meaning clothing / garments, but in its truest sense, it represents that which adorns the body and nurtures the soul.',
      ],
      essence: "THE garments that carry divinity, intention, and art.",
      tagline: "DIVINITY TO DESIGN",
    },
    {
      id: "tagline",
      icon: "॰",
      title: "Tagline Meaning",
      heading: "Divinity to Design",
      content: [
        "This tagline expresses the journey of each garment:",
        "From spiritual inspiration → to thoughtful design → to wearable art.",
      ],
      pillars: [
        { text: "Faith meets fabric", symbol: "🕉️" },
        { text: "Culture meets creativity", symbol: "🎨" },
        { text: "Soul meets silhouette", symbol: "✨" },
      ],
      essence:
        "Each piece carries energy, intention, and story, not just style.",
    },
    {
      id: "logo-symbol",
      icon: "🔱",
      title: "Logo Symbol Meaning",
      heading: "TRINETRA (Shiva–Shakti)",
      content: [
        "The logo is inspired by the Trinetra — the third eye of Shiva–Shakti.",
      ],
      symbolizes: [
        "Divine consciousness",
        "Inner vision & awareness",
        "Balance of masculine and feminine energy",
        "Creation through cosmic harmony",
      ],
      essence: "True design is born when divinity meets creativity.",
      footer:
        'Every creation from "दि VASTRAANI" is not just stitched, but awakened — guided by intuition, rooted in tradition, and elevated through art.',
    },
  ],
};

export const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/d_vastraani?",
    icon: "instagram",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/vastraani",
    icon: "facebook",
  },
  {
    name: "Pinterest",
    url: "https://www.pinterest.com/vastraani",
    icon: "pinterest",
  },
];

export const footer = {
  tagline: "Weaving Divinity, Creating Heirlooms",
  aboutShort:
    "Vastraani brings divinity, artistry, and elegance into every weave. Handcrafted ethnic wear that feels soulful, graceful, and timeless.",
  copyright: "© 2026 VASTRAANI. ALL RIGHTS RESERVED",
  contact: {
    email: "d.vastraani@gmail.com",
    phone: "+91-9423307049",
    whatsapp: "919423307049",
    location: "Pune, Maharashtra",
  },
  sections: [
    {
      title: "Quick Links",
      links: [
        { name: "Our Story", href: "#about" },
        { name: "Collections", href: "#collections" },
        { name: "Why Vastraani", href: "#features" },
      ],
    },
    {
      title: "Customer Care",
      links: [
        { name: "Contact Us", href: "#footer" },
        { name: "Shipping Info", href: "#" },
        { name: "Returns", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Terms & Conditions", href: "/terms" },
        { name: "Privacy Policy", href: "/terms#privacy" },
      ],
    },
  ],
};

export const bespoke = {
  heading: "BESPOKE AND CUSTOMIZATION",
  subheading:
    "At our brand, we believe every woman deserves an outfit that feels uniquely hers.",
  description:
    "We offer customized outfit designing services along with personalized hand-painted sarees crafted specially according to your vision.",
  whatCanBeCustomized: {
    title: "What Can Be Customized?",
    outfits: {
      title: "For Outfits:",
      items: [
        "Fabric selection",
        "Color palette",
        "Silhouette & fitting",
        "Sleeve pattern, neckline, length",
        "Dupatta style & detailing",
      ],
    },
    sarees: {
      title: "For Hand-Painted Sarees:",
      items: [
        "Change in color combinations of prints",
        "Custom motifs or themes",
        "Fabric choice (organza, silk, cotton, etc.)",
        "Border or pallu detailing modifications",
        "Personal storytelling elements",
      ],
    },
  },
  note: "Whether it’s for a wedding, special occasion, or a meaningful gift, we work closely with you to create something truly personal and timeless.",
  howItWorks: {
    title: "How It Works:",
    steps: [
      "Share your requirements with us.",
      "We discuss design details and fabric options.",
      "Design confirmation & advance payment.",
      "Your customized piece is handcrafted with care.",
    ],
  },
  policy:
    "Please note: Customized orders require additional processing time and are non-returnable.",
  contact: {
    text: "To start your custom order, contact us at:",
    email: "d.vastraani@gmail.com",
    phone: "+919423307049",
  },
};

export const returnsPolicy = {
  title: "Returns & Exchange Policy",
  content: [
    {
      subtitle: "General Policy",
      text: [
        "At our brand, every piece is thoughtfully designed and carefully handcrafted to ensure premium quality and uniqueness.",
        "Since most of our outfits are made-to-order, customized, or hand-painted, **we do not accept returns once the order has been processed.**",
      ],
    },
    {
      subtitle: "Exchange Policy",
      text: [
        "We offer exchanges only in the following cases:",
        "• Size issue (exchange request must be raised within 48 hours of delivery)",
        "• Product received in damaged condition (unboxing video required)",
        "• Wrong product received",
      ],
    },
    {
      subtitle: "Items must be:",
      text: [
        "• Unworn and unused",
        "• In original packaging",
        "• With all tags intact",
      ],
    },
    {
      subtitle: "Non-Returnable Items",
      text: [
        "• Customized or altered outfits",
        "• Hand-painted pieces",
        "• Discounted or sale items",
        "• International orders",
      ],
    },
    {
      subtitle: "Refunds",
      text: [
        "Refunds (if applicable) will be processed only after the returned product passes quality inspection. Shipping charges are non-refundable.",
      ],
    },
    {
      subtitle: "Important Note",
      text: [
        "Due to lighting and photography, slight color variations may occur. Minor irregularities in hand-painted or handcrafted products are part of the artistry and not considered defects.",
      ],
    },
    {
      subtitle: "Contact for Returns",
      text: [
        "For any return or exchange request, please contact us at:",
        "📩 d.vastraani@gmail.com within 48 hours of receiving your order.",
      ],
    },
  ],
};

export const shippingPolicy = {
  title: "Shipping Information",
  content: [
    {
      subtitle: "Packaging",
      text: [
        "We take great care in packaging and delivering your order safely to your doorstep.",
      ],
    },
    {
      subtitle: "Processing Time",
      text: [
        "All our pieces are thoughtfully handcrafted and made-to-order.",
        "• Processing time: 7–14 working days",
        "• Customized orders may take 10–21 working days",
        "You will receive a confirmation once your order is ready to ship.",
      ],
    },
    {
      subtitle: "Domestic Shipping (Within India)",
      text: [
        "• Delivery time: 3–7 working days after dispatch",
        "• Shipping charges: Calculated at checkout (or Free above ₹5000 at first order)",
        "Tracking details will be shared via email/WhatsApp once shipped.",
      ],
    },
    {
      subtitle: "International Shipping",
      text: [
        "• Delivery time: 7–15 working days after dispatch",
        "• Shipping charges vary by location",
        "• Customs duties (if applicable) must be borne by the customer",
      ],
    },
    {
      subtitle: "Delays",
      text: [
        "While we aim for timely delivery, delays due to courier issues, natural conditions, or unforeseen circumstances are beyond our control.",
      ],
    },
    {
      subtitle: "Important Note",
      text: [
        "Please ensure the shipping address and contact details are accurate. We are not responsible for delays or losses due to incorrect information provided.",
      ],
    },
  ],
};
