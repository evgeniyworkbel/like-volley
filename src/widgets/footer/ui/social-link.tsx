import Image, { ImageProps } from "next/image";

type SocialLinkProps = Pick<ImageProps, "src" | "alt"> & Pick<HTMLAnchorElement, "href">;

export function SocialLink({ src, href, alt }: SocialLinkProps) {
  return (
    <a
      className="flex size-11.5 justify-center rounded-[14px] bg-background"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image src={src} width={28} height={28} alt={alt} />
    </a>
  );
}
