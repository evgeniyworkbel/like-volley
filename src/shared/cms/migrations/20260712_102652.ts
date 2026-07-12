import { MigrateUpArgs, MigrateDownArgs, sql } from "@payloadcms/db-postgres";

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "posts" RENAME COLUMN "main_photo" TO "main_photo_id";
    ALTER TABLE "posts" ALTER COLUMN "main_photo_id" DROP NOT NULL;
    UPDATE "posts" SET "main_photo_id" = NULL;
    ALTER TABLE "posts" ALTER COLUMN "main_photo_id" TYPE integer USING NULL;
    ALTER TABLE "posts" ADD CONSTRAINT "posts_main_photo_id_media_id_fk"
      FOREIGN KEY ("main_photo_id") REFERENCES "public"."media"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
    CREATE INDEX "posts_main_photo_idx" ON "posts" USING btree ("main_photo_id");
  `);
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "posts" DROP CONSTRAINT "posts_main_photo_id_media_id_fk";
    DROP INDEX "posts_main_photo_idx";
    ALTER TABLE "posts" ALTER COLUMN "main_photo_id" TYPE varchar USING "main_photo_id"::varchar;
    ALTER TABLE "posts" RENAME COLUMN "main_photo_id" TO "main_photo";
  `);
}
