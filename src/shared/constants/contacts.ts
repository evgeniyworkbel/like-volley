import { formatPhone } from "../lib";

const contacts = {
  phone: "+375298020748",
  instagram: "like.volley.by",
  telegram: "LikeVolley_club",
} as const;

export const contactsLinks = {
  locations: {
    href: "/",
  },
  instagram: {
    href: `https://www.instagram.com/${contacts.instagram}`,
    label: `@${contacts.instagram}`,
  },
  phone: {
    href: `tel:${contacts.phone}`,
    label: formatPhone(contacts.phone),
  },
  telegram: {
    name: "Telegram",
    href: `https://t.me/s/${contacts.telegram}`,
    label: `@${contacts.telegram}`,
  },
  gallery: {
    href: "https://zaviflash.wfolio.pro/disk/29-11-2024-like-volley-2-8zmnl7",
  },
} as const;
