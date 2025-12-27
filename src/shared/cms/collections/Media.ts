import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
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
      label: { en: "Alt text (for seo)", ru: "Альтернативный текст (для seo)" },
      admin: {
        description:
          "Как правильно написать alt текст для картинки https://doka.guide/html/alt/#osnovnye-pravila-zapolneniya",
      },
      required: true,
    },
  ],
  upload: true,
};
