import React, { Suspense } from "react";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchFilters from "./search-filters"
import { TRPCReactProvider } from '@/trpc/client';
import { getQueryClient, trpc } from '@/trpc/server';

function Home({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const queryClient = getQueryClient();
    void queryClient.prefetchQuery(
      trpc.categories.getMany.queryOptions()
    );
  return (
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
  )
}

export default Home
