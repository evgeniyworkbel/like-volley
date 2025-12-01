import { BannerImageModel } from "./types";

const defaultAlt: string =
  "Баннер синего цвета с декоративными иконками и сбоку надпись 'приведи друга'";

export const bannerImagesData: BannerImageModel[] = [
  {
    id: 1,
    className: "md:hidden",
    src: "/banner/promo-mobile.webp",
    alt: defaultAlt,
  },
  {
    id: 2,
    className: "hidden object-right md:block xl:hidden",
    src: "/banner/promo-tablet.webp",
    alt: defaultAlt,
  },
  {
    id: 3,
    className: "hidden object-right xl:block",
    src: "/banner/promo-desktop.webp",
    alt: defaultAlt,
  },
];
