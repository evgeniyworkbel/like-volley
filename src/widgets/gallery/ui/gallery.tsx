import { NavArrow, SectionTitle } from "@/shared/ui";
import { contactsLinks, gallerySectionId } from "@/shared/constants";
import { getPayloadClient, toImgAttrs } from "@/shared/cms";
import { GalleryCard } from "./gallery-card";

export async function Gallery() {
  const payload = await getPayloadClient();
  const photoAlbums = await payload.find({
    collection: "photo-albums",
    pagination: false,
  });

  const galleryData = photoAlbums.docs;
  const mappedAlbums = galleryData.map((item) => ({
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
        <a
          className="hidden items-center gap-2 xl:flex"
          href={contactsLinks.gallery.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-xl font-bold text-accent-orange">Все фотоальбомы</span>
          <NavArrow />
        </a>
      </div>
      <div className="flex flex-col gap-5 xl:flex-row">
        {mappedAlbums.map((item) => (
          <GalleryCard
            key={item.id}
            src={item.src}
            albumName={item.albumName}
            albumDate={item.albumDate}
            alt={item.alt}
          />
        ))}
      </div>
      <a
        className="flex items-center gap-2 xl:hidden"
        href={contactsLinks.gallery.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="text-xl font-bold text-accent-orange">Все фотоальбомы</span>
        <NavArrow />
      </a>
    </section>
  );
}
