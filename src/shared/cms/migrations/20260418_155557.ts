import { MigrateUpArgs, MigrateDownArgs, sql } from "@payloadcms/db-postgres";

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_certificates_cert_color" AS ENUM('blue', 'green', 'yellow');
  CREATE TABLE "certificates" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"_order" varchar,
  	"cost" varchar NOT NULL,
  	"count" varchar NOT NULL,
  	"cert_color" "enum_certificates_cert_color" NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "certificates_id" integer;
  CREATE INDEX "certificates__order_idx" ON "certificates" USING btree ("_order");
  CREATE UNIQUE INDEX "certificates_cert_color_idx" ON "certificates" USING btree ("cert_color");
  CREATE INDEX "certificates_updated_at_idx" ON "certificates" USING btree ("updated_at");
  CREATE INDEX "certificates_created_at_idx" ON "certificates" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_certificates_fk" FOREIGN KEY ("certificates_id") REFERENCES "public"."certificates"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_certificates_id_idx" ON "payload_locked_documents_rels" USING btree ("certificates_id");`);
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "certificates" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "certificates" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_certificates_fk";
  
  DROP INDEX "payload_locked_documents_rels_certificates_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "certificates_id";
  DROP TYPE "public"."enum_certificates_cert_color";`);
}
