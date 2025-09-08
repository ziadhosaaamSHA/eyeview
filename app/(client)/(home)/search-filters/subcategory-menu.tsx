import { CategoriesGetManyOutputSingle } from '@/modules/categories/types';
import Link from 'next/link';
import React from 'react'

interface Props {
    category: CategoriesGetManyOutputSingle;
    isOpen: boolean;
    position: { top: number; left: number };
}


function SubcategoryMenu({ category, isOpen, position }: Props) {
    if (!isOpen || !category.subcategories || (category.subcategories ?? []).length === 0) {
        return null;
    }
    return (
        <div
        className='fixed z-100'
        style={{
            top: position.top,
            left: position.left,
        }}
        >
            {/* Render the subcategory menu here */}
            {/* Render the invisible bridge to maintain hover */}
            <div className='w-full border-gray-200 shadow-lg' >
            <div className='w-full h-3'>
                </div>
                <div className='w-full overflow-y-scroll max-h-[400px] overflow-x-hidden text-black bg-white rounded-md flex flex-wrap'>
                    {category.subcategories?.map((subcategory: CategoriesGetManyOutputSingle) => (
                        <div key={subcategory.slug} className='mr-4'>
                        <Link className='text-left m-4 flex justify-between items-center' href={`/category/${category.slug}/${subcategory.slug}`}>
                            <p className='font-medium text-md text-shop_dark_green w-full'>{subcategory.name}</p>
                        </Link>
                        <div className='sub_of_subcategories w-full'>
                            {subcategory.subcategories?.map((subsubcategory: CategoriesGetManyOutputSingle) => (
                                <Link key={subsubcategory.slug} className='w-full text-left ml-8 mb-5 flex justify-between items-center font-medium' href={`/category/${category.slug}/${subcategory.slug}/${subsubcategory.slug}`}>
                                    <p className='text-sm'>{subsubcategory.name}</p>
                                </Link>
                            ))}
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SubcategoryMenu
