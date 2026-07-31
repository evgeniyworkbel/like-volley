import { LucideProvider } from "lucide-react";
import { Container } from "@/shared/ui";
import { Footer, Header } from "@/widgets";

export default function MainLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex h-full flex-col">
      <LucideProvider size={24}>
        <Header />
        <main className="grow">
          <Container>{children}</Container>
        </main>
        <Footer />
      </LucideProvider>
    </div>
  );
}
