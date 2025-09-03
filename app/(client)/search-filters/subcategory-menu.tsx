import Link from 'next/link';
import React from 'react'

interface Props {
    category: any;
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
            <div className='w-60 h-3'>
            <div className='w-60 h-3'>
                </div>
                <div className='w-60 text-black bg-white rounded-md overflow-hidden border border-gray-200'>
                    {category.subcategories?.map((subcategory: any) => (
                        <div key={subcategory.slug}>
                        <Link className='w-full text-left m-4 flex justify-between items-center' href={`/subcategory/${subcategory.slug}`}>
                            <p className='hover:bg-gray-100 p-2 font-medium text-md text-shop_dark_green w-full'>{subcategory.name}</p>
                        </Link>
                        <div className='sub_of_subcategories w-full border-b border-gray-200'>
                            {subcategory.subcategories?.map((subsubcategory: any) => (
                                <Link key={subsubcategory.slug} className='w-full text-left p-2 pl-8 pr-4 flex justify-between items-center font-medium' href={`/subcategory/${subcategory.slug}`}>
                                    <p className='hover:bg-gray-100 text-sm w-full p-2'>{subsubcategory.name}</p>
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
