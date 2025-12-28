import { GlobalConfig } from "payload";

export const CompanyInfo: GlobalConfig = {
  slug: "company-info",
  label: { en: "Company info", ru: "Информация о компании" },
  fields: [
    {
      name: "legalName",
      type: "text",
      label: { en: "Legal name", ru: "Юридическое название" },
      required: true,
    },
    {
      name: "unp",
      type: "number",
      label: { en: "Payer's identification number", ru: "УНП" },
      hasMany: false,
      required: true,
    },
    {
      name: "legalAddress",
      type: "text",
      label: { en: "Legal address", ru: "Юридический адрес" },
      required: true,
    },
    {
      name: "postcode",
      type: "number",
      label: { en: "Postcode", ru: "Почтовый индекс" },
      hasMany: false,
      required: true,
    },
    {
      name: "mobilePhone",
      type: "number",
      hasMany: false,
      label: { en: "Phone number", ru: "Номер телефона" },
      admin: {
        description:
          "Должен содержать код РБ (375), код оператора и сам номер (слитно, без любых спецсимволов и пробелов)",
      },
      validate: (value) => {
        if (!value) return "Обязательное поле";
        if (value.toString().length !== 12) return "Поле должно содержать 12 символов";
        return true;
      },
      required: true,
    },
  ],
};
