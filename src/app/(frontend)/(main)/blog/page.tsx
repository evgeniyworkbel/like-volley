import Image from "next/image";
import Link from "next/link";
import { PostMobileCard } from "@/entities";
import { getPayloadClient } from "@/shared/cms";

type BlogPageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function Blog({ searchParams }: BlogPageProps) {
  const { category: activeCategoryId } = await searchParams;

  const payload = await getPayloadClient();

  const posts = await payload.find({
    collection: "posts",
    pagination: false,
    where: {
      ...(activeCategoryId && { category: { equals: activeCategoryId } }),
    },
  });

  const postsData = posts.docs;

  return (
    <section className="flex flex-col items-center gap-5 px-5 py-10 md:gap-10 xl:gap-31 xl:px-20">
      <h1 className="font-shantell text-4xl font-bold text-accent-orange md:text-6xl">Новости</h1>
      <section className="grid gap-5 xl:grid-cols-3">
        {postsData.map((item) => (
          <PostMobileCard key={item.id} item={item} />
        ))}

        {/* <Link className="flex flex-col gap-2 overflow-hidden" href={`/blog/${postId}`}>
          <Image
            width={1280}
            height={853}
            // @todo удалить это фото из public после внедрения цмс
            src="/news/news_2.webp"
            alt="Фото учеников школы"
          />
          <hgroup>
            <h2 className="text-xl font-medium">Исторический момент для нашей школы!</h2>
            <p className="text-sm text-pretty">
              С 20 по 27 апреля 2026 года команда «Лайк Воллей» примет участие в престижных
              Международных соревнованиях по волейболу «Кубок Дружбы U14» 2026 среди юношей и
              девушек до 14 лет в г. Новосибирске.
            </p>
          </hgroup>
        </Link> */}
      </section>
    </section>
  );
}
