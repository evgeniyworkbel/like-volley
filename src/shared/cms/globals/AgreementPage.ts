import { GlobalConfig } from "payload";
import { lexicalEditor, BlocksFeature } from "@payloadcms/richtext-lexical";

export const AgreementPage: GlobalConfig = {
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
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          BlocksFeature({
            blocks: [
              {
                slug: "rawHtmlTable",
                labels: {
                  singular: "Таблица (HTML)",
                  plural: "Таблицы (HTML)",
                },
                fields: [
                  {
                    name: "htmlCode",
                    type: "textarea",
                    label: "HTML-код таблицы",
                    required: true,
                    admin: {
                      description:
                        "Скопируйте таблицу из Exel, переведите в HTML на tableconvert.com и вставьте код сюда.",
                    },
                  },
                ],
              },
            ],
          }),
        ],
      }),
    },
  ],
};
