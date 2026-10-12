import { Container } from "@/shared/ui";
import { Footer, Header } from "@/widgets";
import { Metadata } from "next";

export const metadata: Metadata = {
  keywords: [
    "волейбол",
    "школа",
    "школа волейбола",
    "секция",
    "клуб",
    "взрослые",
    "дети",
    "минск",
    "брест",
    "volleyball",
    "likevolley",
    "like volley",
    "записаться",
  ],
};

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
