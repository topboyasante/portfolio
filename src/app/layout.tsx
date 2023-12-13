import Navbar from "@/components/navigation/Navbar";
import "../styles/globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import local from "next/font/local";
import { clsx } from 'clsx';
import Footer from "@/components/navigation/Footer";

export const metadata: Metadata = {
  title: "Nana Kwasi Asante",
  description: "Developer Portfolio",
};

const graphik = local({
  src: [
    {
      path: "../../public/fonts/Graphik-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Graphik-Medium.ttf",
      weight: "600",
      style: "bold",
    },
  ],
  variable: "--font-graphik",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx(graphik.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Navbar />
          <main className="max-w-[1000px] pt-[9vh] sm:pt-[8vh] mx-auto p-5 xl:px-0">{children}</main>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
