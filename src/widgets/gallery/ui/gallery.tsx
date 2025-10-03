import { galleryData } from "../model/data";
import { Carousel, Title } from "@/shared/ui";
import { GalleryCard } from "./gallery-сard";

export function Gallery() {
  return (
    <section className="flex flex-col gap-6 px-5 py-10">
      <Title className="text-center">Галерея</Title>
      <Carousel>
        {galleryData.map((coach) => (
          <GalleryCard key={coach.alt} src={coach.src} alt={coach.alt} />
        ))}
      </Carousel>
    </section>
  );
}
