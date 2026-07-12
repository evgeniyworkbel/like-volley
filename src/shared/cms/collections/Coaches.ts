import { CollectionConfig } from "payload";
import { COMPANY_CITIES_OPTIONS } from "../util/options";

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
      label: { en: "City", ru: "Город" },
      options: COMPANY_CITIES_OPTIONS,
      unique: true,
      required: true,
    },
  ],
  orderable: true,
  disableBulkEdit: true,
};
