import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Navbar from "../components/navbar";

const aptos = localFont({
    src: "./Aptos.ttf",
    variable: "--font-aptos",
    display: "swap",
});

export const metadata: Metadata = {
  title: "Hidnira Learn NextJS",
  description: "reponya hidnira buat belajar nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${aptos.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
