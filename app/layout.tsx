import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Navbar from "@/components/navbar";
import Header from "@/components/header";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diego Oruezabal Portfolio 💻",
  description: "Landing page made by Diego Oruezabal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} h-[100dvh] overflow-hidden`}>
        <div className="relative h-[calc(100dvh-7rem)] overflow-x-hidden overflow-y-auto overscroll-contain">
          <Header />
          {children}
        </div>
        <Navbar />
      </body>
    </html>
  );
}
