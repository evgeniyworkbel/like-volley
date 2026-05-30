import { GlobalConfig } from "payload";

export const OfferAgreementPage: GlobalConfig = {
  slug: "offer-agreement",
  label: { en: "Offer agreement", ru: "Договор оферты" },
  fields: [
    {
      name: "title",
      type: "text",
      label: { en: "Title", ru: "Заголовок" },
      required: true,
    },
    {
      name: "content",
      type: "richText",
      label: { en: "Content", ru: "Контент" },
      required: true,
    },
  ],
};
