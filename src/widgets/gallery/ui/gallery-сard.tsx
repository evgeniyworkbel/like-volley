import Image from "next/image";
import Link from "next/link";
import { contactsLinks } from "@/shared/constants";
import { GalleryItemModel } from "../model/types";

type GalleryCardProps = GalleryItemModel;

export function GalleryCard({ src, alt }: GalleryCardProps) {
  return (
    <Link
      className="group flex overflow-hidden rounded-[18px] xl:mx-3"
      href={contactsLinks.gallery.href}
    >
      <div className="relative aspect-[0.874] h-[366px] xl:aspect-square">
        <Image src={src} alt={alt} sizes="365px" fill />
      </div>
      <div className="absolute inset-0 transition-colors duration-400 group-hover:bg-black/50" />
      <div className="z-10 font-semibold text-white opacity-0 transition-opacity duration-400 group-hover:opacity-100">
        <span className="absolute top-1/2 left-1/2 -translate-1/2">
          Смотреть все
        </span>
        {/** @todo: поменять на актуальные данные потом*/}
        {/* <p className="absolute bottom-2 left-4 flex flex-col ">
          <span>Тренировка перед матчем</span>
          <span className="text-xs font-normal">23.08.20024</span>
        </p> */}
      </div>
    </Link>
  );
}
