import { coachesSectionId, faqSectionId, gallerySectionId, locationsSectionId } from "./html-attrs";

export const navLinks = {
  home: {
    title: "Главная",
    href: "/",
  },
  locations: {
    title: "Локации",
    href: "/location",
    locationsSection: `#${locationsSectionId}`,
  },
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
    locationsSection: `#${gallerySectionId}`,
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
  faq: {
    title: "FAQ",
    href: { faqSectionId },
    locationsSection: `#${faqSectionId}`,
  },
  coaches: {
    title: "Тренеры",
    href: { coachesSectionId },
    locationsSection: `#${coachesSectionId}`,
  },
} as const;
