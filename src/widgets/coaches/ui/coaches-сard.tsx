import Image from "next/image";
import { Coach } from "../model/types";

export function CoachCard({ name, description, src, alt }: Coach) {
  return (
    <hgroup className="flex flex-col items-center gap-5">
      <Image src={src} width={268} height={268} alt={alt} />
      <h4 className="flex flex-col items-center gap-3">
        <p className="text-xl font-bold text-accent-orange">{name}</p>
        <span className="text-center text-sm text-foreground-secondary">
          {description}
        </span>
      </h4>
    </hgroup>
  );
}
