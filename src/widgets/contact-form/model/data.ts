import { contactsLinks } from "@/shared/constants";

export const contactsData = [
  {
    title: "Телефон",
    href: "tel:+375298020748",
    imageSrc: "/contact-form/phone.svg",
    alt: "Декоративная иконка телефона школы волейбола Like Volley",
    label: contactsLinks.phone.href,
  },
  {
    title: "Telegram",
    href: "https://www.telegram.com/like",
    imageSrc: "/contact-form/telegram.svg",
    alt: "Декоративная иконка Telegram школы волейбола Like Volley",
    label: contactsLinks.telegram.href,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/like",
    imageSrc: "/contact-form/instagram.svg",
    alt: "Декоративная иконка Instagram школы волейбола Like Volley",
    label: contactsLinks.instagram.href,
  },
] as const;
