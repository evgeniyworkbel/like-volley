import Image from "next/image";
import { GalleryItemModel } from "../model/types";

type GalleryCardProps = GalleryItemModel;

export function GalleryCard({ src, alt }: GalleryCardProps) {
  return (
    <div className="relative flex aspect-[0.949] h-84 max-w-91 overflow-hidden rounded-4xl md:aspect-square">
      <Image src={src} alt={alt} sizes="364px" fill />
    </div>
  );
}
