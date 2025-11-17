import { ImageProps } from "next/image";

export type Coach = Pick<ImageProps, "alt" | "src"> & {
  name: string;
  description: string;
  city?: "Брест" | "Минск";
};
