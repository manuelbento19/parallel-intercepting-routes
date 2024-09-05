import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

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
  title: "Parallel Intercepting Routes",
  description: "Parallel Intercepting Routes with Next.js",
};

type Props = {
  modal: React.ReactNode,
  children: React.ReactNode
}

export default function RootLayout({children,modal}: Readonly<Props>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <main className="h-screen flex flex-col w-full bg-white dark:bg-gray-900 px-4">
          <Header/>
          <section className="h-full overflow-auto">
            {children}
            {modal}
          </section>
        </main>
      </body>
    </html>
  );
}
