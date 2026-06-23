import Image from "next/image";
import Link from "next/link";

import { Post } from "@/shared/cms/payload-types";
import { LinkIcon } from "@/shared/icons";
import { DateWithReadTime } from "./date-with-read-time";
import { Badge } from "./badge";

type PostDesktopCardProps = Pick<
  Post,
  "id" | "title" | "shortDescription" | "mainPhoto" | "readTime" | "createdAt"
> & {
  category: string;
};

export function PostDesktopCard({
  id,
  title,
  category,
  shortDescription,
  readTime,
  createdAt,
}: PostDesktopCardProps) {
  const handleCopyLink = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const articleUrl = `${window.location.origin}/blog/${id}`;
    navigator.clipboard.writeText(articleUrl);
  };

  return (
    <Link
      className="group flex flex-col overflow-hidden rounded-2xl border border-[oklch(0.9276_0.0058_264.53)] transition-colors active:bg-[oklch(0.9226_0.0053_264.44)]"
      href={`/blog/${id}`}
    >
      <div className="relative h-62.5 w-full">
        {/* @todo:заменить alt */}
        <Image src="/news/news_2.webp" className="object-cover" alt="Фото новости блога" fill />
      </div>

      <div className="flex flex-col gap-3 p-3">
        <Badge label={category} />
        <h4 className="text-lg font-bold transition-colors group-hover:text-accent-orange">
          {title}
        </h4>
        <p className="line-clamp-3 text-sm">{shortDescription}</p>
        <div className="flex items-center justify-between">
          <DateWithReadTime date={createdAt} readTime={readTime} />
          <div
            className="flex items-center justify-center rounded-[98px] bg-[oklch(0.9846_0.0017_247.84)] px-3 py-2"
            role="button"
            tabIndex={0}
            onClick={handleCopyLink}
          >
            <LinkIcon />
          </div>
        </div>
      </div>
    </Link>
  );
}
