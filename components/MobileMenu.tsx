'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { AlignLeft } from 'lucide-react'
import SideMenu from './SideMenu'

const MobileMenu = () => {
    const [isSideBarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
        <button onClick={() => setIsSidebarOpen(!isSideBarOpen)}>
            <AlignLeft className='hover:text-shop_light_green hoverEffect hover:cursor-pointer md:hidden'/>
        </button>
        <div className='md:hidden '>
        <SideMenu 
        isOpen={isSideBarOpen}
        onClose={() => setIsSidebarOpen(false)}
        />
        </div>
    </div>
  )
}

export default MobileMenu
