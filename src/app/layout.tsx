import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

import CatProvider from "@/providers/cat-provider";
import ThemeToggler from "@/components/theme-toggler";

import cat from "../../public/cat.svg";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CatKnow",
  description: "NextJS App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CatProvider>
          <div className="flex flex-col gap-2 h-full mx-auto max-w-screen-lg px-4">
            <header className="flex items-end gap-1 justify-center py-4 mb-8 relative">
              <Image src={cat} alt="CatKnow" width={50} height={50} />
              <h1 className="text-4xl font-bold text-primary">
                <Link href="/">CatKnow</Link>
              </h1>

              <ThemeToggler />
            </header>

            <div className="flex-1 flex flex-col">{children}</div>
          </div>
        </CatProvider>
      </body>
    </html>
  );
}
