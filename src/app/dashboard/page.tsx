import React from 'react'
import DashboardPannel from './_dashboard-ui/dashboard-pannel'
import TransactionRecords from './_dashboard-ui/transaction-records'
import WeeklyChart from './_dashboard-ui/weekly-chart'

const Page = () => {
  return (
    <div>
      {/* row 1 */}
      <div className='grid grid-cols-3 gap-3 py-4'>
        <DashboardPannel/>
        <DashboardPannel/>
        <DashboardPannel/>
      </div>

      <TransactionRecords/>
      <WeeklyChart/>
    </div>
  )
}

export default Page