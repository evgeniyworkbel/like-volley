import { getPayloadClient } from "@/shared/cms";

type ReviewPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ReviewById({ params }: ReviewPageProps) {
  const { id } = await params;

  const payload = await getPayloadClient();

  const review = await payload.findByID({
    collection: "reviews",
    id: id,
  });

  return (
    <article className="container mx-auto max-w-4xl px-4 py-10">
      <h1 className="pt-5 text-center text-2xl font-extrabold text-accent-orange xl:text-[32px]">
        Отзыв от: {review.firstName} {review.lastName}
      </h1>

      <section className="mt-6 flex flex-col items-start rounded-[20px] bg-[oklch(0.9791_0_0)] p-6 text-sm leading-7 xl:text-[18px]">
        <p className="text-stone-800 w-full text-left font-medium whitespace-pre-wrap">
          {review.text}
        </p>

        {review.link && (
          <div className="mt-8 w-full text-right">
            <a
              href={review.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-accent-orange underline underline-offset-4 transition-colors hover:text-accent-orange/80"
            >
              Читать оригинал отзыва на источнике →
            </a>
          </div>
        )}
      </section>
    </article>
  );
}
