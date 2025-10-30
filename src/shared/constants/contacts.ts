import { formatPhone } from "../lib";

const contacts = {
  phone: "+375298020748",
  instagram: "LikeVolley_club",
  telegram: "LikeVolley_club",
} as const;

export const contactsLinks = {
  locations: {
    href: "/",
  },
  instagram: {
    href: "https://www.instagram.com/like.volley.by",
    label: `@${contacts.instagram}`,
  },
  phone: {
    href: "tel:+375298020748",
    label: formatPhone(`${contacts.phone}`),
  },
  telegram: {
    href: "https://t.me/s/LikeVolley_club",
    label: `@${contacts.telegram}`,
  },
  gallery: {
    href: "https://zaviflash.wfolio.pro/disk/29-11-2024-like-volley-2-8zmnl7",
  },
} as const;
