import Link from "next/link";

import { NavArrow, SectionTitle } from "@/shared/ui";
import { blogSectionId } from "@/shared/constants";
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

  const [mainPost, post2, post3, post4, post5, ...restPosts] = mappedPosts;
  const secondaryPosts = [post2, post3, post4, post5];
  const mobilePosts = [mainPost, post2, post3, post4];

  return (
    <section
      id={blogSectionId}
      className="flex flex-col items-center gap-6 px-5 py-10 xl:gap-10 xl:px-20 xl:py-14.5"
    >
      <div className="flex w-full items-center justify-center xl:justify-between">
        <SectionTitle className="font-inter text-[28px]">
          Пульс&nbsp;<span className="text-accent-orange">событий</span>
        </SectionTitle>
        <Link className="hidden items-center gap-2 xl:flex" href="/blog">
          <span className="text-xl font-bold text-accent-orange">Все новости</span>
          <NavArrow />
        </Link>
      </div>
      <div className="hidden w-full xl:grid xl:grid-cols-4 xl:gap-5">
        {
          <Link className="xl:col-span-2 xl:row-span-2" href={`/blog/${mainPost.id}`}>
            <PostMainCard
              title={mainPost.title}
              shortDescription={mainPost.shortDescription}
              readTime={mainPost.readTime}
              mainPhoto={mainPost.mainPhoto}
              createdAt={mainPost.createdAt}
              category={mainPost.category}
              viewMode="widget"
            />
          </Link>
        }
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
      <div className="hidden w-full xl:flex xl:gap-5">
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
