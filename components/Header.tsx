import React from 'react'
import Container from './Container'
import HeaderMenu from './HeaderMenu'
import SearchBar from './SearchBar'
import CartIcon from './CartIcon'
import FavoriteButton from './FavoriteButton'
import SignIn from './SignIn'
import MobileMenu from './MobileMenu'
import { currentUser } from '@clerk/nextjs/server'
import { ClerkLoaded, SignedIn, UserButton } from '@clerk/nextjs'

const Header = async() => {
  const user = await currentUser();

  return (
    <header className='bg-white py-4 border-b border-gray-200 shadow-sm sticky top-0 z-50'>
      <Container className='flex items-center justify-between text-lightColor'>
        {/* Logo */}
        <div className='w-auto flex items-center gap-4 justify-start md:gap-0'>
          <MobileMenu />
          <h1 className='text-shop_dark_green hoverEffect group font-sans cursor-pointer text-2xl font-bold uppercase tracking-wider hover:text-shop_light_green md:gap-0'>ShopCart</h1>
        </div>
        {/* NavMenu */}
        <HeaderMenu />
        {/* NavIcons */}
        <div className='w-auto flex items-center justify-end gap-4'>
          <SearchBar />
          <CartIcon />
          <FavoriteButton />
          <ClerkLoaded>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignIn />
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  )
}

export default Header
