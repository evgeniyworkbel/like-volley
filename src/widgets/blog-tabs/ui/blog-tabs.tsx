import { getPayloadClient } from "@/shared/cms";
import { BlogTab } from "./blog-tab";

export async function BlogTabs() {
  const payload = await getPayloadClient();
  const categories = await payload.find({ collection: "post-categories", pagination: false });

  const categoriesData = categories.docs;

  return (
    <section className="flex justify-center border-b border-b-[oklch(0.9197_0.004_286.32)] xl:w-full">
      <BlogTab label="Все новости" id={0}></BlogTab>
      {categoriesData.map((item) => (
        <BlogTab key={item.id} id={item.id} label={item.label} />
      ))}
    </section>
  );
}
