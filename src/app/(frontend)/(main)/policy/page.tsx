import { convertLexicalToHTML } from "@payloadcms/richtext-lexical/html";
import { getPayloadClient } from "@/shared/cms";

export default async function Policy() {
  const payload = await getPayloadClient();
  const { title, description } = await payload.findGlobal({
    slug: "policy",
  });

  return (
    <article className="container mx-auto max-w-4xl">
      <h1 className="pt-5 text-center text-2xl font-extrabold">{title}</h1>
      <section
        className="flex flex-col items-center p-5 indent-6 text-sm leading-6"
        dangerouslySetInnerHTML={{ __html: convertLexicalToHTML({ data: description }) }}
      ></section>
    </article>
  );
}
