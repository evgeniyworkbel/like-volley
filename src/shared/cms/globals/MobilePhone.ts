import { GlobalConfig } from "payload";

export const MobilePhone: GlobalConfig = {
  slug: "mobile-phone",
  label: { en: "School mobile phone number", ru: "Мобильный телефон школы" },
  fields: [
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
