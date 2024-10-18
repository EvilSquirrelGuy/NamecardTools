import type { Metadata } from "next";
//import { useState } from "react";

import { roboto } from "@/app/fonts";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Namecard Tools",
  description: "Web app for doing stuff with Genshin namecards.",
  themeColor: "#4c1d95",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/iconmark_black.svg',
        href: '/images/iconmark_black.svg',
        type: 'image/svg',
        sizes: 'any'
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/images/iconmark_white.svg',
        href: '/images/iconmark_white.svg',
        type: 'image/svg',
        sizes: 'any'
      },
    ],
  },
  openGraph: {
    siteName: "Namecard Tools",
    locale: "en_GB",
    url: "https://namecard-tools.vercel.app/",
    type: "website",
  },
  authors: [{name: "EvilSquirrelGuy", url: "https://github.com/EvilSquirrelGuy"}],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
