import { coachesData } from "../model/coachesData";
import { Button } from "@/shared/ui";
import Image from "next/image";

export function CoachesCard() {
  return (
    <div className="flex flex-col items-center justify-between p-[18px]">
      {coachesData.map(({ name, description, imageSrc, alt }) => {
        return (
          <div key={name} className="flex flex-col items-center">
            <Image src={imageSrc} width={269} height={269} alt={alt} />
            <div className="flex flex-col items-center gap-8">
              <p className="flex flex-col items-center gap-3">
                <span className="text-xl font-bold text-accent-orange">
                  {name}
                </span>
                <span className="text-center text-foreground-secondary">
                  {description}
                </span>
              </p>
              <Button className="rounded-[20px] bg-accent-blue px-10 py-[10px] text-base font-semibold text-white xl:rounded-[40px] xl:px-25 xl:py-4 xl:text-xl">
                Подробнее
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
