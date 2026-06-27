import Image from "next/image";
import { convertLexicalToHTML } from "@payloadcms/richtext-lexical/html";
import { DateWithReadTime, PopularPosts } from "@/entities/blog";
import { getPayloadClient } from "@/shared/cms";

export default async function Post({ params }: PageProps<"/blog/[postId]">) {
  const { postId } = await params;
  const payload = await getPayloadClient();

  const [post, popularPosts] = await Promise.all([
    payload.findByID({
      collection: "posts",
      id: postId,
    }),
    payload.find({
      collection: "posts",
      limit: 4,
      sort: "-createdAt",
    }),
  ]);

  const mappedPosts = popularPosts.docs.map((item) => {
    const category = typeof item.category === "object" ? item.category.label : "";
    return { ...item, category };
  });
  const popularPostsData = mappedPosts;

  return (
    <article className="flex flex-col px-5 py-6 font-inter xl:gap-12 xl:px-20 xl:pt-12 xl:pb-0">
      <section className="flex flex-col gap-5">
        <DateWithReadTime date={post.createdAt} readTime={post.readTime} />
        <div className="flex flex-col gap-8 xl:gap-16">
          <hgroup className="flex flex-col gap-5">
            <h1 className="text-5xl leading-11 font-bold wrap-anywhere">{post.title}</h1>
            <p className="text-lg text-foreground-secondary">{post.shortDescription}</p>
          </hgroup>
          <div className="flex flex-col xl:gap-3">
            <div className="relative flex aspect-[1.6] w-full overflow-hidden rounded-xl xl:aspect-[1.523]">
              {/* "todo: изменить alt" */}
              <Image src={post.mainPhoto} alt="Фото учеников школы" fill />
            </div>
            <p className="text-right text-base text-foreground-secondary">
              Фото сделано: {post.mainPhotoMadeBy}
            </p>
          </div>
          <div dangerouslySetInnerHTML={{ __html: convertLexicalToHTML({ data: post.content }) }} />
        </div>
      </section>
      <PopularPosts popularPosts={popularPostsData} />
    </article>
  );
}
