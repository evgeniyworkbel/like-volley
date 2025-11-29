import { Carousel } from "@/shared/ui";
import { coachesData } from "../model/data";
import { CoachCard } from "./coach-card";
import { OwnerCard } from "./owner-card";

export function Coaches() {
  return (
    <section className="flex flex-col items-center gap-6 py-10 xl:px-20">
      <OwnerCard />
      <Carousel innerWrapperClassName="max-w-252" slidesPerView={3}>
        {coachesData.map((coach) => (
          <CoachCard
            key={coach.id}
            lastName={coach.lastName}
            firstName={coach.firstName}
            patronymicName={coach.patronymicName}
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
