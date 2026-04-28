import { MigrateUpArgs, MigrateDownArgs, sql } from "@payloadcms/db-postgres";

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "certificates" ALTER COLUMN "cost" DROP NOT NULL;
  ALTER TABLE "certificates" ALTER COLUMN "count" DROP NOT NULL;
  ALTER TABLE "certificates" ADD COLUMN "certificate_type" varchar;`);
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "certificates" ALTER COLUMN "cost" SET NOT NULL;
  ALTER TABLE "certificates" ALTER COLUMN "count" SET NOT NULL;
  ALTER TABLE "certificates" DROP COLUMN "certificate_type";`);
}
