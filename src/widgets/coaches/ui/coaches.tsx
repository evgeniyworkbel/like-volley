import { Carousel } from "@/shared/ui";
import { coachesSectionId } from "@/shared/constants";
import { CoachCard } from "./coach-card";
import { OwnerCard } from "./owner-card";
import { getPayloadClient } from "@/shared/cms";
import { CoachModel } from "../model/types";
import { CITY_LABELS } from "../model/data";

export async function Coaches() {
  const payload = await getPayloadClient();
  const { docs: coaches } = (await payload.find({
    collection: "coaches",
  })) as { docs: CoachModel[] };

  return (
    <section
      id={coachesSectionId}
      className="flex flex-col items-center gap-11 py-10 xl:gap-10 xl:px-20"
    >
      <OwnerCard />
      <Carousel innerWrapperClassName="max-w-252" slidesPerView={3}>
        {coaches.map((coach) => {
          console.log(coach);
          return (
            <CoachCard
              key={coach.id}
              lastName={coach.lastName}
              firstName={coach.firstName}
              patronymicName={coach.patronymicName}
              description={coach.description}
              city={CITY_LABELS[coach.city]}
              photo={coach.photo}
            />
          );
        })}
      </Carousel>
    </section>
  );
}
