import configPromise from '@payload-config'
import { getPayload, type CollectionSlug } from 'payload'
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {ClerkProvider} from "@clerk/nextjs"
import SearchFilters from "./search-filters"
import { buildTree } from "@/lib/buildTree";

export const metadata: Metadata = {
  title: "ShopCart",
  description: "Your one-stop shop for all things cart-related",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const payload = await getPayload({config: configPromise})
  const data = await payload.find({
    collection: 'categories' as CollectionSlug,
    pagination: false,
    limit: 0
  });
  const tree = buildTree(data.docs);
  console.log(tree);
  return (
  <ClerkProvider>
    <html lang="en">
      <body className="font-poppines antialiased">
        <div className="flex flex-col min-h-screen">
        <Header />
        <SearchFilters data={tree} />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  </ClerkProvider>
  );
}
