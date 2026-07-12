import { MigrateUpArgs, MigrateDownArgs, sql } from "@payloadcms/db-postgres";

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "photo_albums" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"thumbnail_id" integer NOT NULL,
  	"album_name" varchar NOT NULL,
  	"album_date" timestamp(3) with time zone NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "photo_albums_id" integer;
  ALTER TABLE "photo_albums" ADD CONSTRAINT "photo_albums_thumbnail_id_media_id_fk" FOREIGN KEY ("thumbnail_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "photo_albums_thumbnail_idx" ON "photo_albums" USING btree ("thumbnail_id");
  CREATE INDEX "photo_albums_updated_at_idx" ON "photo_albums" USING btree ("updated_at");
  CREATE INDEX "photo_albums_created_at_idx" ON "photo_albums" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_photo_albums_fk" FOREIGN KEY ("photo_albums_id") REFERENCES "public"."photo_albums"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_photo_albums_id_idx" ON "payload_locked_documents_rels" USING btree ("photo_albums_id");`);
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "photo_albums" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "photo_albums" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_photo_albums_fk";
  
  DROP INDEX "payload_locked_documents_rels_photo_albums_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "photo_albums_id";`);
}
