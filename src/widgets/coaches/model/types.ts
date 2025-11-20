import { ImageProps } from "next/image";

export type CoachModel = Pick<ImageProps, "alt" | "src"> & {
  name: string;
  description: string;
  city?: string;
};
