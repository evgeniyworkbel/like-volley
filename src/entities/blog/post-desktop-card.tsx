import Image from "next/image";

import { Post } from "@/shared/cms/payload-types";
import { cn } from "@/shared/lib";
import { DateWithReadTime } from "./date-with-read-time";
import { Badge } from "./badge";
import { toImgAttrs } from "@/shared/cms";

const aspectVariants = {
  blog: "aspect-[1.22]",
  widget: "aspect-[1.732]",
};

type PostDesktopCardProps = Pick<Post, "title" | "readTime" | "mainPhoto" | "createdAt"> &
  Partial<Pick<Post, "shortDescription">> & {
    category: string;
    viewMode?: keyof typeof aspectVariants;
  };

export function PostDesktopCard({
  title,
  category,
  shortDescription,
  readTime,
  mainPhoto,
  createdAt,
  viewMode = "blog",
}: PostDesktopCardProps) {
  const { src, alt } = toImgAttrs(mainPhoto);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[oklch(0.9276_0.0058_264.53)] transition-colors hover:[&_h4]:text-accent-orange">
      <div className={cn("relative w-full", aspectVariants[viewMode])}>
        <Image src={src} className="object-cover" alt={alt} fill />
      </div>
      <div className="flex grow flex-col justify-center gap-3 p-3">
        <Badge label={category} />
        <h4 className="text-lg leading-6 font-bold transition-colors">{title}</h4>
        <p className="line-clamp-3 text-sm">{shortDescription}</p>
        <DateWithReadTime className="mt-auto" date={createdAt} readTime={readTime} />
      </div>
    </article>
  );
}
