import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import PageTransition from "@/components/pageTransition";
import StairTransition from "@/components/stairTransition";

const JetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Abdalla Elhagar",
  description: "Abdalla Elhagar portfolio (frontend React & Next developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${JetBrainsMono.variable} ${JetBrainsMono.variable} antialiased text-[#fff] bg-primary`}
      >
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
