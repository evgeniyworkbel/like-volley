import { MigrateUpArgs, MigrateDownArgs, sql } from "@payloadcms/db-postgres";

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "photo_albums" ADD COLUMN "link" varchar NOT NULL DEFAULT 'https://zaviflash.wfolio.pro/disk/29-11-2024-like-volley-2-8zmnl7';`);
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "photo_albums" DROP COLUMN "link";`);
}
