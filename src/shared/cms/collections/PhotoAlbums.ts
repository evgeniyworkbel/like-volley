import { CollectionConfig } from "payload";

export const PhotoAlbums: CollectionConfig = {
  slug: "photo-albums",
  labels: {
    plural: { en: "Photo Albums", ru: "Фотоальбомы" },
  },
  admin: {
    description: "Коллекция фотоальбомов",
  },
  fields: [
    {
      name: "thumbnail",
      type: "upload",
      relationTo: "media",
      label: { en: "Thumbnail", ru: "Обложка" },
      required: true,
    },
    {
      name: "albumName",
      type: "text",
      maxLength: 30,
      label: { en: "Album Name", ru: "Название альбома" },
      required: true,
    },
    {
      name: "albumDate",
      type: "date",
      label: { en: "Album Date", ru: "Дата альбома" },
      required: true,
    },
  ],
};
