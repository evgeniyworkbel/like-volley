import { getPayloadClient } from "@/shared/cms";
import { convertLexicalToHTML } from "@payloadcms/richtext-lexical/html";

export default async function Policy() {
  const payload = await getPayloadClient();
  const policyData = await payload.findGlobal({
    slug: "policy",
  });

  const title = policyData?.title || "Политика конфиденциальности";
  const description = policyData?.description;

  const htmlContent = description ? convertLexicalToHTML({ data: description }) : "";

  return (
    <article className="container mx-auto max-w-4xl py-10">
      <h1 className="mb-8 pt-5 text-center text-2xl font-extrabold">{title}</h1>
      <section
        className="policy-content text-gray-700 p-5 text-sm leading-6"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </article>
  );
}
