import { Footer, Header } from "@/widgets";

type MainLayoutProps = Readonly<{ children: React.ReactNode }>;

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
