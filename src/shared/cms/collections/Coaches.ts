import { CollectionConfig } from "payload";

export const Coaches: CollectionConfig = {
  slug: "coaches",
  labels: {
    plural: { en: "Coaches", ru: "Тренеры" },
  },
  admin: {
    description: "Секция тренеров",
  },
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
      required: true,
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
      name: "description",
      type: "text",
      label: { en: "Description", ru: "Описание" },
      required: true,
    },
    {
      name: "city",
      type: "select",
      options: [
        { label: "Брест", value: "brest" },
        { label: "Минск", value: "minsk" },
      ],
      label: { en: "City", ru: "Город" },
      required: true,
    },
  ],
  orderable: true,
  disableBulkEdit: true,
};
