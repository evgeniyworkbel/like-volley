import { RichText } from "@payloadcms/richtext-lexical/react";
import { getPayloadClient } from "@/shared/cms";

export default async function Policy() {
  const payload = await getPayloadClient();
  const { title, description } = await payload.findGlobal({
    slug: "policy",
  });

  console.log(title, description);

  return (
    <article className="container mx-auto max-w-4xl">
      <h1 className="pt-5 text-center text-2xl font-extrabold">{title}</h1>
      <section className="flex flex-col items-center p-5 text-sm leading-6">
        {description && <RichText data={description} className="flex flex-col indent-6" />}
      </section>
    </article>
  );
}
