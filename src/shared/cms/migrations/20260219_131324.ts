import { MigrateUpArgs, MigrateDownArgs, sql } from "@payloadcms/db-postgres";

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "coaches" ADD COLUMN "photo_id" integer NOT NULL;
  ALTER TABLE "coaches" ADD CONSTRAINT "coaches_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "coaches_photo_idx" ON "coaches" USING btree ("photo_id");`);
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "coaches" DROP CONSTRAINT "coaches_photo_id_media_id_fk";
  
  DROP INDEX "coaches_photo_idx";
  ALTER TABLE "coaches" DROP COLUMN "photo_id";`);
}
