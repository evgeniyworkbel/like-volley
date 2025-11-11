import { Carousel, Title } from "@/shared/ui";
import { galleryData } from "../model/data";
import { GalleryCard } from "./gallery-сard";

export function Gallery() {
  return (
    <section className="flex max-w-360 flex-col items-center gap-6 px-5 py-10">
      <Title className="text-center">Галерея</Title>
      <Carousel slidesPerView={3}>
        {galleryData.map((item) => (
          <GalleryCard key={item.alt} src={item.src} alt={item.alt} />
        ))}
      </Carousel>
    </section>
  );
}
