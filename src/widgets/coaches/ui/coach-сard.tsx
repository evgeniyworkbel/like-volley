import Image from "next/image";
import { CoachModel } from "../model/types";

type CoachCardProps = CoachModel;

export function CoachCard({
  firstName,
  lastName,
  patronymicName,
  description,
  city,
  src,
  alt,
}: CoachCardProps) {
  return (
    <div className="flex flex-col items-center overflow-hidden rounded-[18px] border-2 border-[oklch(0.8327_0.002_247.32)] text-center">
      <div className="relative aspect-[1.1] h-70 w-full">
        <Image src={src} alt={alt} sizes="320px" fill />
      </div>
      <div className="flex min-h-54 flex-col items-center justify-between gap-6 pt-5 pb-[22px] text-sm">
        <hgroup className="flex flex-col items-center gap-3">
          <h4 className="flex flex-col text-center text-xl font-bold text-accent-orange">
            <span>{lastName}</span>
            <span>
              {firstName}&nbsp;{patronymicName}
            </span>
          </h4>
          <p className="text-balance text-foreground-secondary">
            {description}
          </p>
        </hgroup>
        <p className="text-foreground">
          Город:&nbsp;<span className="text-accent-orange">{city}</span>
        </p>
      </div>
    </div>
  );
}
