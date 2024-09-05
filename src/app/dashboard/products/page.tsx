import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div className='bg-[var(--bgSoft)] p-4 rounded-lg my-4'>
    <div className='flex justify-between'>
        <input className=' p-2 rounded-md border-none outline-none bg-gray-600' type='text' placeholder='Search...'/>
        <button className='bg-blue-700 px-2 rounded-md'><Link href='/dashboard/products/add'>Add New</Link></button>
      </div>
    <table className='min-w-full'>
        <thead>
          <tr className='w-full'>
          <th className='py-2 px-2 text-left'>Title</th>
            <th className='py-2 px-2 text-left'>Description</th>
            <th className='py-2 px-2 text-left'>Price</th>
            <th className='py-2 px-2 text-left'>Created at</th>
            <th className='py-2 px-2 text-left'>Stock</th>
            <th className='py-2 px-2 text-left'>Action</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td className='py-2 px-2 text-left'>Smart Phone</td>
                <td className='py-2 px-2 text-left'>New Product in the market</td>
                <td className='py-2 px-2 text-left'>$ 500</td>
                <td className='py-2 px-2 text-left'>23-04-2024</td>
                <td className='py-2 px-2 text-left'>92</td>
                <td className='flex gap-2'>
                   <button className='bg-green-500 px-1 rounded-sm'>View</button>
                  <button className='bg-red-600 px-1 rounded-sm'>Delete</button>
                </td>
            </tr>
            <tr>
                <td className='py-2 px-2 text-left'>Smart Phone</td>
                <td className='py-2 px-2 text-left'>New Product in the market</td>
                <td className='py-2 px-2 text-left'>$ 500</td>
                <td className='py-2 px-2 text-left'>23-04-2024</td>
                <td className='py-2 px-2 text-left'>92</td>
                <td className='flex gap-2'>
                   <button className='bg-green-500 px-1 rounded-sm'>View</button>
                  <button className='bg-red-600 px-1 rounded-sm'>Delete</button>
                </td>
            </tr>
            <tr>
                <td className='py-2 px-2 text-left'>Smart Phone</td>
                <td className='py-2 px-2 text-left'>New Product in the market</td>
                <td className='py-2 px-2 text-left'>$ 500</td>
                <td className='py-2 px-2 text-left'>23-04-2024</td>
                <td className='py-2 px-2 text-left'>92</td>
                <td className='flex gap-2'>
                   <button className='bg-green-500 px-1 rounded-sm'>View</button>
                  <button className='bg-red-600 px-1 rounded-sm'>Delete</button>
                </td>
            </tr>
            <tr>
                <td className='py-2 px-2 text-left'>Smart Phone</td>
                <td className='py-2 px-2 text-left'>New Product in the market</td>
                <td className='py-2 px-2 text-left'>$ 500</td>
                <td className='py-2 px-2 text-left'>23-04-2024</td>
                <td className='py-2 px-2 text-left'>92</td>
                <td className='flex gap-2'>
                   <button className='bg-green-500 px-1 rounded-sm'>View</button>
                  <button className='bg-red-600 px-1 rounded-sm'>Delete</button>
                </td>
            </tr>
            <tr>
                <td className='py-2 px-2 text-left'>Smart Phone</td>
                <td className='py-2 px-2 text-left'>New Product in the market</td>
                <td className='py-2 px-2 text-left'>$ 500</td>
                <td className='py-2 px-2 text-left'>23-04-2024</td>
                <td className='py-2 px-2 text-left'>92</td>
                <td className='flex gap-2'>
                   <button className='bg-green-500 px-1 rounded-sm'>View</button>
                  <button className='bg-red-600 px-1 rounded-sm'>Delete</button>
                </td>
            </tr>
        </tbody>
    </table>

    <div className='flex justify-between w-full'>
      <button className='bg-blue-700 px-2'>Previous</button>
      <button className='bg-blue-700 px-2'>Next</button>
    </div>
</div>
  )
}

export default Page