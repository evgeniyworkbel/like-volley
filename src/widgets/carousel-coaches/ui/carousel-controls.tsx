import { CarouselArrowLeft, CarouselArrowRight } from "@/shared/icons";
import { Button } from "@/shared/ui";
import { usePrevNextButtons } from "../hooks/use-prev-next-buttons";
import { CarouselControlsProps } from "../model/types";

export function CarouselControls({ emblaApi }: CarouselControlsProps) {
  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <div className="flex justify-between">
      <Button onClick={onPrevButtonClick}>
        <CarouselArrowLeft />
      </Button>
      <Button onClick={onNextButtonClick}>
        <CarouselArrowRight />
      </Button>
    </div>
  );
}
