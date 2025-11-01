import { CarouselArrowIcon } from "@/shared/icons";
import { EmblaCarouselType } from "embla-carousel";
import { Button } from "@/shared/ui";
import { usePrevNextButtons } from "./use-prev-next-buttons";

export type CarouselControlsProps = Pick<
  React.HTMLAttributes<HTMLDivElement>,
  "className" | "children"
> & {
  emblaApi?: EmblaCarouselType;
};

export function CarouselControls({
  emblaApi,
  children,
}: CarouselControlsProps) {
  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <div className="relative flex items-center justify-between xl:justify-center xl:gap-30">
      <Button
        className="absolute bottom-0 left-0 z-50 xl:top-1/2 xl:-translate-y-1/2"
        onClick={onPrevButtonClick}
      >
        <CarouselArrowIcon className="rotate-180" />
      </Button>
      {children}
      <Button
        className="absolute right-0 bottom-0 z-50 xl:top-1/2 xl:-translate-y-1/2"
        onClick={onNextButtonClick}
      >
        <CarouselArrowIcon />
      </Button>
    </div>
  );
}
