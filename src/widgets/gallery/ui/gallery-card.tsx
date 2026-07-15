import Image, { ImageProps } from "next/image";
import { format } from "date-fns";
import { PhotoAlbum } from "@/shared/cms/payload-types";
import { ArrowUpRight } from "@/shared/icons";

export type GalleryCardProps = Pick<ImageProps, "src" | "alt"> &
  Pick<PhotoAlbum, "albumName" | "albumDate">;

export function GalleryCard({ src, albumName, albumDate, alt }: GalleryCardProps) {
  const formattedDate = format(albumDate, "dd.MM.yyyy");
  return (
    <div className="relative flex aspect-[0.979] h-84 items-end overflow-hidden rounded-4xl p-2 xl:aspect-[0.949] xl:h-97">
      <Image src={src} alt={alt} sizes="364px" fill />
      <div className="z-10 flex w-full justify-between rounded-full bg-white py-2 pr-3 pl-4.5">
        <div className="flex flex-col gap-1">
          <span className="line-clamp-1 font-semibold">{albumName}</span>
          <span className="text-sm">{formattedDate}</span>
        </div>
        <div className="flex size-14.5 items-center justify-center rounded-full bg-accent-orange">
          <ArrowUpRight />
        </div>
      </div>
    </div>
  );
}
