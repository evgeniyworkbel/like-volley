import { contactsLinks } from "@/shared/constants";
import Image from "next/image";
import Link from "next/link";
import { GalleryItem } from "../model/types";

type GalleryCardProps = GalleryItem;

export function GalleryCard({ src, alt }: GalleryCardProps) {
  return (
    <Link
      className="relative flex h-[366px] w-80 gap-5 overflow-hidden rounded-[18px] xl:w-[366px]"
      href={contactsLinks.gallery.href}
    >
      <Image src={src} alt={alt} fill />
    </Link>
  );
}
