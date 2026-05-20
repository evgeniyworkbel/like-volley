import { Route } from "next";
import { Review } from "@/shared/cms/payload-types";
import { FooterDecor } from "./footer-decor";

type ReviewItemProps = Pick<Review, "id" | "firstName" | "lastName" | "text" | "link">;

export function ReviewItem({ id, firstName, lastName, text }: ReviewItemProps) {
  return (
    <div className="relative flex w-80 flex-col gap-15 overflow-hidden rounded-[20px] bg-[oklch(0.9791_0_0)] px-4 py-6 text-lg xl:w-103 xl:gap-27 xl:px-7">
      <div className="line-clamp-9 text-left before:block before:font-serif before:text-[34px] before:leading-none before:font-bold before:text-accent-orange before:content-['“']">
        {text}
      </div>
      <FooterDecor />
      <div className="z-10 flex w-full items-end gap-3 font-bold text-white">
        <div className="flex size-12 items-center justify-center rounded-full bg-white text-accent-orange">
          {firstName[0]}
          {lastName[0]}
        </div>
        <div className="flex flex-col items-start">
          <div className="flex flex-col">
            {firstName}
            &nbsp;
            {lastName}
          </div>
          <a
            className="font-normal underline underline-offset-3"
            href={`/reviews/${id}` as Route}
            target="_blank"
          >
            Посмотреть отзыв
          </a>
        </div>
      </div>
    </div>
  );
}
