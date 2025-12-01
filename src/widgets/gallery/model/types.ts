import { ImageProps } from "next/image";

export type GalleryItemModel = Pick<ImageProps, "src" | "alt">;
