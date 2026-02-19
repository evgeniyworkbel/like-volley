import { Carousel } from "@/shared/ui";
import { coachesSectionId } from "@/shared/constants";
import { getPayloadClient } from "@/shared/cms";
import { CoachCard } from "./coach-card";
import { OwnerCard } from "./owner-card";

export async function Coaches() {
  const payload = await getPayloadClient();
  const coaches = await payload.find({ collection: "coaches", pagination: false });

  const coachesData = coaches.docs;

  return (
    <section
      id={coachesSectionId}
      className="flex flex-col items-center gap-11 py-10 xl:gap-10 xl:px-20"
    >
      <OwnerCard />
      <Carousel innerWrapperClassName="max-w-252" slidesPerView={3}>
        {coachesData?.map((coach) => (
          <CoachCard
            key={coach.id}
            lastName={coach.lastName}
            firstName={coach.firstName}
            patronymicName={coach.patronymicName}
            description={coach.description}
            city={coach.city}
            photo={coach.photo}
          />
        ))}
      </Carousel>
    </section>
  );
}
