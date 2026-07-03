import Link from "next/link";
import { ContainerWithShadow } from "@/shared/ui/container-with-shadow";
import { NavArrow } from "@/shared/ui";
import { PostDesktopCard } from "./post-desktop-card";
import { getPayloadClient } from "@/shared/cms";

export async function PopularPosts() {
  const payload = await getPayloadClient();
  const popularPosts = await payload.find({
    collection: "posts",
    limit: 4,
    sort: "-createdAt",
  });

  const mappedPosts = popularPosts.docs.map((item) => {
    const category = typeof item.category === "object" ? item.category.label : "";
    return { ...item, category };
  });
  const popularPostsData = mappedPosts;

  return (
    <ContainerWithShadow className="hidden rounded-b-none xl:flex">
      <section className="flex flex-col gap-6 xl:gap-10 xl:px-20 xl:py-12">
        <div className="flex items-center justify-between font-bold">
          <h1 className="text-6xl text-accent-orange">
            <span className="text-foreground">Популярные</span> новости
          </h1>
          <Link className="flex items-center gap-2" href={`/blog`}>
            <span className="text-xl text-accent-orange">Еще новости</span>
            <NavArrow />
          </Link>
        </div>
        <div className="grid gap-6 xl:grid-cols-4 xl:gap-x-5 xl:gap-y-9">
          {popularPostsData.map((item) => (
            <Link key={item.id} href={`/blog/${item.id}`}>
              <PostDesktopCard
                key={item.id}
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
      </section>
    </ContainerWithShadow>
  );
}
