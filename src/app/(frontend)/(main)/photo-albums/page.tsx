import Image from "next/image";
import { getPayloadClient, toImgAttrs } from "@/shared/cms";

export const dynamic = "force-dynamic";

export default async function PhotoAlbums() {
  const payload = await getPayloadClient();
  const photoAlbums = await payload.find({
    collection: "photo-albums",
  });

  const photoAlbumsData = photoAlbums.docs;
  const mappedAlbums = photoAlbumsData.map((item) => ({
    ...item,
    ...toImgAttrs(item.thumbnail),
  }));

  return (
    <article className="flex w-full flex-col items-center gap-5 p-5 xl:px-20">
      <h1 className="text-2xl font-extrabold">Фотоальбомы</h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {mappedAlbums.map((item) => (
          <div
            key={item.id}
            className="relative flex aspect-[0.979] h-84 overflow-hidden rounded-4xl p-2 xl:aspect-[0.949] xl:h-97"
          >
            <Image src={item.src} alt={item.alt} sizes="364px" fill />
          </div>
        ))}
      </div>
    </article>
  );
}
