import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Temé Studios",
  description:
    "Intimate yoga and Pilates in Lagos' most refined wellness environment.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-[family-name:var(--font-inter)] text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
