import type { CollectionConfig } from "payload";

export const PostCategories: CollectionConfig = {
  slug: "post-categories",
  labels: {
    plural: { en: "Posts categories", ru: "Категории постов" },
  },
  admin: {
    description: "Категории постов",
    useAsTitle: "label",
  },
  fields: [
    {
      name: "label",
      type: "text",
      label: { en: "Label post", ru: "Категория поста" },
      required: true,
      unique: true,
    },
  ],
  disableBulkEdit: true,
};
