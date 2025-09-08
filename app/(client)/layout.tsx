import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { TRPCReactProvider } from "@/trpc/client";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppines",
});

export const metadata: Metadata = {
  title: "ShopCart",
  description: "Your one-stop shop for all things cart-related",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
      <TRPCReactProvider>
        {children}
        <Toaster position="top-right" richColors />
      </TRPCReactProvider>
      </body>
    </html>
  );
}
