import { userAgent } from "next/server";
import { headers } from "next/headers";
import { PostMainCard } from "@/entities/blog";
import { getPayloadClient } from "@/shared/cms";
import { TYPES_DEVICES_MAP } from "./model/constants";
import Link from "next/link";
import { ArrowTopIcon } from "@/shared/icons";

export const dynamic = "force-dynamic";

type BlogPageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function Blog({ searchParams }: BlogPageProps) {
  const { category } = await searchParams;
  const payload = await getPayloadClient();

  const { device } = userAgent({ headers: await headers() });
  const typeCurrentDevice = device.type || "desktop";

  const { limit, postComponent: PostCard } = TYPES_DEVICES_MAP[typeCurrentDevice];

  const posts = await payload.find({
    collection: "posts",
    limit: limit,
    where: {
      ...(category && { category: { equals: category } }),
    },
  });

  const postsData = posts.docs;
  console.log(posts);
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
          mainPhoto={mainPost.mainPhoto}
          readTime={mainPost.readTime}
          createdAt={mainPost.createdAt}
        />
        <section className="grid gap-6 xl:grid-cols-4 xl:gap-x-5 xl:gap-y-9">
          {restPosts.map((item) => (
            <PostCard key={item.id} {...item} />
          ))}
        </section>
        {posts.hasNextPage && (
          <Link
            className="inline-flex cursor-pointer items-center gap-4.5 self-center rounded-[40px] bg-accent-orange px-7.5 py-3 text-base text-white"
            href={{
              pathname: "/blog",
              query: {
                ...(category && { category }),
                page: posts.nextPage,
              },
            }}
          >
            Загрузить больше новостей
            <ArrowTopIcon className="shrink-0 rotate-180" />
          </Link>
        )}
      </div>
    </section>
  );
}
