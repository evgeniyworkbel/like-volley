"use client";

import useEmblaCarousel from "embla-carousel-react";
import { Children } from "react";
import { CarouselItem } from "./carousel-item";
import { usePrevNextButtons } from "./use-prev-next-buttons";
import { CarouselButton } from "./carousel-button";

export type CarouselProps = {
  slidesPerView: number;
  children: React.ReactElement[];
};

export function Carousel({ slidesPerView, children }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <div className="grid gap-4 xl:grid-cols-[auto_1fr_auto]">
      <CarouselButton onClick={onPrevButtonClick} position="left" />
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-1">
          {Children.map(children, (child) => (
            <CarouselItem slidesPerView={slidesPerView}>{child}</CarouselItem>
          ))}
        </div>
      </div>

      <div className="flex justify-between xl:hidden">
        <CarouselButton
          onClick={onPrevButtonClick}
          position="left"
          className="block"
        />
        <CarouselButton
          onClick={onNextButtonClick}
          position="right"
          className="block"
        />
      </div>

      <CarouselButton onClick={onNextButtonClick} position="right" />
    </div>
  );
}
