import Image from "next/image";
import Link from "next/link";
import { Except } from "@/shared/types";

import { DateWithReadTime } from "./date-with-read-time";
import { PostCardProps } from "./model/types";
import { Badge } from "./badge";

type PostMobileCardProps = Except<PostCardProps, "shortDescription">;

export function PostMobileCard({ id, category, title, readTime, createdAt }: PostMobileCardProps) {
  const categoryLabel = typeof category === "object" ? category.label : "";

  return (
    <Link
      className="group flex items-center gap-5 rounded-2xl border border-[oklch(0.9276_0.0058_264.53)] p-4 transition-colors active:bg-[oklch(0.9226_0.0053_264.44)]"
      href={`/blog/${id}`}
    >
      <div className="relative flex aspect-[0.784] h-29 shrink-0 overflow-hidden rounded-2xl">
        <Image src="/news/news_2.webp" className="object-cover" alt="Фото новости блога" fill />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <Badge label={categoryLabel} />
          <h4 className="font-bold transition-colors group-active:text-accent-orange">{title}</h4>
        </div>
        <DateWithReadTime date={createdAt} readTime={readTime} />
      </div>
    </Link>
  );
}
