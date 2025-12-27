import { NativeLinkProps } from "@/shared/types";
import Image, { ImageProps } from "next/image";

type ContactProps = Pick<NativeLinkProps, "href"> &
  Pick<ImageProps, "alt"> & {
    title: string;
    imageSrc: string;
    label: string;
  };

export function Contact({ title, imageSrc, alt, href, label }: ContactProps) {
  return (
    <div className="flex gap-6 xl:gap-7">
      <Image src={imageSrc} width={48} height={48} alt={alt} />
      <div className="flex flex-col gap-1">
        <h3 className="font-bold">{title}</h3>
        <a
          className="text-accent-orange underline underline-offset-2 xl:text-foreground-secondary xl:no-underline xl:hover:text-accent-orange xl:hover:underline xl:hover:underline-offset-2"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </a>
      </div>
    </div>
  );
}
