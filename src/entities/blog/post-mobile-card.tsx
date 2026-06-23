import Image from "next/image";
import Link from "next/link";

import { Post } from "@/shared/cms/payload-types";
import { DateWithReadTime } from "./date-with-read-time";
import { Badge } from "./badge";

type PostMobileCardProps = Pick<Post, "id" | "title" | "mainPhoto" | "readTime" | "createdAt"> & {
  category: string;
};

export function PostMobileCard({
  id,
  title,
  category,
  readTime,
  // mainPhoto,
  createdAt,
}: PostMobileCardProps) {
  return (
    <Link
      className="group flex items-center gap-5 rounded-2xl border border-[oklch(0.9276_0.0058_264.53)] p-4 transition-colors active:bg-[oklch(0.9226_0.0053_264.44)]"
      href={`/blog/${id}`}
    >
      <div className="relative flex aspect-[0.784] h-29 shrink-0 overflow-hidden rounded-2xl">
        {/* @todo:заменить alt */}
        <Image src="/news/news_2.webp" className="object-cover" alt="Фото новости блога" fill />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <Badge label={category} />
          <h4 className="font-bold transition-colors group-active:text-accent-orange">{title}</h4>
        </div>
        <DateWithReadTime date={createdAt} readTime={readTime} />
      </div>
    </Link>
  );
}
