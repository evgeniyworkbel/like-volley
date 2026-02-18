import { Media } from "@/shared/cms/payload-types";

export type CoachModel = {
  id?: number;
  lastName: string;
  firstName: string;
  patronymicName: string;
  description: string;
  city?: string;
  cityLabel?: string;
  photo: Pick<Media, "url" | "alt">;
};
