import { Carousel } from "@/shared/ui";
import { coachesSectionId } from "@/shared/constants";
import { CoachCard } from "./coach-card";
import { OwnerCard } from "./owner-card";
import { getPayloadClient } from "@/shared/cms";
import { CoachModel } from "../model/types";

export async function Coaches() {
  const payload = await getPayloadClient();
  const coachesData = (await payload.find({
    collection: "coaches",
  })) as { docs: CoachModel[] };

  const { docs: coaches } = coachesData;

  if (!coaches.length) return null;

  return (
    <section
      id={coachesSectionId}
      className="flex flex-col items-center gap-11 py-10 xl:gap-10 xl:px-20"
    >
      <OwnerCard />
      <Carousel innerWrapperClassName="max-w-252" slidesPerView={3}>
        {coaches &&
          coaches.map(
            ({ id, firstName, lastName, patronymicName, cityLabel, description, photo }) => (
              <CoachCard
                key={id}
                lastName={lastName}
                firstName={firstName}
                patronymicName={patronymicName}
                description={description}
                city={cityLabel}
                photo={photo}
              />
            ),
          )}
      </Carousel>
    </section>
  );
}
