import { Heart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const FavoriteButton = () => {
  return (
    <Link href="/favorites" className='relative group'>
      <span className='absolute -top-1 -right-1 bg-shop_light_green text-white text-xs font-semibold px-1 rounded-full'>0</span>
      <Heart className='w-5 h-5 hover:text-shop_light_green hoverEffect' />
    </Link>
  )
}

export default FavoriteButton
