import { EmblaCarouselType } from "embla-carousel";
import { useState, useEffect } from "react";

export type UseDotReturn = {
  selectedIndex: number;
  scrollSnaps: number[];
};

export const useDotButton = (emblaApi?: EmblaCarouselType): UseDotReturn => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onInit = (emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  };

  const onSelect = (emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  };

  useEffect(() => {
    if (emblaApi) {
      onInit(emblaApi);
      onSelect(emblaApi);
      emblaApi
        .on("reInit", onInit)
        .on("reInit", onSelect)
        .on("select", onSelect);
    }
  }, [emblaApi]);

  return {
    selectedIndex,
    scrollSnaps,
  };
};
