import { NavArrow, SectionTitle } from "@/shared/ui";
import { contactsLinks, gallerySectionId } from "@/shared/constants";
import { galleryData } from "../model/data";
import { GalleryCard } from "./gallery-card";

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
      <div className="flex flex-col gap-5 xl:flex-row xl:px-18.5">
        {galleryData.map((item) => (
          <GalleryCard key={item.alt} src={item.src} alt={item.alt} />
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
