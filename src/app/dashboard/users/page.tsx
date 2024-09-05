import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div className='bg-[var(--bgSoft)] p-4 rounded-lg my-4'>
    <div className='flex justify-between'>
        <input className=' p-2 rounded-md border-none outline-none bg-gray-600' type='text' placeholder='Search...'/>
        <button className='bg-blue-700 px-2 rounded-md'>
          <Link href='/dashboard/users/add'>Add New</Link>
        </button>
      </div>
    <table className='min-w-full'>
        <thead>
          <tr className='w-full'>
          <th className='py-2 px-2 text-left'>Name</th>
            <th className='py-2 px-2 text-left'>Email</th>
            <th className='py-2 px-2 text-left'>Created at</th>
            <th className='py-2 px-2 text-left'>Role</th>
            <th className='py-2 px-2 text-left'>Satus</th>
            <th className='py-2 px-2 text-left'>Action</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td className='py-2 px-2 text-left'>Mohit</td>
                <td className='py-2 px-2 text-left'>mohit.r@antino.com</td>
                <td className='py-2 px-2 text-left'>14-02-2024</td>
                <td className='py-2 px-2 text-left'>$ 1223</td>
                <td className='py-2 px-2 text-left'>Active</td>
                <td className='flex gap-2'>
                   <button className='bg-green-500 px-1 rounded-sm'>View</button>
                  <button className='bg-red-600 px-1 rounded-sm'>Delete</button>
                </td>
            </tr>
            <tr>
                <td className='py-2 px-2 text-left'>Mohit</td>
                <td className='py-2 px-2 text-left'>mohit.r@antino.com</td>
                <td className='py-2 px-2 text-left'>14-02-2024</td>
                <td className='py-2 px-2 text-left'>$ 1223</td>
                <td className='py-2 px-2 text-left'>Active</td>
                <td className='flex gap-2'>
                   <button className='bg-green-500 px-1 rounded-sm'>View</button>
                  <button className='bg-red-600 px-1 rounded-sm'>Delete</button>
                </td>
            </tr>
            <tr>
                <td className='py-2 px-2 text-left'>Mohit</td>
                <td className='py-2 px-2 text-left'>mohit.r@antino.com</td>
                <td className='py-2 px-2 text-left'>14-02-2024</td>
                <td className='py-2 px-2 text-left'>$ 1223</td>
                <td className='py-2 px-2 text-left'>Active</td>
                <td className='flex gap-2'>
                   <button className='bg-green-500 px-1 rounded-sm'>View</button>
                  <button className='bg-red-600 px-1 rounded-sm'>Delete</button>
                </td>
            </tr>
            <tr>
                <td className='py-2 px-2 text-left'>Mohit</td>
                <td className='py-2 px-2 text-left'>mohit.r@antino.com</td>
                <td className='py-2 px-2 text-left'>14-02-2024</td>
                <td className='py-2 px-2 text-left'>$ 1223</td>
                <td className='py-2 px-2 text-left'>Active</td>
                <td className='flex gap-2'>
                   <button className='bg-green-500 px-1 rounded-sm'>View</button>
                  <button className='bg-red-600 px-1 rounded-sm'>Delete</button>
                </td>
            </tr>
            <tr>
                <td className='py-2 px-2 text-left'>Mohit</td>
                <td className='py-2 px-2 text-left'>mohit.r@antino.com</td>
                <td className='py-2 px-2 text-left'>14-02-2024</td>
                <td className='py-2 px-2 text-left'>$ 1223</td>
                <td className='py-2 px-2 text-left'>Active</td>
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