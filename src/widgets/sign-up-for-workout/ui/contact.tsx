import Image, { ImageProps } from "next/image";

type ContactProps = Pick<ImageProps, "alt"> & {
  title: string;
  imageSrc: string;
  label: string;
};

export function Contact({ title, imageSrc, alt, label }: ContactProps) {
  return (
    <div className="flex gap-6 xl:gap-7">
      <Image src={imageSrc} width={48} height={48} alt={alt} />
      <hgroup className="flex flex-col gap-1">
        <h3 className="font-bold">{title}</h3>
        <p className="text-accent-orange">{label}</p>
      </hgroup>
    </div>
  );
}
