import { contactsLinks } from "@/shared/constants";

export const contactsData = [
  {
    title: "Телефон",
    href: contactsLinks.phone.href,
    imageSrc: "/contact-form/phone.svg",
    alt: "Декоративная иконка телефона школы волейбола Like Volley",
    label: "+375 (25) 722-13-13",
  },
  {
    title: "Telegram",
    href: contactsLinks.telegram.href,
    imageSrc: "/contact-form/telegram.svg",
    alt: "Декоративная иконка Telegram школы волейбола Like Volley",
    label: contactsLinks.telegram.href,
  },
  {
    title: "Instagram",
    href: contactsLinks.instagram.href,
    imageSrc: "/contact-form/instagram.svg",
    alt: "Декоративная иконка Instagram школы волейбола Like Volley",
    label: contactsLinks.instagram.href,
  },
] as const;
