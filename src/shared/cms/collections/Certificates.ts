import { CollectionConfig } from "payload";

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
      name: "certificateType",
      type: "text",
      label: { en: "СertificateType", ru: "Тип сертификата" },
      required: true,
    },
  ],
  orderable: true,
  disableBulkEdit: true,
};
