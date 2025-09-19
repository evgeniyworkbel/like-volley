import { contactsData } from "@/shared/constants";
import Image from "next/image";
import Link from "next/link";

export function Contacts() {
  return (
    <div className="flex flex-col justify-between gap-6">
      {contactsData.map(({ title, href, imageSrc, alt }) => (
        <div className="flex gap-6 xl:gap-7" key={title}>
          <Image src={imageSrc} width={48} height={48} alt={alt} />
          <div className="flex flex-col">
            <h3 className="font-bold">{title}</h3>
            <Link href={href} target="_blank" rel="noopener noreferrer">
              <span className="text-foreground-secondary">{href}</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
