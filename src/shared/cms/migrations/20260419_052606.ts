import { MigrateUpArgs, MigrateDownArgs, sql } from "@payloadcms/db-postgres";

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   DROP INDEX "certificates_cert_color_idx";
  ALTER TABLE "certificates" DROP COLUMN "cert_color";
  DROP TYPE "public"."enum_certificates_cert_color";`);
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_certificates_cert_color" AS ENUM('blue', 'green', 'yellow');
  ALTER TABLE "certificates" ADD COLUMN "cert_color" "enum_certificates_cert_color" NOT NULL;
  CREATE UNIQUE INDEX "certificates_cert_color_idx" ON "certificates" USING btree ("cert_color");`);
}
