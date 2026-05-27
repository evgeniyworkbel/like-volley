import { GlobalConfig } from "payload";

export const OfferAgreementPage: GlobalConfig = {
  slug: "agreement",
  label: { en: "Offer agreement", ru: "Договор оферты" },
  fields: [
    {
      name: "title",
      type: "text",
      label: { en: "Title", ru: "Заголовок" },
      required: true,
    },
    {
      name: "description",
      type: "richText",
      label: { en: "Description", ru: "Описание" },
      required: true,
    },
    {
      name: "appendices",
      type: "richText",
      label: { en: "Appendices", ru: "Приложения" },
    },
  ],
};
