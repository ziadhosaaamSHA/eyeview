'use client';
import React from 'react'
import SearchInput from './search-input'
import Categories from './categories'
import { useTRPC } from '@/trpc/client'
import { useSuspenseQuery } from '@tanstack/react-query'

function SearchFilters() {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.categories.getMany.queryOptions());

  return (
    <div className='px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full'>
      <SearchInput/>
      <Categories data={data} />
    </div>
  )
}

export default SearchFilters
