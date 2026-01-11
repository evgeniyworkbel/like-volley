import { ImageProps } from "next/image";

export type SocialLinkModel = Pick<ImageProps, "src" | "alt"> & Pick<HTMLAnchorElement, "href">;
