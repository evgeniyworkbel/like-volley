import { GalleryItemModel } from "./types";

export const galleryData: GalleryItemModel[] = [
  {
    src: "/gallery/photo1.webp",
    alt: "Фото ученицы школы",
  },
  {
    src: "/gallery/photo2.webp",
    alt: "Фото ученика и тренера школы",
  },
  {
    src: "/gallery/photo3.webp",
    alt: "Фото ученика школы",
  },
] as const;
