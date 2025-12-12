import { Carousel, Title } from "@/shared/ui";
import { gallery } from "@/shared/constants";
import { galleryData } from "../model/data";
import { GalleryCard } from "./gallery-card";

export function Gallery() {
  return (
    <section
      id={gallery}
      className="flex flex-col items-center gap-10 px-5 py-10 xl:gap-20 xl:px-20"
    >
      <Title className="text-center text-[66px]">Галерея</Title>
      <Carousel innerWrapperClassName="max-w-300" slidesPerView={3}>
        {galleryData.map((item) => (
          <GalleryCard key={item.alt} src={item.src} alt={item.alt} />
        ))}
      </Carousel>
    </section>
  );
}
