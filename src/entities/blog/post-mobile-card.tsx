import Image from "next/image";
import Link from "next/link";
import { DateWithReadTime } from "./date-with-read-time";
import { Post } from "@/shared/cms/payload-types";

type PostMobileCardProps = {
  item: Pick<Post, "id" | "title" | "createdAt" | "readTime">;
};

export function PostMobileCard({ item }: PostMobileCardProps) {
  return (
    <Link
      className="group flex gap-5 rounded-2xl border border-[oklch(0.9276_0.0058_264.53)] p-4 transition-colors duration-200 hover:bg-[oklch(0.9226_0.0053_264.44)]"
      href={`/blog/${item.id}`}
    >
      <div className="relative aspect-[0.784] w-23 overflow-hidden rounded-2xl">
        <Image src="/news/news_2.webp" className="object-cover" alt="Фото новости блога" fill />
      </div>
      <div className="flex w-44 flex-col justify-center gap-4">
        <h2 className="line-clamp-2 font-bold transition-colors duration-200 group-hover:text-accent-orange">
          {item.title}
        </h2>
        <DateWithReadTime date={item.createdAt} readTime={item.readTime} />
      </div>
    </Link>
  );
}
