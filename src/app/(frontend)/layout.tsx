import type { Metadata } from "next";
import { Shantell_Sans, Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import { YandexMetrika } from "@/shared/analytics";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const shantellSans = Shantell_Sans({
  variable: "--font-shantell-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Школа волейбола LikeVolley",
  authors: [
    { name: "Evgeniy Samuta", url: "https://github.com/evgeniyworkbel" },
    { name: "Ivan", url: "https://t.me/Ivann8234" },
    { name: "Stanislaw Olszewski", url: "https://www.linkedin.com/in/staols13" },
  ],
  formatDetection: { telephone: false, date: false, email: false, address: false },
  keywords: ["Волейбол", "Школа", "Взрослые", "Дети", "Минск", "Брест"],
  openGraph: {
    title: "Волейбол для взрослых и детей",
    type: "website",
    images: ["/logo.svg"],
    url: "https://likevolley.by",
  },
};

// @todo: подключить новый счетчик под продакшн вебсайт
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${shantellSans.variable} antialiased`}>
        <YandexMetrika />
        <div className="isolate h-full">{children}</div>
        <Toaster />
      </body>
    </html>
  );
}
