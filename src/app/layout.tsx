import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
//import { useState } from "react";

import { roboto } from "@/app/fonts";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getUserLocale } from "@/service/locale";


export const metadata: Metadata = {
  title: "Namecard Tools",
  description: "Web app for doing stuff with Genshin namecards.",
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

export const viewport: Viewport = {
  themeColor: "#4c1d95",
}

export default async function RootLayout({children}: {children: React.ReactNode}) {

  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${roboto.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
