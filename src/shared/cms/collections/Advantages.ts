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
      name: "score",
      type: "number",
      label: { en: "Score", ru: "Числовая оценка" },
      required: true,
    },
    {
      name: "showPlus",
      type: "checkbox",
      label: { en: "Show plus", ru: "Показывать плюс" },
      defaultValue: false,
    },
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
  ],
  orderable: true,
  disableBulkEdit: true,
};
