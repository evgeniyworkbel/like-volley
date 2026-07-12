import { Media } from "../payload-types";

export const toImgAttrs = (media: number | Media): { src: string; alt: string } => {
  if (typeof media === "number") {
    return { src: "", alt: "" };
  }
  return { src: media.url || "", alt: media.alt };
};
