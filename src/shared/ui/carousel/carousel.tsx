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
    <div className="grid w-full gap-4 xl:grid-cols-[auto_1fr_auto]">
      <CarouselButton
        className="hidden xl:inline"
        position="left"
        onClick={onPrevButtonClick}
      />
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-1">
          {Children.map(children, (child) => (
            <CarouselItem slidesPerView={slidesPerView}>{child}</CarouselItem>
          ))}
        </div>
      </div>

      <div className="flex justify-between xl:hidden">
        <CarouselButton position="left" onClick={onPrevButtonClick} />
        <CarouselButton position="right" onClick={onNextButtonClick} />
      </div>

      <CarouselButton
        className="hidden xl:inline"
        position="right"
        onClick={onNextButtonClick}
      />
    </div>
  );
}
