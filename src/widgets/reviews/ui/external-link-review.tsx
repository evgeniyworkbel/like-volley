"use client";

import { Review } from "@/shared/cms/payload-types";

type ExternalLinkReviewProps = Pick<Review, "link">;

export function ExternalLinkReview({ link }: ExternalLinkReviewProps) {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <a className="font-normal underline underline-offset-3" onClick={handleClick}>
      Посмотреть отзыв
    </a>
  );
}
