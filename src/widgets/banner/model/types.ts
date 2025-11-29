import { ImageProps } from "next/image";

export type BannerModel = Required<Pick<ImageProps, "className" | "src" | "alt">> & {
  id: number;
};
