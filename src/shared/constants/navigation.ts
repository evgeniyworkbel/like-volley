import {
  coachesSectionId,
  faqSectionId,
  gallerySectionId,
  giftCertificatesSectionId,
  locationsSectionId,
} from "./html-attrs";
import { LinkHref } from "../types";

export const navLinks: Record<string, { title: string; href: LinkHref }> = {
  home: {
    title: "Главная",
    href: "/",
  },
  locationsSection: {
    title: "Локации",
    href: `/#${locationsSectionId}`,
  },
  gallerySection: {
    title: "Живые моменты",
    href: `/#${gallerySectionId}`,
  },
  giftCertificatesSection: {
    title: "Подарочные сертификаты",
    href: `/#${giftCertificatesSectionId}`,
  },
  faqSection: {
    title: "FAQ",
    href: `/#${faqSectionId}`,
  },
  coachesSection: {
    title: "Тренеры",
    href: `/#${coachesSectionId}`,
  },
  // Links for pages
  policy: {
    title: "Политика обработки персональных данных",
    href: "/policy",
  },
  offerAgreement: {
    title: "Договор оферты",
    href: "/offer-agreement",
  },
  blog: {
    title: "Новости",
    href: "/blog",
  },
} as const;
