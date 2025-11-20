import { coachesData } from "../model/data";
import { CoachCard } from "./coach-сard";
import { OwnerCard } from "./owner-card";
import { Carousel } from "@/shared/ui";

export function Coaches() {
  return (
    <section className="flex flex-col items-center gap-6 py-10 xl:px-20">
      <OwnerCard />
      <Carousel innerWrapperClassName="max-w-252" slidesPerView={3}>
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
