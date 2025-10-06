import { contactsLinks } from "@/shared/constants";
import Image from "next/image";
import Link from "next/link";
import { Promo } from "../model/types";

type GalleryCardProps = Promo;

export function GalleryCard({ src, alt }: GalleryCardProps) {
  return (
    <Link
      className="flex flex-col items-center gap-5"
      href={contactsLinks.gallery.href}
    >
      <div className="relative h-[366px] w-80 overflow-hidden rounded-[18px] xl:w-[366px]">
        <Image src={src} alt={alt} fill />
      </div>
    </Link>
  );
}
