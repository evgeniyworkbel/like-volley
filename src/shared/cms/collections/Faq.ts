import { CollectionConfig } from "payload";

export const Faq: CollectionConfig = {
  slug: "faq",
  labels: {
    plural: { en: "Faq", ru: "Вопросы и ответы" },
  },
  admin: {
    description: "Секция вопросов и ответов",
  },
  fields: [
    {
      name: "question",
      type: "text",
      label: { en: "Question", ru: "Вопрос" },
      required: true,
    },
    {
      name: "answer",
      type: "richText",
      label: { en: "Answer", ru: "Ответ" },
      required: true,
    },
  ],
  orderable: true,
  disableBulkEdit: true,
};
