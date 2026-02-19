import { Media } from "@/shared/cms/payload-types";

export type CoachModel = {
  id?: number;
  lastName: string;
  firstName: string;
  patronymicName: string;
  description: string;
  city: string;
  photo: number | Media;
};
