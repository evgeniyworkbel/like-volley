import Link from "next/link";
import { Post } from "@/shared/cms/payload-types";
import { ContainerWithShadow } from "@/shared/ui/container-with-shadow";
import { RightIcon } from "@/shared/icons";
import { PostDesktopCard } from "./post-desktop-card";

type PopularPostsProps = {
  popularPosts: (Pick<
    Post,
    "id" | "title" | "shortDescription" | "readTime" | "mainPhoto" | "createdAt"
  > & {
    category: string;
  })[];
};

export function PopularPosts({ popularPosts }: PopularPostsProps) {
  return (
    <ContainerWithShadow shadowPosition="top">
      <section className="flex flex-col gap-6 xl:gap-10 xl:px-20 xl:py-12">
        <div className="flex items-center justify-between">
          <h1 className="text-6xl text-[28px] font-bold text-accent-orange">
            <span className="text-foreground">Популярные</span> новости
          </h1>
          <Link className="flex items-center gap-2" href="./">
            <span className="text-[20px] font-bold text-accent-orange">Еще новости</span>
            <span className="flex size-8.5 items-center justify-center rounded-full border border-accent-orange">
              <RightIcon className="text-accent-orange" />
            </span>
          </Link>
        </div>

        <div className="grid gap-6 xl:grid-cols-4 xl:gap-x-5 xl:gap-y-9">
          {popularPosts.map((item) => (
            <PostDesktopCard
              key={item.id}
              id={item.id}
              title={item.title}
              shortDescription={item.shortDescription}
              readTime={item.readTime}
              mainPhoto={item.mainPhoto}
              createdAt={item.createdAt}
              category={item.category}
            />
          ))}
        </div>
      </section>
    </ContainerWithShadow>
  );
}
