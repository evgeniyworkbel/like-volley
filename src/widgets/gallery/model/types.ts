import { ImageProps } from "next/image";

export type GalleryItem = Pick<ImageProps, "alt" | "src">;
