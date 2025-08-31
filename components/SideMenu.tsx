
import { headerData } from '@/constants/data';
import { X } from 'lucide-react';
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';
import { useOutsideClick } from '@/hooks';

interface SideBarProps {
    isOpen: boolean;
    onClose: () => void;
}
const SideMenu: React.FC<SideBarProps> = ({ isOpen, onClose }) => {
  const sidebarRef = useOutsideClick<HTMLDivElement>(() => {
    if (isOpen) {
      onClose();
    }
  });
  const pathname = usePathname();
  return (
  <div className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 shadow-xl ${isOpen ? 'translate-x-0' : '-translate-x-full'} hoverEffect`}>
    <div ref={sidebarRef} className='min-w-72 max-w-96 bg-black h-screen p-10 flex flex-col gap-6'>
      <div className='text-white flex items-center justify-between gap-5'>
        <h1 className='hoverEffect group font-sans cursor-pointer text-2xl font-bold uppercase tracking-wider hover:text-shop_light_green md:gap-0'>ShopCart</h1>
        <button onClick={onClose} className='hover:text-shop_light_green hoverEffect'>
          <X />
        </button>
      </div>    
      <div className='flex flex-col space-y-3.5 font-semibold tracking-wide'>
        {headerData?.map((item) => (
          <Link key={item.title} href={item.href} className={`hover:text-shop_light_green hoverEffect ${pathname === item?.href ? 'text-shop_light_green' : ''}`}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  </div>
  )
}
 
export default SideMenu
