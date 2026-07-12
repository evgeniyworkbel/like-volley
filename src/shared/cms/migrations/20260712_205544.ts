import { MigrateUpArgs, MigrateDownArgs, sql } from "@payloadcms/db-postgres";

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "owner" ADD COLUMN "photo_id" integer NOT NULL;
  ALTER TABLE "owner" ADD CONSTRAINT "owner_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "owner_photo_idx" ON "owner" USING btree ("photo_id");`);
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "owner" DROP CONSTRAINT "owner_photo_id_media_id_fk";
  
  DROP INDEX "owner_photo_idx";
  ALTER TABLE "owner" DROP COLUMN "photo_id";`);
}
