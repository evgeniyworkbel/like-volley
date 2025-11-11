import { contactsLinks } from "@/shared/constants";
import Image from "next/image";
import Link from "next/link";
import { GalleryItem } from "../model/types";

type GalleryCardProps = GalleryItem;

export function GalleryCard({ src, alt }: GalleryCardProps) {
  return (
    <Link
      className="group relative flex h-[366px] w-80 overflow-hidden rounded-[18px] xl:w-[366px]"
      href={contactsLinks.gallery.href}
    >
      <Image src={src} alt={alt} sizes="320px" fill />
      <div className="absolute inset-0 flex items-center justify-center font-semibold transition-colors duration-600 group-hover:bg-foreground/50">
        <span className="text-transparent transition-colors duration-600 group-hover:text-white">
          Смотреть все
        </span>
        {/** @todo: поменять на актуальные данные потом*/}
        {/* <p className="absolute bottom-2 left-4 flex flex-col text-transparent transition-colors duration-600 group-hover:text-white">
          <span>Тренировка перед матчем</span>
          <span className="text-xs font-normal">23.08.20024</span>
        </p> */}
      </div>
    </Link>
  );
}
