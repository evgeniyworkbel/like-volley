import Image from "next/image";
import { Coach } from "../model/types";

type CoachCardProps = Coach;

export function CoachCard({ name, description, src, alt }: CoachCardProps) {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex flex-col items-center overflow-hidden rounded-[18px] border-2 border-[oklch(0.8327_0.002_247.32)]">
        <div className="relative h-70 w-80">
          <Image src={src} alt={alt} sizes="320px" fill />
        </div>
        <hgroup className="flex max-w-[268px] flex-col items-center gap-3">
          <h4 className="text-xl font-bold text-accent-orange">{name}</h4>
          <p className="text-center text-sm text-foreground-secondary">
            {description}
          </p>
        </hgroup>
      </div>
    </div>
  );
}
