import { Container } from "@/shared/ui";
import { Footer, Header } from "@/widgets";

export default function MainLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="grow">
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  );
}
