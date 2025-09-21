import Image from "next/image";
import Link from "next/link";
import { Route } from "next";

type ContactProps = {
  title: string;
  href: Route;
  imageSrc: string;
  alt: string;
};

export function Contact({ title, imageSrc, alt, href }: ContactProps) {
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
          {href}
        </Link>
      </div>
    </div>
  );
}
