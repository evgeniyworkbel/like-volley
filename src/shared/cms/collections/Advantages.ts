import { CollectionConfig } from "payload";

export const Advantages: CollectionConfig = {
  slug: "advantages",
  labels: {
    plural: { en: "Advantages", ru: "Преимущества" },
  },
  admin: {
    description: "Секция преимуществ",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: { en: "Title", ru: "Заголовок" },
      required: true,
    },
    {
      name: "subtitle",
      type: "text",
      label: { en: "Subtitle", ru: "Подзаголовок" },
      required: true,
    },
    {
      name: "score",
      type: "number",
      label: { en: "Score", ru: "Числовая оценка" },
      required: true,
    },
    {
      name: "ShowPlus",
      type: "checkbox",
      label: { en: "ShowPlus", ru: "Показывать плюс" },
      defaultValue: false,
    },
  ],
  orderable: true,
  disableBulkEdit: true,
};
