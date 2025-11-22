import { ImageProps } from "next/image";
import { Except } from "type-fest";

export type CoachModel = Pick<ImageProps, "alt" | "src"> & {
  firstName: string;
  lastName: string;
  patronymicName: string;
  description: string;
  city: string;
};

export type OwnerModel = Except<CoachModel, "patronymicName" | "city">;
