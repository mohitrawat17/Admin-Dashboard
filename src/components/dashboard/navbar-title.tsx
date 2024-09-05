'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavbarTitle = () => {

    const pathname=usePathname()
  return (
    <h3 className='text-lg font-bold tracking-wide capitalize'>{pathname.split('/').pop()}</h3>
  )
}

export default NavbarTitle