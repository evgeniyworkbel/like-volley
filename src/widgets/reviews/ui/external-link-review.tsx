"use client";
import { Route } from "next";
import { Review } from "@/shared/cms/payload-types";

type ExternalLinkReviewProps = Pick<Review, "id" | "link">;

export function ExternalLinkReview({ id, link }: ExternalLinkReviewProps) {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <a
      className="font-normal underline underline-offset-3"
      href={`/reviews/${id}` as Route}
      onClick={handleClick}
    >
      Посмотреть отзыв
    </a>
  );
}
