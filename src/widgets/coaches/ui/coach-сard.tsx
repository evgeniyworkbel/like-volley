import Image from "next/image";
import { Coach } from "../model/types";

type CoachCardProps = Coach;

export function CoachCard({ name, description, src, alt }: CoachCardProps) {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="relative h-70 w-80 overflow-hidden rounded-t-[18px]">
        <Image src={src} alt={alt} sizes="320px" fill />
      </div>
      <hgroup className="flex max-w-[268px] flex-col items-center gap-3">
        <h4 className="text-xl font-bold text-accent-orange">{name}</h4>
        <p className="text-center text-sm text-foreground-secondary">
          {description}
        </p>
      </hgroup>
    </div>
  );
}
