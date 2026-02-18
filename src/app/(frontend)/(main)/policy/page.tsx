import { getPayloadClient } from "@/shared/cms";
import { convertLexicalToHTML } from "@payloadcms/richtext-lexical/html";

export default async function Policy() {
  const payload = await getPayloadClient();
  const policy = await payload.findGlobal({
    slug: "policy",
  });
  const { title, description } = policy;

  return (
    <article className="container mx-auto max-w-4xl">
      <h1 className="pt-5 text-center text-2xl font-extrabold">{title}</h1>
      <section className="flex flex-col items-center p-5 text-sm leading-6">
        {description && (
          <p
            dangerouslySetInnerHTML={{ __html: convertLexicalToHTML({ data: description }) }}
            className="flex flex-col indent-6"
          />
        )}
      </section>
    </article>
  );
}
