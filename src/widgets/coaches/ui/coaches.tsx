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
        {coaches &&
          coaches.map(({ id, firstName, lastName, patronymicName, city, description, photo }) => (
            <CoachCard
              key={id}
              lastName={lastName}
              firstName={firstName}
              patronymicName={patronymicName}
              description={description}
              city={CITY_LABELS[city]}
              photo={photo}
            />
          ))}
      </Carousel>
    </section>
  );
}
