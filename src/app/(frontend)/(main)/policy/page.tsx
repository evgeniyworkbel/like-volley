import { getPayloadClient } from "@/shared/cms";
import { convertLexicalToHTML } from "@payloadcms/richtext-lexical/html";

// todo: попробовать сделать все-таки роут статичным, но с инкрементальным рендерингом (чтобы после изменений в cms,
// изменения сразу отображались без запуска нового билда)
export const dynamic = "force-dynamic";

export default async function Policy() {
  const payload = await getPayloadClient();
  const policy = await payload.findGlobal({
    slug: "policy",
  });
  const { title, description } = policy;

  return (
    <article className="mx-auto flex max-w-4xl flex-col items-center gap-5 py-5">
      <h1 className="text-2xl font-extrabold">{title}</h1>
      <section className="flex flex-col text-sm leading-6">
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
