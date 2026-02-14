import path from "path";
import { fileURLToPath } from "url";
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { en } from "@payloadcms/translations/languages/en";
import { ru } from "@payloadcms/translations/languages/ru";
import sharp from "sharp";

import { migrations } from "./migrations";
import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Coaches } from "./collections/Coaches";
import { Faq } from "./collections/Faq";
import { Owner } from "./globals/Owner";
import { CompanyInfo } from "./globals/CompanyInfo";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

console.log("----envs---", process.env);

export default buildConfig({
  admin: {
    meta: { icons: { icon: "/cms-icon.png" } },
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      logout: { Button: "./ui/logout-btn" },
    },
  },
  collections: [Users, Media, Coaches, Faq],
  globals: [CompanyInfo, Owner],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL || "",
    },
    migrationDir: path.resolve(dirname, "migrations"),
    prodMigrations: process.env.IS_CUSTOM_VPS === "true" ? migrations : undefined,
  }),
  i18n: {
    supportedLanguages: { en, ru },
  },
  sharp,
  plugins: [],
  telemetry: false,
});
