import { EmblaCarouselType } from "embla-carousel";
import { ImageProps } from "next/image";

export type UsePrevNextButtonsType = {
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export type CarouselControlsProps = {
  emblaApi?: EmblaCarouselType;
};

export type UseDotType = {
  selectedIndex: number;
  scrollSnaps: number[];
};

export type Coach = Pick<ImageProps, "alt" | "src"> & {
  name: string;
  description: string;
};
