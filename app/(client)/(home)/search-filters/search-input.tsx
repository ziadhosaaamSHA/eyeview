'use client';
import { Input } from "@/components/ui/input";
import {  ListFilterIcon, SearchIcon } from "lucide-react";
import React, { useState } from "react";
import CategoriesSideBar from "./categories-side-bar";
import { Button } from "@/components/ui/button";

interface Props {
    disabled?: boolean;
};

const SearchInput = ({ disabled }: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex items-center gap-2 w-full">
    <CategoriesSideBar open={isSidebarOpen} onOpenChange={setIsSidebarOpen} />
    <div className="relative w-full">
    <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 size-4" />
      <Input
        type="text"
        placeholder="Search products"
        disabled={disabled}
        className="border pl-8 rounded"
      />
    </div>
    {/* TODO: Add Categories View All Button */}
    <Button onClick={() => setIsSidebarOpen(true)} className="hoverEffect text-white/90 bg-shop_dark_green/90 p-2 rounded-md font-semibold hover:text-white hover:bg-shop_light_green">
      <ListFilterIcon  />
    </Button>
    {/* TODO: Add Library Button */}
    </div>
  );
};

export default SearchInput;
