'use client'
import { Button } from '@/components/ui/button';
import React, { useRef } from 'react'
import { useState } from 'react';
import { useDropdownPosition } from './use-dropdown-position';
import SubCategoryMenu from './subcategory-menu';

interface Props {
    category: any;
    isActive?: boolean;
    isNavigationHovered?: boolean;
}

function CategoryDropDown({ category, isActive, isNavigationHovered }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const { getDropdownPosition } = useDropdownPosition(dropdownRef)

    const onMouseEnter = () => {
        if (category.subcategories) {
            setIsOpen(true);
            console.log(setIsOpen)
        }
    }
    const onMouseLeave = () => {
        setIsOpen(false);
    }
    const dropdownPosition = getDropdownPosition();
    return (
    <div className='relative' ref={dropdownRef} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
    <div className='relative'>
    <Button className={`hoverEffect text-white/90 bg-shop_dark_green/90 px-4 py-2 rounded-md font-semibold hover:text-white hover:bg-shop_light_green
    ${isActive && !isNavigationHovered && 'bg-shop_light_green text-white'}`}>
        {category.name}
    </Button>
    {category.subcategories && category.subcategories.length > 0 && (
        <div className={`hoverEffect opacity-0 absolute -bottom-3 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-shop_dark_green/90 left-1/2 -translate-x-1/2 ${isOpen ? 'opacity-100 ' : ''}`}>
        </div>
    )}
    </div>
    <SubCategoryMenu 
    category={category}
    isOpen={isOpen}
    position={dropdownPosition}
    />
    </div>
  )
}

export default CategoryDropDown
