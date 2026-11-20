import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";
import AnimatedBackground from "@/components/common/AnimatedBackground";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { profile } from "@/data/profile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: `${profile.name} | ${profile.title}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.heroDescription,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimatedBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
