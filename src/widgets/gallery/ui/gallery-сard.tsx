import Image from "next/image";
import { Promo } from "../model/types";

type GalleryCardProps = Promo;

export function GalleryCard({ src, alt }: GalleryCardProps) {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="relative mb-20 h-[366px] w-80 overflow-hidden rounded-[18px] xl:w-[366px]">
        <Image src={src} alt={alt} fill />
      </div>
    </div>
  );
}
