import { Review } from "@/shared/cms/payload-types";
import { cn } from "@/shared/lib";
import styles from "./review-item.module.css";

type ReviewItemProps = Pick<Review, "id" | "firstName" | "lastName" | "text" | "link">;

export function ReviewItem({ firstName, lastName, text, link }: ReviewItemProps) {
  const fio = `${firstName} ${lastName}`;

  return (
    <div className="relative flex w-80 flex-col gap-12 overflow-hidden rounded-[20px] bg-[oklch(0.9791_0_0)] text-lg xl:w-103 xl:gap-14">
      <div className="line-clamp-8 px-4 pt-6 text-left xl:px-7">
        <blockquote cite={link}>
          <p>
            <span className="block font-serif text-[34px] leading-none font-bold text-accent-orange">
              &rdquo;
            </span>
            {text}
          </p>
        </blockquote>
      </div>
      <div
        className={cn(
          "z-10 flex h-28 w-full items-center gap-3 bg-accent-orange px-6.5 font-bold text-white",
          styles.reviewFooter,
        )}
      >
        <span className="flex size-12 items-center justify-center rounded-full bg-white text-accent-orange">
          {firstName[0]}
          {lastName[0]}
        </span>
        <hgroup className="flex flex-col items-start">
          <h4>{fio}</h4>
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
