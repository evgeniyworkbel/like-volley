"use client";

import { Post } from "@/shared/cms/payload-types";
import { PostDesktopCard } from "./post-desktop-card";
import { PostMobileCard } from "./post-mobile-card";
import { useIsMobile } from "@/shared/lib";

type PostsCardsProps = {
  restPosts: (Pick<
    Post,
    "id" | "title" | "shortDescription" | "mainPhoto" | "readTime" | "createdAt"
  > & {
    category: string;
  })[];
};

export function PostsCards({ restPosts }: PostsCardsProps) {
  const isMobile = useIsMobile();
  return (
    <section className="grid gap-6 xl:grid-cols-4 xl:gap-x-5 xl:gap-y-9">
      {restPosts.map((item) =>
        isMobile ? (
          <PostMobileCard
            key={item.id}
            id={item.id}
            title={item.title}
            category={item.category}
            mainPhoto={item.mainPhoto}
            readTime={item.readTime}
            createdAt={item.createdAt}
          />
        ) : (
          <PostDesktopCard
            key={item.id}
            id={item.id}
            title={item.title}
            category={item.category}
            shortDescription={item.shortDescription}
            mainPhoto={item.mainPhoto}
            readTime={item.readTime}
            createdAt={item.createdAt}
          />
        ),
      )}
    </section>
  );
}
