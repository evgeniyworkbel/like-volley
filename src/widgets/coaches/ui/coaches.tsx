import { coachesData } from "../model/data";
import { CarouselControls } from "@/shared/ui/carousel/carousel-controls";
import { SelectedCoach } from "./selected-coach";
import { Carousel } from "@/shared/ui";

export function Coaches() {
  return (
    <section className="flex flex-col gap-6 px-5 py-10">
      <SelectedCoach />
      <Carousel data={coachesData} />
    </section>
  );
}
