import { EmblaCarouselType } from "embla-carousel";

type UsePrevNextButtonsReturn = {
  onPrevButtonClick: VoidFunction;
  onNextButtonClick: VoidFunction;
};

export const usePrevNextButtons = (
  emblaApi?: EmblaCarouselType,
): UsePrevNextButtonsReturn => {
  const onPrevButtonClick = () => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  };

  const onNextButtonClick = () => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  };

  return {
    onPrevButtonClick,
    onNextButtonClick,
  };
};
