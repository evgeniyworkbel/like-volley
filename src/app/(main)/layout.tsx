import { Footer, Header } from "@/widgets";

type LayoutProps = { children: React.ReactNode };

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <main> {children}</main>
      <Footer />
    </div>
  );
}
