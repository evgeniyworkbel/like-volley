import Image from "next/image";

import { Post } from "@/shared/cms/payload-types";
import { DateWithReadTime } from "./date-with-read-time";
import { Badge } from "./badge";

type PostDesktopCardProps = Pick<
  Post,
  "title" | "shortDescription" | "readTime" | "mainPhoto" | "createdAt"
> & {
  category: string;
};

export function PostDesktopCard({
  title,
  category,
  shortDescription,
  readTime,
  mainPhoto,
  createdAt,
}: PostDesktopCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-[oklch(0.9276_0.0058_264.53)] transition-colors hover:[&_h4]:text-accent-orange">
      <div className="relative h-62.5 w-full">
        {/* @todo: добавить alt */}
        <Image src={mainPhoto} className="object-cover" alt="" fill />
      </div>

      <div className="flex flex-col gap-3 p-3">
        <Badge label={category} />
        <h4 className="h-12 text-lg leading-6 font-bold transition-colors">{title}</h4>
        <p className="line-clamp-3 text-sm">{shortDescription}</p>
        <DateWithReadTime date={createdAt} readTime={readTime} />
      </div>
    </article>
  );
}
