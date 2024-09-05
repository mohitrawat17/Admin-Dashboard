'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const SidebarList = () => {

  const pathname=usePathname()
  

  return (
    <>
     <div className="sideBar-main">
        Pages
        <Link href='/dashboard/' className={pathname==='/dashboard'?'bg-[var(--bgSoft)] rounded-[15px]':''}>Dashboard</Link>
        <Link href='/dashboard/users' className={pathname.includes('/dashboard/users')?'bg-[var(--bgSoft)] rounded-[15px]':''}>Users</Link>
        <Link href='/dashboard/products' className={pathname.includes('/dashboard/products')?'bg-[var(--bgSoft)] rounded-[15px]':''}>Products</Link>
        <Link href='/dashboard/transactions' className={pathname.includes('/dashboard/transactions')?'bg-[var(--bgSoft)] rounded-[15px]':''}>Transactions</Link>
      </div>
      <div className="sideBar-main">
        Analytics
        <Link href='/dashboard/' className={pathname.includes('/dashboard/dashboard')?'bg-[var(--bgSoft)] rounded-[15px]':''}>Revenue</Link>
        <Link href='/dashboard/' className={pathname.includes('/dashboard/dashboard')?'bg-[var(--bgSoft)] rounded-[15px]':''}>Report</Link>
        <Link href='/dashboard/' className={pathname.includes('/dashboard/dashboard')?'bg-[var(--bgSoft)] rounded-[15px]':''}>Teams</Link>
      </div>
      <div className="sideBar-main">
        User
        <Link href='/dashboard/' className={pathname.includes('/dashboard/dashboard')?'bg-[var(--bgSoft)] rounded-[15px]':''}>Settings</Link>
        <Link href='/dashboard/' className={pathname.includes('/dashboard/dashboard')?'bg-[var(--bgSoft)] rounded-[15px]':''}>Help</Link>
        <Link href='/dashboard/' className={pathname.includes('/dashboard/dashboard')?'bg-[var(--bgSoft)] rounded-[15px]':''}>Logout</Link>
      </div>
    </>
  )
}

export default SidebarList