'use client'
import { headerData } from '@/constants/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const HeaderMenu = () => {
    const pathname =usePathname();
  return (
    <ul className='hidden md:inline-flex w-auto items-center justify-center gap-8 text-sm capitalize font-semibold text-lightColor '>
        {headerData?.map((item)=> (
            <li key={item?.title}>
                <Link className={`hover:text-shop_light_green hoverEffect relative group ${pathname === item?.href && 'text-shop_light_green'}`} 
                href={item?.href}
                >
                    {item?.title}
                    <span className={`absolute -bottom-0.5 left-0 w-0 h-[1px] bg-shop_light_green transition-all group-hover:w-full ${pathname === item?.href && 'w-full'}`}></span>
                </Link>
            </li>
        ))}
    </ul>
  )
}

export default HeaderMenu
