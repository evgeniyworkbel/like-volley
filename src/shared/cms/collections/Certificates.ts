import { CollectionConfig } from "payload";
import { COLOR_BUTTONS_OPTIONS } from "../util/options";

export const Certificates: CollectionConfig = {
  slug: "certificates",
  labels: {
    plural: { en: "Certificates", ru: "Сертификаты" },
  },
  admin: {
    description: "Секция сертификатов",
  },
  fields: [
    {
      name: "cost",
      type: "text",
      label: { en: "Cost", ru: "Стоимость" },
      required: true,
    },
    {
      name: "count",
      type: "text",
      label: { en: "Сount", ru: "Количество" },
      required: true,
    },
    {
      name: "certColor",
      type: "select",
      label: { en: "Colors", ru: "Цвета" },
      options: COLOR_BUTTONS_OPTIONS,
      unique: true,
      required: true,
    },
  ],
  orderable: true,
  disableBulkEdit: true,
};
