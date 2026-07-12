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
    },
    {
      name: "count",
      type: "text",
      label: { en: "Сount", ru: "Количество" },
    },
    {
      name: "certificateType",
      type: "text",
      label: { en: "Certificate type", ru: "Тип сертификата" },
    },
  ],
  orderable: true,
  disableBulkEdit: true,
};
