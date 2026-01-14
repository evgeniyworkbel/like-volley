import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  labels: {
    plural: { en: "Users", ru: "Пользователи" },
  },
  admin: {
    useAsTitle: "email",
    description: "Администраторы cms системы",
  },
  auth: true,
  access: {
    update: async ({ req, id }) => {
      const { user } = req;
      if (!user || user.id === id) return false;
      return Boolean(user.canDeleteUsers);
    },
    delete: async ({ req, id }) => {
      const { user } = req;
      if (!user || user.id === id) return false;
      return Boolean(user.canDeleteUsers);
    },
  },
  fields: [
    {
      name: "canDeleteUsers",
      type: "checkbox",
      label: { en: "Can delete users", ru: "Разрешить удаление юзеров" },
      defaultValue: false,
    },
  ],
  trash: true,
  disableBulkEdit: true,
};
