import Image, { ImageProps } from "next/image";

type CoachesCardProps = Pick<ImageProps, "alt"> & {
  name: string;
  description: string;
  imageSrc: string;
};

export function CoachesCard({
  name,
  description,
  imageSrc,
  alt,
}: CoachesCardProps) {
  return (
    <div key={name} className="flex flex-col items-center gap-5">
      <Image src={imageSrc} width={269} height={269} alt={alt} />
      <div className="flex flex-col items-center">
        <p className="flex flex-col items-center gap-3">
          <span className="text-xl font-bold text-accent-orange">{name}</span>
          <span className="text-center text-sm text-foreground-secondary">
            {description}
          </span>
        </p>
      </div>
    </div>
  );
}
