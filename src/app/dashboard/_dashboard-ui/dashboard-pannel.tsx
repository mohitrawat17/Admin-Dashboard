import React from 'react'

const DashboardPannel = () => {
  return (
    <div className='bg-[var(--bgSoft)] p-4 rounded-lg col-span-1 h-32'>
      <h2 className='py-1 text-lg font-bold tracking-wide'>Total Users</h2>
      <h1 className='py-1'>222</h1>
      <p className='py-1'><span className='text-green-500'>12% </span>more than previous week</p>
    </div>
  )
}

export default DashboardPannel