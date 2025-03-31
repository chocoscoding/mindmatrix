import type { Metadata } from "next";
import { Tektur, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Nav } from "@/components/Nav";

const geistSans = Tektur({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mind Matrix",
  description: "The Future of Decentralized Intelligence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased font-default overflow-x-hidden !scrollbar-hide",
          geistSans.variable,
          geistMono.variable
        )}>
        <div className="w-full relative">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
