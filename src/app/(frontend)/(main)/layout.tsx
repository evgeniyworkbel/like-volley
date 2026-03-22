import { Container } from "@/shared/ui";
import { Footer, Header } from "@/widgets";

export default function MainLayout({ children }: LayoutProps<"/">) {
  return (
    <div>
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  );
}
