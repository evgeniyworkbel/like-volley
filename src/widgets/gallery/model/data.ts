import { GalleryItem } from "./types";

export const galleryData: GalleryItem[] = [
  {
    src: "/gallery/photo1.webp",
    alt: "Фото тренировки детской группы",
  },
  {
    src: "/gallery/photo2.webp",
    alt: "Фото ученика школы",
  },
  {
    src: "/gallery/photo3.webp",
    alt: "Фото ученицы школы",
  },
] as const;
