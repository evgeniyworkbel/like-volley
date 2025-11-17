import Image from "next/image";
import { Coach } from "../model/types";

type CoachCardProps = Coach;

export function CoachCard({
  name,
  description,
  city,
  src,
  alt,
}: CoachCardProps) {
  return (
    <div className="flex w-80 flex-col items-center overflow-hidden rounded-[18px] border-2 border-[oklch(0.8327_0.002_247.32)]">
      <div className="relative h-70 w-80">
        <Image src={src} alt={alt} sizes="320px" fill />
      </div>
      <div className="flex min-h-54 flex-col items-center justify-between gap-6 pt-5 pb-[22px]">
        <hgroup className="flex flex-col gap-3 text-center whitespace-pre-line">
          <h4 className="text-xl font-bold text-accent-orange">{name}</h4>
          <p className="text-sm text-foreground-secondary">{description}</p>
        </hgroup>
        <p className="flex text-center text-sm text-foreground">
          Город:&nbsp;<span className="text-accent-orange">{city}</span>
        </p>
      </div>
    </div>
  );
}
