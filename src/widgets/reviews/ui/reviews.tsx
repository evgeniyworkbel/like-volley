import { getPayloadClient } from "@/shared/cms";
import { SectionTitle } from "@/shared/ui";
import { ReviewItem } from "./review-item";
import { BackgroundDecor } from "./background-decor";

export async function Reviews() {
  const payload = await getPayloadClient();
  const reviews = await payload.find({ collection: "reviews", pagination: false });

  const reviewsData = reviews.docs;

  return (
    <section className="relative z-10 flex flex-col items-center justify-center gap-6 overflow-hidden px-7.5 py-5 xl:gap-10 xl:px-20 xl:py-15">
      <BackgroundDecor />
      <SectionTitle>
        Что о нас<span className="text-accent-orange">&nbsp;говорят</span>
      </SectionTitle>
      <div className="grid grid-cols-1 gap-10 xl:grid-cols-3 xl:gap-5">
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
