import { GlobalConfig } from "payload";

export const PolicyPage: GlobalConfig = {
  slug: "policy",
  label: { en: "Policy", ru: "Политика обработки персональных данных" },
  fields: [
    {
      name: "title",
      type: "text",
      label: { en: "title", ru: "Заголовок" },
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      label: { en: "Description", ru: "Описание" },
      required: true,
    },
  ],
};
