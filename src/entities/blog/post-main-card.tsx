import Image from "next/image";
import { Badge } from "./badge";
import { DateWithReadTime } from "./date-with-read-time";
import { Post } from "@/shared/cms/payload-types";

type PostMainCardProps = Pick<
  Post,
  "title" | "category" | "shortDescription" | "readTime" | "createdAt"
>;

export function PostMainCard({
  title,
  category,
  shortDescription,
  readTime,
  createdAt,
}: PostMainCardProps) {
  const categoryLabel = typeof category === "object" ? category.label : "";

  return (
    <div className="flex w-full flex-col gap-3 overflow-hidden rounded-xl border border-[oklch(0.9276_0.0058_264.53)] xl:gap-5 xl:rounded-t-2xl">
      <div className="relative flex aspect-[1.167] w-full xl:aspect-[3.2]">
        <Image
          src="/news/news_2.webp"
          className="object-cover"
          alt="Фото главной новости  блога"
          fill
        />
      </div>
      <div className="flex flex-col gap-3 px-3 pb-3 xl:px-5 xl:pb-8">
        <Badge label={categoryLabel} />
        <div className="flex flex-col gap-6 xl:gap-9">
          <hgroup className="flex flex-col gap-3 xl:gap-4.5">
            <h3 className="text-lg font-bold xl:text-4xl">{title}</h3>
            <p className="line-clamp-3 text-sm xl:text-lg">{shortDescription}</p>
          </hgroup>
          <DateWithReadTime date={createdAt} readTime={readTime} />
        </div>
      </div>
    </div>
  );
}
