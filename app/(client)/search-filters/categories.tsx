import React from 'react'
import CategoryDropDown from './category-dropdown'

interface CategoriesProps {
    data: any
}

const Categories = ({ data }: CategoriesProps) => {
  return (
    <div className='relative w-full'>
      <div className='flex flex-nowrap items-center justify-between'>
      {data.map((category: any) => (
        <div key={category.id} className=''>
          <CategoryDropDown 
          category={category} 
          isActive={false}
          isNavigationHovered={false}
          />
        </div>
      ))}
      </div>
    </div>
  )
}

export default Categories
