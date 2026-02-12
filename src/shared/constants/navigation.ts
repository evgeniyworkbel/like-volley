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
  // Links for pages
  policy: {
    title: "Политика приватности",
    href: "/policy",
  },
  offerAgreement: {
    title: "Договор оферты",
    href: "/offer-agreement",
  },
} as const;
