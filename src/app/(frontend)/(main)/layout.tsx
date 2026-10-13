import { Container } from "@/shared/ui";
import { Footer, Header } from "@/widgets";

export default function MainLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="grow">
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  );
}
