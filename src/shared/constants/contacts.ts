const contacts = {
  instagram: "like.volley.by",
  telegram: "LikeVolley_club",
} as const;

export const contactsLinks = {
  locations: {
    href: "https://yandex.by/maps/-/CLdpBNK4",
  },
  instagram: {
    href: `https://www.instagram.com/${contacts.instagram}`,
    label: `@${contacts.instagram}`,
  },
  telegram: {
    href: `https://t.me/s/${contacts.telegram}`,
    label: `@${contacts.telegram}`,
  },
} as const;
