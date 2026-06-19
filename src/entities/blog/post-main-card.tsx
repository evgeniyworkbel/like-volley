import Image from "next/image";
import { Post } from "@/shared/cms/payload-types";
import { Badge } from "./badge";
import { DateWithReadTime } from "./date-with-read-time";

type PostMainCardProps = {
  items: Pick<Post, "title" | "shortDescription" | "createdAt" | "readTime">;
};

export function PostMainCard({ items }: PostMainCardProps) {
  return (
    <div className="gap flex w-full flex-col gap-3 overflow-hidden rounded-xl border border-[oklch(0.9276_0.0058_264.53)] xl:gap-5 xl:rounded-t-2xl">
      <div className="relative flex aspect-[1.167] w-full xl:aspect-[3.2]">
        <Image
          src="/news/news_2.webp"
          className="object-cover"
          alt="Фото главной новости  блога"
          fill
        />
      </div>
      <div className="flex flex-col gap-3 px-3 pb-3 xl:px-5 xl:pb-8">
        <Badge title="Для родителей" />
        <div className="flex flex-col gap-6 xl:gap-9">
          <hgroup className="flex flex-col gap-3 xl:gap-4.5">
            <h2 className="line-clamp-3 text-lg font-bold xl:text-4xl">{items.title}</h2>
            <p className="line-clamp-3 text-sm xl:text-lg">{items.shortDescription}</p>
          </hgroup>
          <DateWithReadTime date={items.createdAt} readTime={items.readTime} />
        </div>
      </div>
    </div>
  );
}
