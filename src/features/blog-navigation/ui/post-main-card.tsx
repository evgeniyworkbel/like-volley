import Image from "next/image";
import { Badge } from "./badge";

type PostMainCardProps = { title: string; shortDescription: string };

export function PostMainCard({ title, shortDescription }: PostMainCardProps) {
  return (
    <div className="gap flex w-full flex-col gap-3 overflow-hidden rounded-xl border border-[oklch(0.9276_0.0058_264.53)] xl:gap-5 xl:rounded-t-2xl">
      <div className="relative flex aspect-[1.167] w-full xl:aspect-[3.2]">
        <Image
          src="/news/postMainCard.svg"
          className="object-cover"
          alt="Фото учеников школы"
          fill
        />
      </div>
      <div className="flex flex-col gap-3 px-3 xl:px-5">
        <Badge title="Для родителей" />
        <hgroup className="flex flex-col gap-3 xl:gap-4.5">
          <h2 className="text-lg font-bold xl:text-4xl">{title}</h2>
          <p className="line-clamp-3 text-sm xl:text-lg">{shortDescription}</p>
        </hgroup>
      </div>
    </div>
  );
}
