import Navbar from "@/components/navigation/Navbar";
import "../styles/globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import local from "next/font/local";
import { clsx } from "clsx";
import Footer from "@/components/navigation/Footer";
import ResumeButton from "@/components/ui/ResumeButton";

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

const SFPRO = local({
  src: [
    {
      path: "../../public/fonts/sf-pro-display_thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/sf-pro-display_light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/sf-pro-display_regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/sf-pro-display_medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/sf-pro-display_semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/sf-pro-display_bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sfpro",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx(graphik.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="max-w-[1000px] pt-[10vh] mx-auto p-5">
            {children}
          </main>
          <ResumeButton/>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
