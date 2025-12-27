import { GlobalConfig } from "payload";

export const Owner: GlobalConfig = {
  slug: "owner",
  label: { en: "School owner", ru: "Основатель школы" },
  fields: [
    // todo
    // {
    //   name: "photo",
    //   type: "upload",
    // },
    {
      name: "lastName",
      type: "text",
      label: { en: "Last name", ru: "Фамилия" },
    },
    {
      name: "firstName",
      type: "text",
      label: { en: "First name", ru: "Имя" },
      required: true,
    },
    {
      name: "patronymicName",
      type: "text",
      label: { en: "Patronymic name", ru: "Отчество" },
      required: true,
    },
    {
      name: "jobTitle",
      type: "text",
      label: { en: "School job title", ru: "Должность в школе" },
      required: true,
    },
    {
      name: "description",
      type: "text",
      label: { en: "Description", ru: "Описание" },
      required: true,
    },
  ],
};
