import { LocationsMap } from "@/features";
import { locationsSectionId } from "@/shared/constants";
import { SectionTitle } from "@/shared/ui";

export function Locations() {
  return (
    <section
      id={locationsSectionId}
      className="flex flex-col items-center gap-5 px-5 py-10 xl:px-20"
    >
      <hgroup className="flex flex-col items-center gap-4 text-base xl:text-lg">
        <SectionTitle>
          Наши<span className="text-accent-orange">&nbsp;локации</span>
        </SectionTitle>
        <p className="text-center text-foreground-secondary">
          Найдите ближайший к вам центр обучения
        </p>
      </hgroup>
      <LocationsMap />
    </section>
  );
}
