import type { Metadata } from "next";
//import { useState } from "react";

import { roboto } from "@/app/fonts";
import "./globals.css";

import Header from "@/components/Header";


export const metadata: Metadata = {
  title: "Namecard Tools",
  description: "Web app for doing stuff with Genshin namecards.",
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
      </body>
    </html>
  );
}
