// Template content for the landing page
// All content is easily replaceable

export const navigation = [
  { name: "HOME", href: "#home" },
  { name: "COLLECTIONS", href: "#collections" },
  { name: "HANDPAINTED", href: "#features" },
  { name: "HERITAGE", href: "#about" },
  { name: "OUR STORY", href: "#about" },
  { name: "CONTACT", href: "#footer" },
];

export const hero = {
  title: "TIMELESS WEAVES",
  subtitle: "Where Tradition Becomes Adornment",
  ctaText: "VIEW MORE",
  ctaAction: "#collections",
  backgroundImage: "/hero-bg-1.jpg",
};

export const collections = {
  heading: "ETHEREAL THREADS",
  subheading: "Where Tradition Meets Timeless Design",
  items: [
    {
      id: 1,
      image: "/collection-1.png",
      title: "Royal Heritage",
      description: "Exquisite silk sarees crafted with traditional zari work",
    },
    {
      id: 2,
      image: "/collection-2.png",
      title: "Handpainted Elegance",
      description: "Artisan hand-painted designs on premium fabrics",
    },
    {
      id: 3,
      image: "/collection-3.png",
      title: "Timeless Collections",
      description: "Curated selection of finest traditional textiles",
    },
  ],
  ctaText: "SHOP NOW",
};

export const features = {
  heading: "OUR CRAFTSMANSHIP",
  subheading: "Celebrating the Art of Traditional Weaving",
  items: [
    {
      title: "Handwoven Excellence",
      description:
        "Each piece is meticulously handwoven by master artisans with decades of experience.",
      icon: "🧵",
    },
    {
      title: "Heritage Designs",
      description:
        "Authentic patterns passed down through generations, preserving our rich cultural legacy.",
      icon: "🎨",
    },
    {
      title: "Premium Quality",
      description:
        "Only the finest silk and natural materials are used in our timeless creations.",
      icon: "✨",
    },
    {
      title: "Sustainable Craft",
      description:
        "Supporting traditional artisans and eco-friendly production methods.",
      icon: "🌿",
    },
  ],
};

export const testimonials = [
  {
    id: 1,
    quote:
      "The craftsmanship is absolutely stunning. Every saree tells a story of heritage and elegance.",
    author: "Customer Name",
    role: "Fashion Enthusiast",
  },
  {
    id: 2,
    quote:
      "BRAND NAME has become my go-to for authentic, luxurious traditional wear. Simply exceptional.",
    author: "Customer Name",
    role: "Bride",
  },
  {
    id: 3,
    quote:
      "The attention to detail and quality is unmatched. These are heirlooms in the making.",
    author: "Customer Name",
    role: "Collector",
  },
];

export const about = {
  heading: "OUR STORY",
  content: `BRAND NAME was founded with a vision to preserve and celebrate the rich heritage of traditional Indian textiles. 

For generations, master weavers have passed down their craft, creating exquisite sarees that embody timeless elegance and cultural significance. We work directly with these artisans, ensuring fair trade practices while bringing you the finest handwoven textiles.

Each piece in our collection represents hours of skilled craftsmanship, from the selection of the finest silk to the intricate weaving and embellishment. We believe that true luxury lies in authenticity, quality, and the stories woven into every thread.`,
  image: "/collection-1.png",
};

export const footer = {
  tagline: "Weaving Traditions, Creating Heirlooms",
  copyright: "© 2024 BRAND NAME. ALL RIGHTS RESERVED",
  sections: [
    {
      title: "Quick Links",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Collections", href: "#collections" },
        { name: "Contact", href: "#footer" },
      ],
    },
    {
      title: "Customer Care",
      links: [
        { name: "Shipping Info", href: "#" },
        { name: "Returns", href: "#" },
        { name: "FAQs", href: "#" },
      ],
    },
  ],
};

export const socialLinks = [
  { platform: "instagram", url: "https://instagram.com" },
  { platform: "twitter", url: "https://twitter.com" },
  { platform: "pinterest", url: "https://pinterest.com" },
  { platform: "threads", url: "https://threads.net" },
];
