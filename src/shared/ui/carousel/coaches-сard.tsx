import Image from "next/image";
import { Coach } from "./model/types";

export function CoachCard({ name, description, src, alt }: Coach) {
  return (
    <hgroup className="flex flex-col items-center gap-5">
      <div className="relative h-[268px] w-[268px] overflow-hidden rounded-[20px] xl:border-4 xl:border-accent-blue">
        <Image className="object-cover object-top" src={src} alt={alt} fill />
      </div>
      <h4 className="flex flex-col items-center gap-3">
        <p className="text-xl font-bold text-accent-orange">{name}</p>
        <span className="text-center text-sm text-foreground-secondary">
          {description}
        </span>
      </h4>
    </hgroup>
  );
}
