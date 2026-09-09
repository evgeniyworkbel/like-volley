import { contactsLinks } from "@/shared/constants";
import { formatPhone } from "@/shared/lib";

export const getContactsData = (mobilePhone: number) => {
  return [
    {
      title: "Телефон",
      imageSrc: "/contact-form/phone.svg",
      alt: "Декоративная иконка телефона школы волейбола LikeVolley",
      label: formatPhone(mobilePhone),
    },
    {
      title: "Telegram",
      imageSrc: "/contact-form/telegram.svg",
      alt: "Декоративная иконка Telegram школы волейбола LikeVolley",
      label: contactsLinks.telegram.label,
    },
    {
      title: "Instagram",
      imageSrc: "/contact-form/instagram.svg",
      alt: "Декоративная иконка Instagram школы волейбола LikeVolley",
      label: contactsLinks.instagram.label,
    },
  ] as const;
};

export const citiesOptions = [
  { id: 1, label: "Выберите город", value: "" },
  { id: 2, label: "Брест", value: "brest" },
  { id: 3, label: "Минск", value: "minsk" },
];
