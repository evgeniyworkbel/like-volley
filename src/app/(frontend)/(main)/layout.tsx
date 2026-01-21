import { Container } from "@/shared/ui";
import { Footer, Header } from "@/widgets";

type MainLayoutProps = Readonly<{ children: React.ReactNode }>;

export default function MainLayout({ children }: MainLayoutProps) {
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
