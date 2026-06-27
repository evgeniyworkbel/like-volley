import Image from "next/image";
import { convertLexicalToHTML } from "@payloadcms/richtext-lexical/html";
import { DateWithReadTime } from "@/entities/blog";
import { getPayloadClient } from "@/shared/cms";

export default async function Post({ params }: PageProps<"/blog/[postId]">) {
  const { postId } = await params;
  const payload = await getPayloadClient();

  const post = await payload.findByID({
    collection: "posts",
    id: postId,
  });

  return (
    <article className="flex px-5 py-6 font-inter xl:px-20 xl:py-12">
      <section className="flex flex-col gap-5">
        <DateWithReadTime date={post.createdAt} readTime={post.readTime} />
        <div className="flex flex-col gap-8 xl:gap-16">
          <hgroup className="flex flex-col gap-5">
            <h1 className="text-5xl leading-11 font-bold wrap-anywhere">{post.title}</h1>
            <p className="text-lg text-foreground-secondary">{post.shortDescription}</p>
          </hgroup>
          <div className="flex flex-col xl:gap-3">
            <div className="relative flex aspect-[1.6] w-full overflow-hidden rounded-xl xl:aspect-[1.523]">
              <Image src="/news/news_2.webp" alt="Фото учеников школы" fill />
            </div>
            {post.mainPhotoMadeBy && (
              <p className="text-right text-base text-foreground-secondary">
                Фото сделано: {post.mainPhotoMadeBy}
              </p>
            )}
          </div>
          <div dangerouslySetInnerHTML={{ __html: convertLexicalToHTML({ data: post.content }) }} />
        </div>
      </section>
    </article>
  );
}
