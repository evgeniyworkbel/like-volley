import { CollectionConfig } from "payload";

const CITY_OPTIONS = [
  { label: "Брест", value: "brest" },
  { label: "Минск", value: "minsk" },
];

export const Coaches: CollectionConfig = {
  slug: "coaches",
  labels: {
    plural: { en: "Coaches", ru: "Тренеры" },
  },
  admin: {
    description: "Секция тренеров",
  },
  fields: [
    {
      name: "photo",
      type: "upload",
      relationTo: "media",
      label: { en: "Photo", ru: "Фото" },
      required: true,
    },
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
    {
      name: "city",
      type: "select",
      options: CITY_OPTIONS,
      label: { en: "City", ru: "Город" },
      required: true,
    },
  ],
  hooks: {
    afterRead: [
      async ({ doc }) => {
        if (!doc?.city) return doc;
        const option = CITY_OPTIONS.find((opt) => opt.value === doc.city);
        doc.cityLabel = option?.label;

        return doc;
      },
    ],
  },
  orderable: true,
  disableBulkEdit: true,
};
