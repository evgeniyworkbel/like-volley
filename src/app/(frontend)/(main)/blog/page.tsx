import Link from "next/link";
import { PostMainCard } from "@/entities/blog";
import { PostMobileCard } from "@/entities/blog";
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

  const postsData = posts.docs;
  const mappedPosts = postsData.map((item) => {
    const category = typeof item.category === "object" ? item.category.label : "";
    return { ...item, category };
  });
  const [mainPost, ...restPosts] = mappedPosts;

  return (
    <section className="flex flex-col items-center gap-6 px-5 py-10 md:gap-10 xl:gap-31 xl:px-20 xl:py-12">
      <h1 className="text-[28px] font-bold text-accent-orange md:hidden md:text-6xl">
        <span className="text-foreground">Наш</span> Блог
      </h1>
      <PostMainCard
        title={mainPost.title}
        category={mainPost.category}
        shortDescription={mainPost.shortDescription}
        readTime={mainPost.readTime}
        mainPhoto={mainPost.mainPhoto}
        createdAt={mainPost.createdAt}
      />
      <section className="grid gap-6 xl:grid-cols-3">
        {restPosts.map((item) => (
          <Link key={item.id} href={`/blog/${item.id}`}>
            <PostMobileCard
              className="active:bg-[oklch(0.9431_0_0)] active:[&_h4]:text-accent-orange"
              title={item.title}
              category={item.category}
              readTime={item.readTime}
              mainPhoto={item.mainPhoto}
              createdAt={item.createdAt}
            />
          </Link>
        ))}
      </section>
    </section>
  );
}
