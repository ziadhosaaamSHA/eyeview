import Link from 'next/link'
import React from 'react'

const SignIn = () => {
  return (
    <Link prefetch href='/sign-in'>
      <button  className='text-sm font-semibold text-lightColor hover:text-shop_light_green hoverEffect'>
        Login
      </button>
    </Link>
  )
}

export default SignIn
