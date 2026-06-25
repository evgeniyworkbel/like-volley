import Image from "next/image";
import Link from "next/link";

import { Post } from "@/shared/cms/payload-types";
import { DateWithReadTime } from "./date-with-read-time";
import { Badge } from "./badge";
import { CopyLinkButton } from "./copy-link-button";

type PostDesktopCardProps = Pick<
  Post,
  "id" | "title" | "shortDescription" | "readTime" | "mainPhoto" | "createdAt"
> & {
  category: string;
};

export function PostDesktopCard({
  id,
  title,
  category,
  shortDescription,
  readTime,
  mainPhoto,
  createdAt,
}: PostDesktopCardProps) {
  return (
    <Link
      className="group flex flex-col overflow-hidden rounded-2xl border border-[oklch(0.9276_0.0058_264.53)] transition-colors active:bg-[oklch(0.9226_0.0053_264.44)]"
      href={`/blog/${id}`}
    >
      <div className="relative h-62.5 w-full">
        {/* @todo: добавить alt */}
        <Image src={mainPhoto} className="object-cover" alt="" fill />
      </div>

      <div className="flex flex-col gap-3 p-3">
        <Badge label={category} />
        <h4 className="h-12 text-lg leading-6 font-bold transition-colors group-hover:text-accent-orange">
          {title}
        </h4>
        <p className="line-clamp-3 text-sm">{shortDescription}</p>
        <div className="flex items-center justify-between">
          <DateWithReadTime date={createdAt} readTime={readTime} />
          <CopyLinkButton id={id} />
        </div>
      </div>
    </Link>
  );
}
