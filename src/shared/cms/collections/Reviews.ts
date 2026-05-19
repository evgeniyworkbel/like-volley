import { CollectionConfig, TextFieldValidation } from "payload";

const validateLink: TextFieldValidation = (val) => {
  if (!val) return "Ссылка обязательна";
  try {
    new URL(val);
    return true;
  } catch {
    return "Введите корректный URL-адрес";
  }
};

export const Reviews: CollectionConfig = {
  slug: "reviews",
  labels: {
    plural: { en: "Reviews", ru: "Отзывы" },
  },
  admin: {
    description: "Секция отзывов",
  },
  fields: [
    {
      name: "text",
      type: "textarea",
      label: { en: "Text", ru: "Текст отзыва" },
      required: true,
    },
    {
      name: "firstName",
      type: "text",
      label: { en: "First name", ru: "Имя" },
      required: true,
    },
    {
      name: "lastName",
      type: "text",
      label: { en: "Last name", ru: "Фамилия" },
      required: true,
    },
    {
      name: "link",
      type: "text",
      label: "Ссылка на отзыв",
      required: true,
      validate: validateLink,
    },
  ],
  orderable: true,
  disableBulkEdit: true,
};
