import { contactsLinks } from "@/shared/constants";
import { SocialLinkModel } from "./types";

export const SocialLinksData: SocialLinkModel[] = [
  {
    src: "/phone.svg",
    href: contactsLinks.phone.href,
    alt: "Декоративная иконка телефона школы волейбола Like Volley",
  },
  {
    src: "/location.svg",
    href: contactsLinks.locations.href,
    alt: "Декоративная иконка локации школы волейбола Like Volley",
  },
  {
    src: "/instagram.svg",
    href: contactsLinks.instagram.href,
    alt: "Декоративная иконка Instagram школы волейбола Like Volley",
  },
  {
    src: "/telegram.svg",
    href: contactsLinks.telegram.href,
    alt: "Декоративная иконка telegram школы волейбола Like Volley",
  },
];
