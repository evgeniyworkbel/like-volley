import Image from "next/image";

import { Post } from "@/shared/cms/payload-types";
import { DateWithReadTime } from "./date-with-read-time";
import { Badge } from "./badge";
import { cn } from "@/shared/lib";

type PostMobileCardProps = Pick<Post, "title" | "mainPhoto" | "readTime" | "createdAt"> & {
  className?: string;
  category: string;
};

export function PostMobileCard({
  className,
  title,
  category,
  readTime,
  mainPhoto,
  createdAt,
}: PostMobileCardProps) {
  return (
    <article
      className={cn(
        "flex items-center gap-5 rounded-2xl border border-[oklch(0.9276_0.0058_264.53)] p-4 transition-colors",
        className,
      )}
    >
      <div className="relative flex aspect-[0.784] h-29 shrink-0 overflow-hidden rounded-2xl">
        {/* @todo: добавить alt */}
        <Image src={mainPhoto} className="object-cover" alt="" fill />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <Badge label={category} />
          <h4 className="text-sm leading-6 font-bold transition-colors">{title}</h4>
        </div>
        <DateWithReadTime date={createdAt} readTime={readTime} />
      </div>
    </article>
  );
}
