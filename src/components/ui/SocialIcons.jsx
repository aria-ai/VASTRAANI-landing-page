import { motion } from "framer-motion";
import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { clsx } from "clsx";
import PinterestIcon from "../icons/PinterestIcon";
import WhatsAppIcon from "../icons/WhatsAppIcon";
import GmailIcon from "../icons/GmailIcon";

const ICON_MAP = {
  instagram: InstagramLogoIcon,
  twitter: TwitterLogoIcon,
  pinterest: PinterestIcon,
  whatsapp: WhatsAppIcon,
  gmail: GmailIcon,
};

const SocialIcons = ({
  links = [],
  color = "burgundy",
  size = "md",
  className = "",
}) => {
  const sizeClasses = {
    sm: "w-5 h-5",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  return (
    <div className={clsx("flex gap-4", className)}>
      {links.map((link, index) => {
        const Icon = ICON_MAP[link.icon.toLowerCase()];

        if (!Icon) return null;

        return (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              "transition-colors duration-300",
              color === "burgundy"
                ? "text-burgundy-700 hover:text-gold-600"
                : "text-cream-50 hover:text-gold-400",
            )}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon className={sizeClasses[size]} />
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
