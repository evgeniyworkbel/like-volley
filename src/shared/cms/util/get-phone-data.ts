import { Media } from "../payload-types";

export const getPhotoData = (photo: number | Media, firstName: string, lastName: string) => {
  const isMedia = (photo: number | Media): photo is Media => {
    return typeof photo === "object" && "url" in photo;
  };

  return isMedia(photo)
    ? {
        url: photo.url || "",
        alt: photo.alt,
      }
    : {
        url: "",
        alt: `отсутствует фото ${firstName} ${lastName}`,
      };
};
