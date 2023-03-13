"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./Header";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Podcast App",
  description: "Inditex Project by Francisco Cantori",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} layout`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
