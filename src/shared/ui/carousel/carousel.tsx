"use client";

import useEmblaCarousel from "embla-carousel-react";
import { Children } from "react";
import { CarouselItem } from "./carousel-item";
import { usePrevNextButtons } from "./use-prev-next-buttons";
import { CarouselButton } from "./carousel-button";
import { cn } from "@/shared/lib";

export type CarouselProps = {
  innerWrapperClassName?: string;
  slidesPerView: number;
  children: React.ReactElement[];
};

export function Carousel({
  innerWrapperClassName,
  slidesPerView,
  children,
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <div className="flex w-full flex-col xl:w-auto xl:flex-row">
      <CarouselButton
        className="hidden xl:inline"
        position="left"
        onClick={onPrevButtonClick}
      />
      <div
        className={cn("overflow-hidden", innerWrapperClassName)}
        ref={emblaRef}
      >
        <div className="flex">
          {Children.map(children, (child) => (
            <CarouselItem slidesPerView={slidesPerView}>{child}</CarouselItem>
          ))}
        </div>
      </div>

      <div className="flex justify-between px-18 pt-[22px] xl:hidden">
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
