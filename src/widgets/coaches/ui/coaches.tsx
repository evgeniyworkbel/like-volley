import { coachesData } from "../model/data";
import { CoachCard } from "./coach-сard";
import { Owner } from "./owner";
import { Carousel } from "@/shared/ui";

export function Coaches() {
  return (
    <section className="flex flex-col gap-6 py-10 xl:px-20 xl:[&>*:last-child]:px-12">
      <Owner />
      <Carousel slidesPerView={3}>
        {coachesData.map((coach) => (
          <CoachCard
            key={coach.name}
            name={coach.name}
            description={coach.description}
            city={coach.city}
            src={coach.src}
            alt={coach.alt}
          />
        ))}
      </Carousel>
    </section>
  );
}
