import Image from "next/image";
import { GalleryItemModel } from "../model/types";
import { DescriptionsFoto } from "./descriptions-foto";

type GalleryCardProps = GalleryItemModel;

export function GalleryCard({ src, alt }: GalleryCardProps) {
  return (
    <div className="relative flex aspect-[0.938] w-91 items-end justify-center overflow-hidden">
      <Image src={src} alt={alt} sizes="364px" fill />
      <DescriptionsFoto />
    </div>
  );
}
