import { Route } from "next";
import Image, { ImageProps } from "next/image";
import Link, { LinkProps } from "next/link";

type ContactProps = Pick<LinkProps<Route>, "href"> &
  Pick<ImageProps, "alt"> & {
    title: string;
    imageSrc: string;
    label: string;
  };

export function Contact({ title, imageSrc, alt, href, label }: ContactProps) {
  return (
    <div className="flex gap-6 xl:gap-7">
      <Image src={imageSrc} width={48} height={48} alt={alt} />
      <div className="flex flex-col">
        <h3 className="font-bold">{title}</h3>
        <Link
          className="text-foreground-secondary"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </Link>
      </div>
    </div>
  );
}
