import { Title } from "@/shared/ui";
import { contactsLinks, gallerySectionId } from "@/shared/constants";
import { RightIcon } from "@/shared/icons";
import { galleryData } from "../model/data";
import { GalleryCard } from "./gallery-card";

export function Gallery() {
  return (
    <section
      id={gallerySectionId}
      className="flex flex-col flex-wrap items-center justify-center gap-12 px-5 py-14.5 xl:flex-row xl:gap-20 xl:px-20"
    >
      <div className="flex w-full flex-col items-center justify-between xl:flex-row">
        <Title>
          Живые&nbsp;<span className="text-accent-orange">моменты</span>
        </Title>
        <a
          className="flex items-center gap-2"
          href={contactsLinks.gallery.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-sm font-bold uppercase">все фотоальбомы</span>
          <span className="flex size-8.5 items-center justify-center rounded-full border border-black/20">
            <RightIcon />
          </span>
        </a>
      </div>
      <div className="flex flex-col gap-5 xl:flex-row xl:px-18.5">
        {galleryData.map((item) => (
          <GalleryCard key={item.alt} src={item.src} alt={item.alt} />
        ))}
      </div>
    </section>
  );
}
