import Image from "next/image";
import Link from "next/link";
import { PostMainCard } from "@/entities";
import { getPayloadClient } from "@/shared/cms";

export const dynamic = "force-dynamic";

type BlogPageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function Blog({ searchParams }: BlogPageProps) {
  const { category } = await searchParams;
  const payload = await getPayloadClient();
  const posts = await payload.find({
    collection: "posts",
    limit: 1,
    // todo : уточнить на этапе https://app.weeek.net/ws/856312/task/171,
    where: {
      ...(category && { category: { equals: category } }),
    },
  });

  const mainPostData = posts.docs[0];
  const { title, shortDescription, readTime, createdAt } = mainPostData;

  const postId = "1";

  return (
    <section className="flex flex-col items-center gap-6 px-5 py-10 md:gap-10 xl:gap-31 xl:px-20 xl:py-12">
      <h1 className="text-[28px] font-bold text-accent-orange md:hidden md:text-6xl">
        <span className="text-foreground">Наш</span> Блог
      </h1>
      <PostMainCard
        title={title}
        shortDescription={shortDescription}
        readTime={readTime}
        createdAt={createdAt}
      />
      <section className="grid gap-5 xl:grid-cols-3">
        <Link className="flex flex-col gap-2 overflow-hidden" href={`/blog/${postId}`}>
          <Image width={1280} height={853} src="/news/news_2.webp" alt="Фото учеников школы" />
          {/* @todo удалить это фото из public после внедрения цмс */}
          <hgroup>
            <h2 className="text-xl font-medium">Исторический момент для нашей школы!</h2>
            <p className="text-sm text-pretty">
              С 20 по 27 апреля 2026 года команда «Лайк Воллей» примет участие в престижных
              Международных соревнованиях по волейболу «Кубок Дружбы U14» 2026 среди юношей и
              девушек до 14 лет в г. Новосибирске.
            </p>
          </hgroup>
        </Link>
      </section>
    </section>
  );
}
