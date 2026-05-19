import { getPayloadClient } from "@/shared/cms";
import { ReviewItem } from "./review-item";

export async function Reviews() {
  const payload = await getPayloadClient();
  const reviews = await payload.find({ collection: "reviews", pagination: false });

  const reviewsData = reviews.docs;

  return (
    <section className="flex flex-col justify-center gap-10 px-7.5 py-5 md:gap-6.5 xl:flex-row xl:px-20">
      {reviewsData.map((item) => (
        <ReviewItem
          key={item.id}
          id={item.id}
          firstName={item.firstName}
          lastName={item.lastName}
          text={item.text}
          link={item.link}
        />
      ))}
    </section>
  );
}
