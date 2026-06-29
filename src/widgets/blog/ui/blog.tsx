import Link from "next/link";
import { headers } from "next/headers";
import { userAgent } from "next/server";

import { SectionTitle } from "@/shared/ui";
import { blogSectionId, navLinks } from "@/shared/constants";
import { RightIcon } from "@/shared/icons";
import { getPayloadClient } from "@/shared/cms";
import { PostDesktopCard, PostMainCard } from "@/entities/blog";

export async function Blog() {
  const { device } = userAgent({ headers: await headers() });
  const LimitPostsDevice = device.type === "mobile" ? 4 : 9;

  const payload = await getPayloadClient();
  const posts = await payload.find({
    collection: "posts",
    limit: LimitPostsDevice,
  });

  const postsData = posts.docs;
  const mappedPosts = postsData.map((item) => {
    const category = typeof item.category === "object" ? item.category.label : "";
    return { ...item, category };
  });

  const [mainPost, post2, post3, post4, post5, ...desktopPosts] = mappedPosts;
  const topFourPosts = [post2, post3, post4, post5];
  const mobilePosts = [mainPost, post2, post3, post4];
  const restPost = device.type === "mobile" ? mobilePosts : desktopPosts;

  return (
    <section
      id={blogSectionId}
      className="flex flex-col items-center gap-6 px-5 py-14.5 xl:gap-10 xl:px-20"
    >
      <div className="flex w-full items-center justify-center xl:justify-between">
        <SectionTitle className="font-inter text-[28px]">
          Пульс&nbsp;<span className="text-accent-orange">событий</span>
        </SectionTitle>
        <Link className="hidden items-center gap-2 xl:flex" href={navLinks.news.href}>
          <span className="text-sm font-bold uppercase">все фотоальбомы</span>
          <span className="flex size-8.5 items-center justify-center rounded-full border border-black/20">
            <RightIcon />
          </span>
        </Link>
      </div>

      <div className="hidden w-full gap-5 xl:grid xl:grid-cols-4">
        {mainPost && (
          <div className="xl:col-span-2 xl:row-span-2">
            <PostMainCard
              title={mainPost.title}
              ImageAspectRatio="aspect-[1.3673]"
              shortDescription={mainPost.shortDescription}
              readTime={mainPost.readTime}
              mainPhoto={mainPost.mainPhoto}
              createdAt={mainPost.createdAt}
              category={mainPost.category}
            />
          </div>
        )}
        {topFourPosts.map((item) => (
          <PostDesktopCard
            key={item.id}
            ImageAspectRatio="aspect-[1.732]"
            title={item.title}
            readTime={item.readTime}
            mainPhoto={item.mainPhoto}
            createdAt={item.createdAt}
            category={item.category}
          />
        ))}
      </div>

      <div className="flex w-full flex-col gap-6 xl:flex-row xl:gap-5">
        {restPost.map((item) => (
          <PostDesktopCard
            key={item.id}
            title={item.title}
            shortDescription={item.shortDescription}
            readTime={item.readTime}
            mainPhoto={item.mainPhoto}
            createdAt={item.createdAt}
            category={item.category}
          />
        ))}
      </div>
      <Link className="flex items-center gap-2 xl:hidden" href={navLinks.news.href}>
        <span className="text-sm font-bold uppercase">все фотоальбомы</span>
        <span className="flex size-8.5 items-center justify-center rounded-full border border-black/20">
          <RightIcon />
        </span>
      </Link>
    </section>
  );
}
