import React from 'react'

const TransactionRecords = () => {
  return (
    <div className='bg-[var(--bgSoft)] p-4 rounded-lg max-h-80 mb-4'>
        <h2 className='text-lg font-bold'>Latest Transactions</h2>
        <table className='min-w-full'>
            <thead>
              <tr className='w-full'>
              <th className='py-2 px-4 text-left'>Name</th>
                <th className='py-2 px-4 text-left'>Status</th>
                <th className='py-2 px-4 text-left'>Date</th>
                <th className='py-2 px-4 text-left'>Amount</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='py-2 px-4 text-left'>Mohit</td>
                    <td className='py-2 px-4 text-left'>Pending</td>
                    <td className='py-2 px-4 text-left'>14-02-2024</td>
                    <td className='py-2 px-4 text-left'>$ 1223</td>
                </tr>
                <tr>
                    <td className='py-2 px-4 text-left'>Mohit</td>
                    <td className='py-2 px-4 text-left'>Pending</td>
                    <td className='py-2 px-4 text-left'>14-02-2024</td>
                    <td className='py-2 px-4 text-left'>$ 1223</td>
                </tr>
                <tr>
                    <td className='py-2 px-4 text-left'>Mohit</td>
                    <td className='py-2 px-4 text-left'>Pending</td>
                    <td className='py-2 px-4 text-left'>14-02-2024</td>
                    <td className='py-2 px-4 text-left'>$ 1223</td>
                </tr>
                <tr>
                    <td className='py-2 px-4 text-left'>Mohit</td>
                    <td className='py-2 px-4 text-left'>Pending</td>
                    <td className='py-2 px-4 text-left'>14-02-2024</td>
                    <td className='py-2 px-4 text-left'>$ 1223</td>
                </tr>
                <tr>
                    <td className='py-2 px-4 text-left'>Mohit</td>
                    <td className='py-2 px-4 text-left'>Pending</td>
                    <td className='py-2 px-4 text-left'>14-02-2024</td>
                    <td className='py-2 px-4 text-left'>$ 1223</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default TransactionRecords