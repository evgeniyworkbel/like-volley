import { coachesData } from "../model/data";
import { CoachCard } from "./coache-сard";
import { SelectedCoach } from "./selected-coach";
import { Carousel } from "@/shared/ui";

export function Coaches() {
  return (
    <section className="flex flex-col gap-6 px-5 py-10">
      <SelectedCoach />
      <Carousel>
        {coachesData.map((coach) => (
          <CoachCard
            key={coach.name}
            name={coach.name}
            description={coach.description}
            src={coach.src}
            alt={coach.alt}
          />
        ))}
      </Carousel>
    </section>
  );
}
