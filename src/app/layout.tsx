import type { Metadata } from "next";
import { Shantell_Sans, Inter } from "next/font/google";
import "./globals.css";

const shantelSans = Shantell_Sans({
  variable: "--font-shantel",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "like-volley",
  description: "Belarusian volleyball school",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${shantelSans.variable}  ${inter.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
