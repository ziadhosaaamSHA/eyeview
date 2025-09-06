import React, { Suspense } from "react";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {ClerkProvider} from "@clerk/nextjs"
import SearchFilters from "./search-filters"
import { TRPCReactProvider } from '@/trpc/client';
import { getQueryClient, trpc } from '@/trpc/server';

export const metadata: Metadata = {
  title: "ShopCart",
  description: "Your one-stop shop for all things cart-related",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.categories.getMany.queryOptions()
  );

  return (
  <ClerkProvider>
    <html lang="en">
      <body className="font-poppines antialiased">
        <div className="flex flex-col min-h-screen">
        <Header />
        <TRPCReactProvider>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Suspense fallback={<div className="p-4">Loading filters...</div>}>
            <SearchFilters />
          </Suspense>
          <main className="flex-1">
              {children}
            </main>
        </HydrationBoundary>
            </TRPCReactProvider>
          <Footer />
        </div>
      </body>
    </html>
  </ClerkProvider>
  );
}
