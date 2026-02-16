import { getPayloadClient } from "@/shared/cms";

export default async function Policy() {
  const payload = await getPayloadClient();
  const { title, description } = await payload.findGlobal({
    slug: "policy",
  });

  return (
    <article>
      <h1 className="pt-5 text-center text-2xl font-extrabold">{title}</h1>
      <section className="flex flex-col items-center p-5 text-sm leading-6">
        {description.split("\n\n").map((paragraph, index) => (
          <p key={index} className="text-justify indent-8">
            {paragraph}
          </p>
        ))}
      </section>
    </article>
  );
}
