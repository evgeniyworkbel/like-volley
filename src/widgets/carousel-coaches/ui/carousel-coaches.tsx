"use client";

import useEmblaCarousel from "embla-carousel-react";
import { CoachesCard } from "./coaches-сard";
import { CarouselArrowLeft, CarouselArrowRight } from "@/shared/icons";
// import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

export function CarouselCoaches() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // const { selectedIndex, scrollSnaps, onDotButtonClick } =
  //   useDotButton(emblaApi);

  return (
    <section className="flex items-center px-5 py-10">
      <div className="overflow-hidden" ref={emblaRef}>
        <CoachesCard />
        <CarouselArrowLeft />
        <CarouselArrowRight />
      </div>
    </section>
  );
}
