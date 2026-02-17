import { GlobalConfig } from "payload";

export const PolicyPage: GlobalConfig = {
  slug: "policy",
  label: { en: "Policy", ru: "Политика обработки персональных данных" },
  fields: [
    {
      name: "title",
      type: "text",
      label: { en: "Title", ru: "Заголовок" },
      required: true,
    },
    {
      name: "description",
      type: "richText",
      label: { en: "Description", ru: "Описание" },
      required: true,
    },
  ],
};
