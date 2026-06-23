import { PostMainCard, PostsCards } from "@/entities/blog";
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
    limit: 7,
    where: {
      ...(category && { category: { equals: category } }),
    },
  });

  const postsData = posts.docs;
  const mappedPosts = postsData.map((item) => {
    const category = typeof item.category === "object" ? item.category.label : "";
    return { ...item, category };
  });
  const [mainPost, ...restPosts] = mappedPosts;

  return (
    <section className="flex flex-col gap-10 px-5 py-10 xl:gap-10 xl:px-20 xl:py-12">
      <div className="flex flex-col gap-6">
        <h1 className="text-[28px] font-bold text-accent-orange md:hidden md:text-6xl">
          <span className="text-foreground">Наш</span> Блог
        </h1>
        <PostMainCard
          title={mainPost.title}
          category={mainPost.category}
          shortDescription={mainPost.shortDescription}
          readTime={mainPost.readTime}
          createdAt={mainPost.createdAt}
        />
      </div>
      <PostsCards restPosts={restPosts} />
    </section>
  );
}
