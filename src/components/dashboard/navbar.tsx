import React from 'react'
import NavbarTitle from './navbar-title'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-[var(--bgSoft)] p-4 rounded-lg h-24'>
      <NavbarTitle/>
      <div>
        <input className=' p-2 rounded-md border-none outline-none' type='text' placeholder='Search...'/>
      </div>
    </div>
  )
}

export default Navbar