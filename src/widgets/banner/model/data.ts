import { BannerModel } from "./types";

export const bannerData: BannerModel[] = [
  {
    id: 1,
    className: "md:hidden",
    src: "/banner/promo-mobile.webp",
    alt: "Баннер синего цвета с декоративными иконками и сверху надпись 'приведи друга'",
  },
  {
    id: 2,
    className: "hidden object-right md:block xl:hidden",
    src: "/banner/promo-tablet.webp",
    alt: "Баннер синего цвета с декоративными иконками и сбоку надпись 'приведи друга'",
  },
  {
    id: 3,
    className: "hidden object-right xl:block",
    src: "/banner/promo-desktop.webp",
    alt: "Баннер синего цвета с декоративными иконками и сбоку надпись 'приведи друга'",
  },
];
