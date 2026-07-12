import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  upload: { bulkUpload: false },
  labels: {
    plural: { en: "Media", ru: "Медиа" },
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      label: {
        en: "Description what is shown at image (for seo)",
        ru: "Описание того, что изображено на картинке (для seo)",
      },
      admin: {
        description:
          "Как правильно написать alt текст для картинки https://doka.guide/html/alt/#osnovnye-pravila-zapolneniya",
      },
      required: true,
    },
  ],
};
