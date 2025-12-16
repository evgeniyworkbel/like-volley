import { coachesSectionId, faqSectionId, gallerySectionId, locationsSectionId } from "./html-attrs";

export const navLinks = {
  home: {
    title: "Главная",
    href: "/",
  },
  locationsSection: {
    title: "Локации",
    href: `#${locationsSectionId}`,
  },
  gallerySection: {
    title: "Галерея",
    href: `#${gallerySectionId}`,
  },
  faqSection: {
    title: "FAQ",
    href: `#${faqSectionId}`,
  },
  coachesSection: {
    title: "Тренеры",
    href: `#${coachesSectionId}`,
  },
  locations: {
    title: "Локации",
    href: "/location",
  },

  // Links for pages
  about: {
    title: "О школе",
    href: "/about",
  },
  blog: {
    title: "Блог",
    href: "/blog",
  },
  gallery: {
    title: "Галерея",
    href: "/gallery",
  },
  reviews: {
    title: "Отзывы",
    href: "/reviews",
  },
  phone: {
    title: "+375 29 802 07 48",
    href: "tel:+375298020748",
  },
  offerAgreement: {
    title: "Договор оферты",
    href: "/offer-agreement.pdf",
  },
  policy: {
    title: "Политика приватности",
    href: "/policy",
  },
} as const;
