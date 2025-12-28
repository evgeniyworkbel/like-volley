import { formatPhone } from "../lib";

const contacts = {
  phone: "375298020748",
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
    href: `tel:+${contacts.phone}`,
    label: formatPhone(contacts.phone),
  },
  telegram: {
    href: `https://t.me/s/${contacts.telegram}`,
    label: `@${contacts.telegram}`,
  },
  viber: {
    href: `viber://add?number=${contacts.phone.slice(1)}`,
  },
  gallery: {
    href: "https://zaviflash.wfolio.pro/disk/29-11-2024-like-volley-2-8zmnl7",
  },
} as const;
