import { contactsLinks } from "@/shared/constants";
import { formatPhone } from "@/shared/lib";

export const getContactsData = (mobilePhone: number) => {
  return [
    {
      title: "Телефон",
      imageSrc: "/contact-form/phone.svg",
      alt: "Декоративная иконка телефона школы волейбола Like Volley",
      label: formatPhone(mobilePhone),
    },
    {
      title: "Telegram",
      imageSrc: "/contact-form/telegram.svg",
      alt: "Декоративная иконка Telegram школы волейбола Like Volley",
      label: contactsLinks.telegram.label,
    },
    {
      title: "Instagram",
      imageSrc: "/contact-form/instagram.svg",
      alt: "Декоративная иконка Instagram школы волейбола Like Volley",
      label: contactsLinks.instagram.label,
    },
  ] as const;
};
