import { Footer, Header } from "@/widgets";

type MainLayoutProps = Readonly<{ children: React.ReactNode }>;

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <Header />
      <main className="mx-auto max-w-360">{children}</main>
      <Footer />
    </div>
  );
}
