import Link from "next/link";
import { NavArrow, SectionTitle } from "@/shared/ui";
import { gallerySectionId } from "@/shared/constants";
import { getPayloadClient, toImgAttrs } from "@/shared/cms";
import { GalleryCard } from "./gallery-card";

export async function Gallery() {
  const payload = await getPayloadClient();
  const photoAlbums = await payload.find({
    collection: "photo-albums",
    limit: 3,
  });

  const photoAlbumsData = photoAlbums.docs;
  const mappedAlbums = photoAlbumsData.map((item) => ({
    ...item,
    ...toImgAttrs(item.thumbnail),
  }));

  return (
    <section
      id={gallerySectionId}
      className="flex flex-col flex-wrap items-center gap-6 px-5 py-14.5 xl:flex-row xl:gap-10 xl:px-20"
    >
      <div className="flex w-full flex-col items-center justify-between xl:flex-row">
        <SectionTitle className="text-[28px]">
          Живые&nbsp;<span className="text-accent-orange">моменты</span>
        </SectionTitle>
        <Link className="hidden items-center gap-2 xl:flex" href="/photo-albums">
          <span className="text-xl font-bold text-accent-orange">Все фотоальбомы</span>
          <NavArrow />
        </Link>
      </div>
      <div className="flex flex-col gap-5 xl:flex-row">
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
      <Link className="flex items-center gap-2 xl:hidden" href="/photo-albums">
        <span className="text-xl font-bold text-accent-orange">Все фотоальбомы</span>
        <NavArrow />
      </Link>
    </section>
  );
}
