import { Route } from "next";
import Link from "next/link";
import { Review } from "@/shared/cms/payload-types";
import { BackgroundDecor } from "./background-decor";

type ReviewItemProps = Pick<Review, "id" | "firstName" | "lastName" | "text" | "link">;

export function ReviewItem({ id, firstName, lastName, text }: ReviewItemProps) {
  return (
    <div className="relative flex max-w-103 flex-col items-center justify-between overflow-hidden rounded-[20px] bg-[oklch(0.9791_0_0)] px-4 py-4.5 pb-6 text-[18px] xl:h-105 xl:px-7">
      <div className="flex flex-col">
        <p className="text-[32px] leading-none text-accent-orange">&rdquo;</p>
        {text}
      </div>
      <BackgroundDecor />
      <div className="z-10 flex w-full items-center gap-4 text-white">
        <div className="flex size-12 items-center justify-center rounded-full bg-white font-bold text-accent-orange">
          {firstName[0]}
          {lastName[0]}
        </div>
        <div className="flex flex-col font-bold">
          <div className="flex flex-col">
            {firstName}
            &nbsp;
            {lastName}
          </div>
          <Link
            className="underline underline-offset-3"
            href={`/reviews/${id}` as Route}
            target="_blank"
          >
            Посмотреть отзыв
          </Link>
        </div>
      </div>
    </div>
  );
}
