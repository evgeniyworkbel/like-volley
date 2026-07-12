import { MigrateUpArgs, MigrateDownArgs, sql } from "@payloadcms/db-postgres";

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "posts" RENAME COLUMN "main_photo" TO "main_photo_id";
  ALTER TABLE "posts" ADD CONSTRAINT "posts_main_photo_id_media_id_fk" FOREIGN KEY ("main_photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "posts_main_photo_idx" ON "posts" USING btree ("main_photo_id");`);
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "posts" RENAME COLUMN "main_photo_id" TO "main_photo";
  ALTER TABLE "posts" DROP CONSTRAINT "posts_main_photo_id_media_id_fk";
  
  DROP INDEX "posts_main_photo_idx";`);
}
