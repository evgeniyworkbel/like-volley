import Image from "next/image";
import { SocialLinkModel } from "../model/types";

export function SocialLink({ src, href, alt }: SocialLinkModel) {
  return (
    <a
      className="flex size-11.5 rounded-[14px] bg-background"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image className="m-auto" src={src} width={28} height={28} alt={alt} />
    </a>
  );
}
