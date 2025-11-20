import { ImageProps } from "next/image";
import { Except } from "type-fest";

export type CoachModel = Pick<ImageProps, "alt" | "src"> & {
  name: string;
  description: string;
  city: string;
};

export type OwnerModel = Except<CoachModel, "city">;
