import type { Metadata } from "next";
import { Shantell_Sans, Inter } from "next/font/google";
import "./globals.css";
import { YandexMetrikaNoscript, YandexMetrikaScript } from "@/shared/analytics";

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
};

// @todo: подключить новый счетчик под продакшн вебсайт
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <YandexMetrikaScript />
      </head>
      <body
        className={`${inter.variable} ${shantellSans.variable} antialiased`}
      >
        <YandexMetrikaNoscript />
        {children}
      </body>
    </html>
  );
}
