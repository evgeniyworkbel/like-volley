import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
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
    // Email added by default
    // Add more fields as needed
    {
      name: "canDeleteUsers",
      type: "checkbox",
      label: {
        en: "Can delete users",
        ru: "Разрешить удаление юзеров",
      },
      defaultValue: false,
    },
  ],
  disableBulkEdit: true,
};
