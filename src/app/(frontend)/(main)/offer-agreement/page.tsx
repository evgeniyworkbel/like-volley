import { getPayloadClient } from "@/shared/cms";
import { convertLexicalToHTML } from "@payloadcms/richtext-lexical/html";

export default async function OfferAgreement() {
  const payload = await getPayloadClient();
  const offerAgreement = await payload.findGlobal({ slug: "offer-agreement" });

  const { title, content } = offerAgreement;

  return (
    <article className="mx-auto max-w-4xl px-4 py-6">
      <h1 className="text-center text-2xl font-bold">{title}</h1>
      <div className="text-left text-sm leading-5 md:text-justify [&_p]:indent-6">
        {content && (
          <div
            className="border-t pt-6 [&_table]:block [&_table]:border-collapse [&_table]:overflow-x-auto [&_table]:border md:[&_table]:table [&_td]:border [&_td]:p-2 [&_th]:border [&_th]:p-2 [&_th]:font-semibold"
            dangerouslySetInnerHTML={{ __html: convertLexicalToHTML({ data: content }) }}
          />
        )}
      </div>
    </article>
  );
}
