import { ImageProps } from "next/image";

export type CoachModel = Pick<ImageProps, "alt" | "src"> & {
  id?: number;
  lastName: string;
  firstName: string;
  patronymicName: string;
  description: string;
  city: string;
};
