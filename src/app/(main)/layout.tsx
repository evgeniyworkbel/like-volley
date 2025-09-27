import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

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
