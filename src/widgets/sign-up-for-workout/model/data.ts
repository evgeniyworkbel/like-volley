import { contactsLinks } from "@/shared/constants";

export const contactsData = [
  {
    title: "Телефон",
    href: contactsLinks.phone.href,
    imageSrc: "/contact-form/phone.svg",
    alt: "Декоративная иконка телефона школы волейбола Like Volley",
    label: contactsLinks.phone.label,
  },
  {
    title: "Telegram",
    href: contactsLinks.telegram.href,
    imageSrc: "/contact-form/telegram.svg",
    alt: "Декоративная иконка Telegram школы волейбола Like Volley",
    label: contactsLinks.telegram.label,
  },
  {
    title: "Instagram",
    href: contactsLinks.instagram.href,
    imageSrc: "/contact-form/instagram.svg",
    alt: "Декоративная иконка Instagram школы волейбола Like Volley",
    label: contactsLinks.instagram.label,
  },
] as const;

export const cities = [
  { id: 1, label: "Выберите город", value: "" },
  { id: 2, label: "Брест", value: "brest" },
  { id: 3, label: "Минск", value: "minsk" },
];
