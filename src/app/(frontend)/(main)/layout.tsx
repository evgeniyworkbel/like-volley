import { mainMetaTitle } from "@/shared/constants";
import { getServerSideURL } from "@/shared/lib";
import { Container } from "@/shared/ui";
import { Footer, Header } from "@/widgets";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: `%s - ${mainMetaTitle}`,
    default: mainMetaTitle,
  },
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
    "лайк",
    "воллей",
    "лайк воллей",
    "лайкволлей",
    "записаться",
    "играть",
  ],
};

export default function MainLayout({ children }: LayoutProps<"/">) {
  // todo: УДАЛИТЬ ПОСЛЕ ДЕБАГА
  getServerSideURL();

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
