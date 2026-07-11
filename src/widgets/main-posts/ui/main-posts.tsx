import Link from "next/link";

import { NavArrow, SectionTitle } from "@/shared/ui";
import { getPayloadClient } from "@/shared/cms";
import { PostDesktopCard, PostMainCard } from "@/entities/blog";

export async function MainPosts() {
  const payload = await getPayloadClient();
  const posts = await payload.find({
    collection: "posts",
    limit: 9,
  });

  const mappedPosts = posts.docs.map((item) => {
    const category = typeof item.category === "object" ? item.category.label : "";
    return { ...item, category };
  });

  const post1 = mappedPosts.at(0);
  const post2 = mappedPosts.at(1);
  const post3 = mappedPosts.at(2);
  const post4 = mappedPosts.at(3);
  const post5 = mappedPosts.at(4);
  const restPosts = mappedPosts.slice(5);

  const secondaryPosts = [post2, post3, post4, post5].filter((item) => !!item);
  const mobilePosts = [post1, post2].filter((item) => !!item);

  return (
    <section className="flex flex-col items-center gap-6 px-5 py-10 xl:gap-10 xl:px-20 xl:py-14.5">
      <div className="flex w-full items-center justify-center xl:justify-between">
        <SectionTitle className="font-inter text-[28px]">
          Пульс&nbsp;<span className="text-accent-orange">событий</span>
        </SectionTitle>
        <Link className="hidden items-center gap-2 xl:flex" href="/blog">
          <span className="text-xl font-bold text-accent-orange">Все новости</span>
          <NavArrow />
        </Link>
      </div>
      <div className="flex w-full flex-col gap-6 xl:hidden">
        {mobilePosts.map((item) => (
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
      </div>

      <div className="hidden w-full grid-cols-4 gap-5 xl:grid">
        {post1 && (
          <Link className="col-span-2 row-span-2" href={`/blog/${post1.id}`}>
            <PostMainCard
              title={post1.title}
              shortDescription={post1.shortDescription}
              readTime={post1.readTime}
              mainPhoto={post1.mainPhoto}
              createdAt={post1.createdAt}
              category={post1.category}
              viewMode="widget"
            />
          </Link>
        )}
        {secondaryPosts.map((item) => (
          <Link key={item.id} href={`/blog/${item.id}`}>
            <PostDesktopCard
              title={item.title}
              readTime={item.readTime}
              mainPhoto={item.mainPhoto}
              createdAt={item.createdAt}
              category={item.category}
              viewMode="widget"
            />
          </Link>
        ))}
      </div>

      <div className="hidden w-full gap-5 xl:flex">
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
      </div>
      <Link className="flex items-center gap-2 xl:hidden" href="/blog">
        <span className="text-xl font-bold text-accent-orange">Все новости</span>
        <NavArrow />
      </Link>
    </section>
  );
}
