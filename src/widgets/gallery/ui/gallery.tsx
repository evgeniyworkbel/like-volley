import { galleryData } from "../model/data";
import { Carousel, Title } from "@/shared/ui";
import { GalleryCard } from "./gallery-сard";

export function Gallery() {
  return (
    <section className="flex flex-col gap-6 px-5 py-10">
      <Title className="text-center">Галерея</Title>
      <Carousel countSlides={3}>
        {galleryData.map((promo) => (
          <GalleryCard key={promo.alt} src={promo.src} alt={promo.alt} />
        ))}
      </Carousel>
    </section>
  );
}
