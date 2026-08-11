/*Last modified by: An Luu (08/08/2026)*/

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./components/NavBar";
import FooterBar from "./components/FooterBar";

const morgen = localFont({
  src: "./fonts/MorgenRegular-ywMP5.otf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Virtual Zoo Gallery",
  description: "Explore the animals at our virtual zoo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${morgen.className} min-h-screen flex flex-col`}>
        <NavBar />

        {children}

        <FooterBar />
      </body>
    </html>
  );
}
