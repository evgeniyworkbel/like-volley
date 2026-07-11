import Image from "next/image";
import { convertLexicalToHTML } from "@payloadcms/richtext-lexical/html";
import { DateWithReadTime } from "@/entities/blog";
import { getPayloadClient } from "@/shared/cms";
import { PopularPosts } from "@/widgets";
import { SharePost } from "@/features/share-post";

export default async function Post({ params }: PageProps<"/blog/[postId]">) {
  const { postId } = await params;
  const payload = await getPayloadClient();

  const post = await payload.findByID({
    collection: "posts",
    id: postId,
  });

  return (
    <article>
      <section className="flex flex-col">
        <div className="flex flex-col gap-5 px-5 py-6 xl:px-20 xl:py-12">
          <SharePost className="w-fit xl:hidden" />
          <div className="flex items-center justify-between">
            <DateWithReadTime date={post.createdAt} readTime={post.readTime} />
            <SharePost className="hidden xl:flex" />
          </div>
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
              {post.mainPhotoMadeBy && (
                <p className="text-right text-base text-foreground-secondary">
                  Фото сделано: {post.mainPhotoMadeBy}
                </p>
              )}
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: convertLexicalToHTML({ data: post.content }) }} />
        </div>
        <PopularPosts />
      </section>
    </article>
  );
}
