import { Carousel } from "@/shared/ui";
import { coachesSectionId } from "@/shared/constants";
import { COMPANY_CITIES_OPTIONS, getPayloadClient } from "@/shared/cms";
import { CoachCard } from "./coach-card";
import { OwnerCard } from "./owner-card";

export async function Coaches() {
  const payload = await getPayloadClient();
  const coaches = await payload.find({ collection: "coaches", pagination: false });

  const coachesData = coaches.docs.map((item) => {
    const cityOption = COMPANY_CITIES_OPTIONS.find((option) => option.value === item.city);
    const city = cityOption?.label || "";
    return { ...item, city };
  });

  return (
    <section
      id={coachesSectionId}
      className="flex flex-col items-center gap-11 py-10 xl:gap-10 xl:px-20"
    >
      <OwnerCard />
      <Carousel innerWrapperClassName="max-w-252" slidesPerView={3}>
        {coachesData?.map((item) => (
          <CoachCard
            key={item.id}
            lastName={item.lastName}
            firstName={item.firstName}
            patronymicName={item.patronymicName}
            jobTitle={item.jobTitle}
            description={item.description}
            city={item.city}
            photo={item.photo}
          />
        ))}
      </Carousel>
    </section>
  );
}
