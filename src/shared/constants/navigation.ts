import { coachesSectionId, faqSectionId, gallerySectionId, locationsSectionId } from "./html-attrs";
import { LinkHref } from "../types";

export const navLinks: Record<string, { title: string; href: LinkHref }> = {
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
  offerAgreement: {
    title: "Договор оферты",
    href: "/offer-agreement",
  },
  policy: {
    title: "Политика приватности",
    href: "/policy",
  },
} as const;
