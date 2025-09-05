import React, {useState} from 'react'
import { 
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle
 } from '@/components/ui/sheet'
import { ScrollArea } from '@/components/ui/scroll-area'; 
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { CustomCategory } from '../types';
import { useRouter } from 'next/navigation';

interface Props {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    data: CustomCategory[]; // Update to use CustomCategory type
}


function CategoriesSideBar({ open, onOpenChange, data }: Props) {

  const router = useRouter();

  const [categoryPath, setCategoryPath] = useState<CustomCategory[]>([]);

  const currentCategories: CustomCategory[] = 
    categoryPath.length > 0
      ? (categoryPath[categoryPath.length - 1].subcategories as CustomCategory[]) ?? []
      : data ?? [];

  const handleOpenChange = (open: boolean) => {
    setCategoryPath([]);
    onOpenChange(open);
  }


  
  const handleCategoryClick = (category: CustomCategory) => {
    if (category.subcategories && category.subcategories.length > 0) {
      // Drill deeper
      setCategoryPath([...categoryPath, category]);
    } else {
      // Leaf node → build full path
      const slugs = [...categoryPath.map(c => c.slug), category.slug];

      if (category.slug === 'all') {
        router.push(`/category/`);
      } else {
        router.push(`/category/${slugs.join('/')}`);
      }

      handleOpenChange(false);
    }
  };

  const handleBack = () => {
    setCategoryPath(categoryPath.slice(0, -1)); // Go back one level
  };

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
    <SheetContent side='left' className='p-0 transition-none'>
    <SheetHeader>
        <SheetTitle>Categories</SheetTitle>
      </SheetHeader>
        <ScrollArea className='flex flex-col overflow-y-auto h-full pb-2'>
          {/* Render category filters here */}
          {categoryPath.length > 0 && (
            <button 
              className='p-2 text-left w-full hover:bg-gray-100'
              onClick={handleBack}
            >
              <ChevronLeftIcon className='inline-block mr-2 size-4' />
              {categoryPath[categoryPath.length - 1].name}
            </button>
          )}
          {currentCategories?.map((category: CustomCategory) => (
            <button 
              key={category.id}
              className='p-4 text-left w-full hover:bg-gray-100 flex justify-between '
              onClick={() => handleCategoryClick(category)}
            >
              {category.name}
              {category.subcategories && category.subcategories.length > 0 && (
                <ChevronRightIcon className='inline-block mr-2 size-4' />
              )}
            </button>
          ))}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

export default CategoriesSideBar

