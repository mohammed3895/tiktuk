import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import Navbar from "@/components/shared/navbar/Navbar";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={kanit.className}>
        <main className="w-full h-dvh overflow-hidden antialiased">
          <Navbar />
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
