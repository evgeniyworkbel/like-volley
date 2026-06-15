import type { CollectionConfig } from "payload";

export const Posts: CollectionConfig = {
  slug: "posts",
  labels: {
    plural: { en: "Posts", ru: "Посты" },
  },
  admin: {
    description: "Публикации",
  },
  fields: [
    {
      name: "category",
      type: "relationship",
      relationTo: "post-categories",
      label: { en: "Category", ru: "Категория" },
      required: true,
    },
    {
      name: "title",
      type: "text",
      label: { en: "Title", ru: "Заголовок" },
      required: true,
      maxLength: 80,
    },
    {
      name: "shortDescription",
      type: "text",
      label: { en: "Short description", ru: "Краткое описание" },
      required: true,
      maxLength: 300,
    },
    {
      // todo: вычислять время динамически
      name: "readTime",
      type: "number",
      label: { en: "Read time", ru: "Время чтения" },
      required: true,
      max: 10,
    },
    {
      // todo: изменить на media upload
      name: "mainPhoto",
      type: "text",
      label: { en: "Main photo", ru: "Главное фото" },
      required: true,
    },
    {
      name: "mainPhotoMadeBy",
      type: "text",
      label: { en: "Main photo author", ru: "Автор главного фото" },
      admin: {
        placeholder: "Имя и фамилия в творительном падеже",
      },
      maxLength: 80,
    },
    {
      name: "content",
      type: "richText",
      label: { en: "Content", ru: "Контент" },
      required: true,
    },
  ],
  disableBulkEdit: true,
};
