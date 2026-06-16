import { Suspense } from "react";
import { BlogTabs } from "@/widgets";
import { Container } from "@/shared/ui";

export default function BlogLayout({ children }: LayoutProps<"/blog">) {
  return (
    <div>
      <main>
        <Container>
          <Suspense fallback={null}>
            <BlogTabs />
          </Suspense>
          {children}
        </Container>
      </main>
    </div>
  );
}
