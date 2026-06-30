import Image from "next/image";

import { Post } from "@/shared/cms/payload-types";
import { cn } from "@/shared/lib";
import { DateWithReadTime } from "./date-with-read-time";
import { Badge } from "./badge";

type PostDesktopCardProps = Pick<Post, "title" | "readTime" | "mainPhoto" | "createdAt"> &
  Partial<Pick<Post, "shortDescription">> & {
    category: string;
    ImageAspectRatio?: string;
  };

export function PostDesktopCard({
  title,
  category,
  shortDescription,
  readTime,
  mainPhoto,
  createdAt,
  ImageAspectRatio,
}: PostDesktopCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-[oklch(0.9276_0.0058_264.53)] transition-colors hover:[&_h4]:text-accent-orange">
      {/* @todo: проверить при merge */}
      <div className={cn("relative aspect-[1.22] w-full", ImageAspectRatio)}>
        {/* @todo: добавить alt */}
        <Image src={mainPhoto} className="object-cover" alt="" fill />
      </div>

      <div className="flex flex-col justify-center gap-3 p-3">
        <Badge label={category} />
        <h4 className="text-lg leading-6 font-bold transition-colors">{title}</h4>
        <p className="line-clamp-3 text-sm">{shortDescription}</p>
        <DateWithReadTime date={createdAt} readTime={readTime} />
      </div>
    </article>
  );
}
