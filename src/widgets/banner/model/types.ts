import { ImageProps } from "next/image";

export type BannerImageModel = Required<Pick<ImageProps, "className" | "src" | "alt">> & {
  id: number;
};
