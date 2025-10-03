import Image from "next/image";
import { Promo } from "../model/types";

type GalleryCardProps = Promo;

export function GalleryCard({ src, alt }: GalleryCardProps) {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="relative h-[366px] w-full overflow-hidden rounded-[18px] xl:w-[366px]">
        <Image src={src} alt={alt} fill />
      </div>
    </div>
  );
}
