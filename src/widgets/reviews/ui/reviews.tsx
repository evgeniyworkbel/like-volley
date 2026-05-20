import { getPayloadClient } from "@/shared/cms";
import { Title } from "@/shared/ui";
import { ReviewItem } from "./review-item";
import { BackgroundDecor } from "./background-decor";

export async function Reviews() {
  const payload = await getPayloadClient();
  const reviews = await payload.find({ collection: "reviews", pagination: false });

  const reviewsData = reviews.docs;

  return (
    <section className="relative z-10 flex flex-col items-center justify-center gap-6 overflow-hidden px-7.5 py-5 [clip-path:inset(0)] xl:gap-10 xl:px-20 xl:py-15">
      <BackgroundDecor />
      <Title className="font-inter">
        Что о нас<span className="text-accent-orange">&nbsp;говорят</span>
      </Title>
      <div className="flex w-full flex-col gap-10 xl:flex-row">
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
      </div>
    </section>
  );
}
