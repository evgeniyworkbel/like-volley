import { Suspense } from "react";
import { BlogNavigation } from "@/features/blog-navigation";
import { getPayloadClient } from "@/shared/cms";

export default async function BlogLayout({ children }: LayoutProps<"/blog">) {
  const payload = await getPayloadClient();
  const categories = await payload.find({ collection: "post-categories", pagination: false });

  const categoriesData = categories.docs;

  return (
    <div>
      <Suspense fallback={null}>
        <BlogNavigation items={categoriesData} />
      </Suspense>
      {children}
    </div>
  );
}
