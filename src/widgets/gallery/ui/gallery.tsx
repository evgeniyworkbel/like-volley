import { Title } from "@/shared/ui";
import { gallerySectionId } from "@/shared/constants";
import { galleryData } from "../model/data";
import { GalleryCard } from "./gallery-card";
import { AllFotosButton } from "./all-fotos-button";

export function Gallery() {
  return (
    <section
      id={gallerySectionId}
      className="flex flex-col flex-wrap justify-center gap-14 px-5 py-14.5 xl:flex-row xl:gap-20 xl:px-38.5"
    >
      <div className="flex w-full flex-col items-center justify-between xl:flex-row">
        <Title className="flex">
          Живые&nbsp;<span className="text-accent-orange">моменты</span>
        </Title>
        <AllFotosButton />
      </div>
      <div className="flex max-w-301.5 flex-wrap items-center justify-between gap-14">
        <div className="flex w-full flex-col justify-between gap-5 xl:flex-row">
          {galleryData.map((item) => (
            <GalleryCard key={item.alt} src={item.src} alt={item.alt} />
          ))}
        </div>
      </div>
    </section>
  );
}
