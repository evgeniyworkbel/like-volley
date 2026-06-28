import Link from "next/link";
import { PostDesktopCard, PostMainCard, PostMobileCard } from "@/entities/blog";
import { getPayloadClient } from "@/shared/cms";
import { ArrowTopIcon } from "@/shared/icons";
import { buttonVariants } from "@/shared/ui/button";

export const dynamic = "force-dynamic";

type BlogPageProps = {
  searchParams: Promise<{ category?: string; limit?: string }>;
};

export default async function Blog({ searchParams }: BlogPageProps) {
  const { category, limit } = await searchParams;
  const payload = await getPayloadClient();

  const STEP = 13;
  const currentLimit = Number(limit) || STEP;

  const posts = await payload.find({
    collection: "posts",
    limit: currentLimit,
    page: 1,
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
  const hasMorePosts = posts.totalDocs > postsData.length;

  return (
    <section className="flex flex-col gap-6 px-5 py-10 xl:gap-10 xl:px-20 xl:py-12 [&_a]:self-center">
      <h1 className="text-[28px] font-bold text-accent-orange md:hidden md:text-6xl">
        <span className="text-foreground">Наш</span> Блог
      </h1>
      <PostMainCard
        title={mainPost.title}
        category={mainPost.category}
        shortDescription={mainPost.shortDescription}
        mainPhoto={mainPost.mainPhoto}
        readTime={mainPost.readTime}
        createdAt={mainPost.createdAt}
      />
      <section className="grid gap-6 xl:hidden">
        {restPosts.map((item) => (
          <Link key={item.id} href={`/blog/${item.id}`}>
            <PostMobileCard
              title={item.title}
              readTime={item.readTime}
              mainPhoto={item.mainPhoto}
              createdAt={item.createdAt}
              category={item.category}
            />
          </Link>
        ))}
      </section>
      <section className="hidden xl:grid xl:grid-cols-4 xl:gap-x-5 xl:gap-y-9">
        {restPosts.map((item) => (
          <Link key={item.id} href={`/blog/${item.id}`}>
            <PostDesktopCard
              title={item.title}
              shortDescription={item.shortDescription}
              readTime={item.readTime}
              mainPhoto={item.mainPhoto}
              createdAt={item.createdAt}
              category={item.category}
            />
          </Link>
        ))}
      </section>
      {hasMorePosts && (
        <Link
          className={buttonVariants({ color: "primary", size: "md" })}
          href={{
            query: {
              ...(category && { category }),
              limit: currentLimit + STEP,
            },
          }}
          scroll={false}
        >
          Загрузить больше новостей
          <ArrowTopIcon className="shrink-0 rotate-180" />
        </Link>
      )}
    </section>
  );
}
