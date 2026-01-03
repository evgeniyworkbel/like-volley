import { LocationsMap } from "@/features";
import { locationsSectionId } from "@/shared/constants";
import { Title } from "@/shared/ui";

export function Locations() {
  return (
    <div id={locationsSectionId} className="flex flex-col items-center gap-5 px-5 py-10 xl:px-20">
      <hgroup className="flex flex-col items-center gap-4 text-center text-base xl:text-lg">
        <Title>
          Наши<span className="text-accent-orange">&nbsp;локации</span>
        </Title>
        <p className="text-foreground-secondary">Найдите ближайший к вам центр обучения</p>
      </hgroup>
      <LocationsMap />
    </div>
  );
}
