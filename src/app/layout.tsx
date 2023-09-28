import Navbar from "@/components/navigation/Navbar";
import "../styles/globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import local from "next/font/local";
import { clsx } from 'clsx';

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
          disableTransitionOnChange
        >
          <Navbar />
          <main className="max-w-[900px] pt-[8vh] mx-auto p-5">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
