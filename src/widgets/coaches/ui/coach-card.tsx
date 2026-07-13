import { toImgAttrs } from "@/shared/cms";
import { Coach } from "@/shared/cms/payload-types";
import Image from "next/image";

type CoachCardProps = Pick<
  Coach,
  "lastName" | "firstName" | "patronymicName" | "jobTitle" | "description" | "photo"
> & {
  city: string;
};

export function CoachCard({
  lastName,
  firstName,
  patronymicName,
  jobTitle,
  description,
  city,
  photo,
}: CoachCardProps) {
  const name = `${firstName} ${patronymicName}`;
  const { src, alt } = toImgAttrs(photo);

  return (
    <div className="flex flex-col items-center overflow-hidden rounded-[18px] border-2 border-[oklch(0.8327_0.002_247.32)] text-center">
      <div className="relative aspect-[1.1] h-70 w-full">
        <Image src={src} alt={alt} sizes="320px" fill />
      </div>
      <div className="flex min-h-54 flex-col items-center justify-between gap-6 pt-5 pb-5.5 text-sm">
        <hgroup className="flex flex-col items-center gap-3">
          <h4 className="flex flex-col text-center text-xl font-bold text-accent-orange">
            <span>{lastName}</span>
            <span>{name}</span>
          </h4>
          <p className="flex flex-col gap-1 text-balance text-foreground-secondary">
            <span>{jobTitle}</span>
            <span>{description}</span>
          </p>
        </hgroup>
        <p className="text-foreground">
          Город:&nbsp;<span className="text-accent-orange">{city}</span>
        </p>
      </div>
    </div>
  );
}
