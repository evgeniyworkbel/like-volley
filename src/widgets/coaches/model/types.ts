import { ImageProps } from "next/image";
import { Except } from "type-fest";

export type CoachModel = Pick<ImageProps, "alt" | "src"> & {
  id?: number;
  lastName: string;
  firstName: string;
  patronymicName: string;
  description: string;
  city: string;
};

export type OwnerModel = Except<CoachModel, "id" | "patronymicName" | "city">;
