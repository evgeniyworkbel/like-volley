import { getPayloadClient } from "@/shared/cms";
import { convertLexicalToHTML } from "@payloadcms/richtext-lexical/html";

// todo: попробовать сделать все-таки роут статичным, но с инкрементальным рендерингом (чтобы после изменений в cms,
// изменения сразу отображались без запуска нового билда)
export const dynamic = "force-dynamic";

export default async function OfferAgreement() {
  const payload = await getPayloadClient();
  const offerAgreement = await payload.findGlobal({ slug: "offer-agreement" });

  const { title, content } = offerAgreement;

  return (
    <article className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-5 py-5 xl:px-20">
      <h1 className="text-center text-2xl font-extrabold">{title}</h1>
      {content && (
        <div
          className="w-full [&_table]:overflow-x-auto"
          dangerouslySetInnerHTML={{ __html: convertLexicalToHTML({ data: content }) }}
        />
      )}
    </article>
  );
}
