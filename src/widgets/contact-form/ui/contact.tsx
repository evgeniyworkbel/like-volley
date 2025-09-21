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
    <div className="flex flex-col justify-between gap-6">
      <div className="flex gap-6 xl:gap-7" key={title}>
        <Image src={imageSrc} width={48} height={48} alt={alt} />
        <div className="flex flex-col">
          <h3 className="font-bold">{title}</h3>
          <Link href={href} target="_blank" rel="noopener noreferrer">
            <span className="text-foreground-secondary">{href}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
