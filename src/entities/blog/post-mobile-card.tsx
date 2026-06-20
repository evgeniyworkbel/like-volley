import Image from "next/image";
import Link from "next/link";
import { DateWithReadTime } from "./date-with-read-time";
import { Badge } from "./badge";
import { PostCardProps } from "./model/types";

type PostMobileCardProps = Omit<PostCardProps, "shortDescription">;

export function PostMobileCard({ id, title, readTime, createdAt }: PostMobileCardProps) {
  return (
    <Link
      className="group flex gap-5 rounded-2xl border border-[oklch(0.9276_0.0058_264.53)] p-4 transition-colors duration-200 hover:bg-[oklch(0.9226_0.0053_264.44)] xl:hidden"
      href={`/blog/${id}`}
    >
      <div className="relative aspect-[0.784] w-23 overflow-hidden rounded-2xl">
        <Image src="/news/news_2.webp" className="object-cover" alt="Фото новости блога" fill />
      </div>
      <div className="flex w-44 flex-col justify-center gap-4">
        <Badge title="Для родителей" />
        <h2 className="line-clamp-2 font-bold transition-colors duration-200 group-hover:text-accent-orange">
          {title}
        </h2>
        <DateWithReadTime date={createdAt} readTime={readTime} />
      </div>
    </Link>
  );
}
