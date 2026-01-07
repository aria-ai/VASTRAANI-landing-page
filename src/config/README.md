# Contact Configuration Guide

## Overview
All contact information and social links are now centralized in `/src/config/contact.js` for easy maintenance.

## Files Structure

```
src/
├── config/
│   └── contact.js          # Single source of truth for all contact info
├── components/
│   ├── icons/
│   │   ├── PinterestIcon.jsx
│   │   ├── WhatsAppIcon.jsx
│   │   └── GmailIcon.jsx
│   └── ui/
│       └── SocialIcons.jsx  # Now imports icon components
└── data/
    └── content.js           # Re-exports socialLinks from config
```

## How to Update Contact Information

### Update Email, Phone, or Location
Edit `/src/config/contact.js`:

```javascript
export const contactInfo = {
  email: "your.email@gmail.com",
  phone: "+91-XXXXXXXXXX",
  whatsapp: "91XXXXXXXXXX",  // No + or - for wa.me
  location: "Your City, State",
};
```

### Update Social Media Links
Edit `/src/config/contact.js`:

```javascript
export const socialMedia = {
  instagram: {
    name: "@your_handle",
    url: "https://www.instagram.com/your_handle",
  },
  pinterest: {
    name: "Your Name",
    url: "https://pinterest.com/yourprofile",
  },
};
```

## Device-Aware Links

The config automatically generates device-aware links:
- **Email**: `mailto:` links open default email client
- **Phone**: `tel:` links open phone dialer on mobile
- **WhatsApp**: `wa.me` links open WhatsApp app/web based on device

## Adding New Icons

1. Create icon component in `/src/components/icons/YourIcon.jsx`
2. Import it in `/src/components/ui/SocialIcons.jsx`
3. Add to `ICON_MAP` object
4. Add link to `/src/config/contact.js`

## Benefits

✅ **Single Source of Truth**: Update contact info in one place
✅ **Reusable Icons**: Icon components can be used anywhere
✅ **Type Safety**: Centralized config makes it easier to track
✅ **Maintainable**: No scattered hardcoded values
