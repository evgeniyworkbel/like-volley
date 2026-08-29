import type { Metadata } from "next";
import Script from "next/script";
import { Shantell_Sans, Inter } from "next/font/google";
import { Toaster } from "sonner";
import { LucideProvider } from "lucide-react";
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
    { name: "Ivan Khristenko", url: "https://t.me/Ivann8234" },
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
        <Script src="https://analytics.ahrefs.com/analytics.js" data-key="iPF2jv45sAcWhWCUjAHYBQ" />
        <LucideProvider size={24}>
          <div className="isolate h-full">{children}</div>
          <Toaster />
        </LucideProvider>
      </body>
    </html>
  );
}
