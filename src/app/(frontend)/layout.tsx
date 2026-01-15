import type { Metadata } from "next";
import { Shantell_Sans, Inter } from "next/font/google";
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
  title: "like-volley",
  description: "Belarusian volleyball school",
  formatDetection: { telephone: false, date: false, email: false, address: false },
};

// @todo: подключить новый счетчик под продакшн вебсайт
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${shantellSans.variable} antialiased`}>
        <YandexMetrika />
        <div className="isolate">{children}</div>
      </body>
    </html>
  );
}
