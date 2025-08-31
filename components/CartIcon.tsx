import React from 'react'
import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'

function CartIcon() {
  return (
    <Link href="/cart" className='relative group'>
      <span className='absolute -top-1 -right-1 bg-shop_light_green text-white text-xs font-semibold px-1 rounded-full'>0</span>
      <ShoppingBag className='w-5 h-5 hover:text-shop_light_green hoverEffect' />
    </Link>
  )
}

export default CartIcon
