import Image from "next/image";
import { Coach } from "../model/types";

type CoachCardProps = Coach;

export function CoachCard({ name, description, src, alt }: CoachCardProps) {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="relative h-[270px] w-[270px] overflow-hidden rounded-[20px] border-4 border-accent-blue">
        <Image src={src} alt={alt} fill />
      </div>
      <hgroup className="flex max-w-72 flex-col items-center gap-3">
        <h4 className="text-xl font-bold text-accent-orange">{name}</h4>
        <p className="text-center text-sm text-foreground-secondary">
          {description}
        </p>
      </hgroup>
    </div>
  );
}
