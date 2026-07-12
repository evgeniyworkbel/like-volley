import { SectionTitle } from "@/shared/ui";
import { gallerySectionId } from "@/shared/constants";
import { galleryData } from "../model/data";
import { GalleryCard } from "./gallery-card";
import { FullAlbumButton } from "./full-album-button";

export function Gallery() {
  return (
    <section
      id={gallerySectionId}
      className="flex flex-col flex-wrap items-center justify-center gap-12 px-5 py-14.5 xl:flex-row xl:gap-20 xl:px-20"
    >
      <div className="flex w-full flex-col items-center justify-between xl:flex-row">
        <SectionTitle className="text-[28px]">
          Живые&nbsp;<span className="text-accent-orange">моменты</span>
        </SectionTitle>
        <FullAlbumButton />
      </div>
      <div className="flex flex-col gap-5 xl:flex-row xl:px-18.5">
        {galleryData.map((item) => (
          <GalleryCard key={item.alt} src={item.src} alt={item.alt} />
        ))}
      </div>
      <FullAlbumButton />
    </section>
  );
}
