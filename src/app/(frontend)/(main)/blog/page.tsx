import { PostMainCard } from "@/entities/blog/post-main-card";
import { PostMobileCard } from "@/entities/blog/post-mobile-card";
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
    // todo : уточнить на этапе https://app.weeek.net/ws/856312/task/171,
    limit: 3,
    where: {
      ...(category && { category: { equals: category } }),
    },
  });

  const mainPost = posts.docs[0];
  const postsData = posts.docs;

  return (
    <section className="flex flex-col items-center gap-6 px-5 py-10 md:gap-10 xl:gap-31 xl:px-20 xl:py-12">
      <h1 className="text-[28px] font-bold text-accent-orange md:hidden md:text-6xl">
        <span className="text-foreground">Наш</span> Блог
      </h1>
      <PostMainCard
        title={mainPost.title}
        shortDescription={mainPost.shortDescription}
        readTime={mainPost.readTime}
        createdAt={mainPost.createdAt}
      />
      <section className="grid gap-5 xl:grid-cols-3">
        {postsData.map((item) => (
          <PostMobileCard
            key={item.id}
            id={item.id}
            title={item.title}
            readTime={item.readTime}
            createdAt={item.createdAt}
          />
        ))}
      </section>
    </section>
  );
}
