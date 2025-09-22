import { EmblaCarouselType } from "embla-carousel";

export type UsePrevNextButtonsType = {
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export type CarouselControlsProps = {
  emblaApi: EmblaCarouselType | undefined;
};
