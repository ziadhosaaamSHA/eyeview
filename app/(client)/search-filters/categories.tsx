'use client'
import React, { useState, useRef, useEffect } from 'react'
import CategoryDropDown from './category-dropdown'
import { Button } from '@/components/ui/button'
import { ListFilterIcon } from 'lucide-react'
import CategoriesSideBar from './categories-side-bar'
import { CategoriesGetManyOutput, } from '@/modules/categories/types'

interface CategoriesProps {
    data: CategoriesGetManyOutput;
}

const Categories = ({ data }: CategoriesProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const viewAllRef = useRef<HTMLDivElement>(null);

  const [visibleCount, setVisibleCount] = useState(data.length);
  const [isAnyHovered, setIsAnyHovered] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const activeCategory= "all";
  const activeCategoryIndex = data.findIndex((cat) => cat.slug === activeCategory);
  const isActiveCategoryHidden = activeCategoryIndex >= visibleCount && activeCategoryIndex !== -1;
  
  useEffect(() => {
    const calculateVisible = () => {
      if (!containerRef.current || !measureRef.current || !viewAllRef.current) {
        return;
      }

      const containerWidth = containerRef.current.offsetWidth;
      const viewAllWidth = viewAllRef.current.offsetWidth;
      const availableWidth = containerWidth - viewAllWidth;

      const items = Array.from(measureRef.current.children) as HTMLDivElement[];

      let totalWidth = 0;
      let visible = 0;

      for (const item of items) {
        const width = item.getBoundingClientRect().width;

        if (totalWidth + width > availableWidth) break;
        totalWidth += width;
        visible++;
      }

      setVisibleCount(visible);
    }

    const resizeObserver = new ResizeObserver(calculateVisible);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    return () => resizeObserver.disconnect();
  }, [data.length]);

  return (
    <div className='relative w-full'>

      <CategoriesSideBar open={isSideBarOpen} onOpenChange={setIsSideBarOpen}/>
      <div ref={measureRef} className='absolute opacity-0 pointer-events-none flex'
      style={{position: "fixed", top:-9999, left:-9999}}
      >
      {data.map((category: CategoriesGetManyOutput[1]) => (
        <div key={category.id} className='px-3'>
          <CategoryDropDown 
          category={category} 
          isActive={false}
          isNavigationHovered={false}
          />
        </div>
      ))}
      </div>
      <div ref={containerRef}  className='flex flex-nowrap items-center justify-between'>
      {data.slice(0, visibleCount).map((category: CategoriesGetManyOutput[1]) => (
        <div key={category.id} className='px-3'>
          <CategoryDropDown 
          category={category} 
          isActive={activeCategory === category.slug}
          isNavigationHovered={isAnyHovered}
          />
        </div>
      ))}
      <div ref={viewAllRef} className='shrink-0'>
        <Button onClick={() => setIsSideBarOpen(true)} className={`hoverEffect text-white/90 bg-shop_dark_green/90 px-4 py-2 rounded-md font-semibold hover:text-white hover:bg-shop_light_green ${isActiveCategoryHidden && !isAnyHovered && 'bg-shop_light_green text-white' } `}>
          View All
          <ListFilterIcon className='ml-2 h-4 w-4' />
        </Button>
      </div>
      </div>
    </div>
  )
}

export default Categories
