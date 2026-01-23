import Image from "next/image";
import { GalleryItemModel } from "../model/types";
// import { DescriptionsFoto } from "./descriptions-foto";

type GalleryCardProps = GalleryItemModel;

export function GalleryCard({ src, alt }: GalleryCardProps) {
  return (
    <div className="relative flex aspect-[0.874] h-91.5 max-w-91 items-end overflow-hidden rounded-[18px] md:aspect-square">
      <Image src={src} alt={alt} sizes="364px" fill />
      {/* <DescriptionsFoto /> */}
    </div>
  );
}
