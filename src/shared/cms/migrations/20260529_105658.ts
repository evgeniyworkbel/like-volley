import { MigrateUpArgs, MigrateDownArgs, sql } from "@payloadcms/db-postgres";

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "agreement" RENAME TO "offer_agreement";
  ALTER TABLE "offer_agreement" ADD COLUMN "content" jsonb NOT NULL;
  ALTER TABLE "offer_agreement" DROP COLUMN "description";
  ALTER TABLE "offer_agreement" DROP COLUMN "appendices";`);
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "offer_agreement" RENAME TO "agreement";
  ALTER TABLE "agreement" RENAME COLUMN "content" TO "description";
  ALTER TABLE "agreement" ADD COLUMN "appendices" jsonb;`);
}
