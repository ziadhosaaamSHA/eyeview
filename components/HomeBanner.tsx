import React from 'react'
import Title from './ui/Title'
import Link from 'next/link'
import Image from 'next/image'
import { banner_1 } from '@/images'

function HomeBanner() {
  return (
    <div className='py-16 md:py-0 bg-shop_light_pink rounded-xl flex items-center justify-between lg:px-24 px-24'>
        <div> 
            <Title className='mb-5'>
                Welcome to ShopCart
            </Title>
            <Link href={"/shop"} className='text-white/90 bg-shop_dark_green/90 px-4 py-2 rounded-md font-semibold hover:text-white hover:bg-shop_light_green hoverEffect'>
                Go to Shop
            </Link>
        </div>
        <div>
            <Image src={banner_1} alt="ShopCart" width={500} height={500} className="hidden md:inline-flex w-96" />
        </div>
    </div>
  )
}

export default HomeBanner
