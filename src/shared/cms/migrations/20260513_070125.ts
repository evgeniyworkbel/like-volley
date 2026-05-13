import { MigrateUpArgs, MigrateDownArgs, sql } from "@payloadcms/db-postgres";

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "advantages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"_order" varchar,
  	"title" varchar NOT NULL,
  	"subtitle" varchar NOT NULL,
  	"score" numeric NOT NULL,
  	"show_plus" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "advantages_id" integer;
  CREATE INDEX "advantages__order_idx" ON "advantages" USING btree ("_order");
  CREATE INDEX "advantages_updated_at_idx" ON "advantages" USING btree ("updated_at");
  CREATE INDEX "advantages_created_at_idx" ON "advantages" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_advantages_fk" FOREIGN KEY ("advantages_id") REFERENCES "public"."advantages"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_advantages_id_idx" ON "payload_locked_documents_rels" USING btree ("advantages_id");`);
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "advantages" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "advantages" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_advantages_fk";
  
  DROP INDEX "payload_locked_documents_rels_advantages_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "advantages_id";`);
}
