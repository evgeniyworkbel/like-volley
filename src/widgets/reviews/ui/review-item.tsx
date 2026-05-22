import { Review } from "@/shared/cms/payload-types";
import { FooterDecor } from "./footer-decor";

type ReviewItemProps = Pick<Review, "firstName" | "lastName" | "text" | "link">;

export function ReviewItem({ firstName, lastName, text, link }: ReviewItemProps) {
  const fio = `${firstName} ${lastName}`;

  return (
    <div className="relative flex w-80 flex-col gap-15 overflow-hidden rounded-[20px] bg-[oklch(0.9791_0_0)] px-4 py-6 text-lg xl:w-103 xl:gap-27 xl:px-7">
      <div className="line-clamp-8 text-left">
        <blockquote cite={link}>
          <p>
            <span className="block text-[34px] leading-none text-accent-orange">&rdquo;</span>
            {text}
          </p>
        </blockquote>
      </div>
      <FooterDecor />
      <div className="z-10 flex w-full items-end gap-3 font-bold text-white">
        <span className="flex size-12 items-center justify-center rounded-full bg-white text-accent-orange">
          {firstName[0]}
          {lastName[0]}
        </span>
        <hgroup className="flex flex-col items-start">
          <h4 className="flex">{fio}</h4>
          <p className="font-normal underline underline-offset-3">
            <a href={link} target="_blank">
              Посмотреть отзыв
            </a>
          </p>
        </hgroup>
      </div>
    </div>
  );
}
