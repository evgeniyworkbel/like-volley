import { CarouselProps } from "./model/types";
import { CoachCard } from "@/shared/ui/carousel/coaches-сard";

export function Carousel({ data }: CarouselProps) {
  return (
    <div className="flex">
      {data.map(({ name, description, src, alt }) => (
        <div key={name} className="w-full flex-shrink-0 xl:w-1/4">
          <CoachCard
            name={name}
            description={description}
            src={src}
            alt={alt}
          />
        </div>
      ))}
    </div>
  );
}
