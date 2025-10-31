import { CarouselArrowIcon } from "@/shared/icons";
import { EmblaCarouselType } from "embla-carousel";
import { Button } from "@/shared/ui";
import { usePrevNextButtons } from "./use-prev-next-buttons";

export type CarouselControlsProps = {
  emblaApi?: EmblaCarouselType;
};

export function CarouselControls({ emblaApi }: CarouselControlsProps) {
  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <div className="flex items-center justify-between xl:justify-center xl:gap-30">
      <Button onClick={onPrevButtonClick}>
        <CarouselArrowIcon className="rotate-180" />
      </Button>
      <Button onClick={onNextButtonClick}>
        <CarouselArrowIcon />
      </Button>
    </div>
  );
}
