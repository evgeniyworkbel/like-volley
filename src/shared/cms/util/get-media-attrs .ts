import { Media } from "../payload-types";

export const getMediaAttrs = (
  media: number | Media,
): {
  url: string;
  alt: string;
} => {
  if (typeof media === "number") {
    return { url: "", alt: "" };
  }
  return {
    url: media.url || "",
    alt: media.alt,
  };
};
