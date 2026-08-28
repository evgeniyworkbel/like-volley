import { GalleryCard } from "@/widgets/gallery";
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
          <GalleryCard
            key={item.id}
            src={item.src}
            albumName={item.albumName}
            albumDate={item.albumDate}
            link={item.link}
            alt={item.alt}
          />
        ))}
      </div>
    </article>
  );
}
