import React from 'react'
import { StatCards } from './StatCards'
import { ActiveGraph } from './ActiveGraph'
import { UsageRadar } from './UsageRadar'
import { RecentTransaction } from './RecentTransaction'

export const Grid = () => {
  return (
    <div className='px-4 grid gap-3 grid-cols-12'>
        <StatCards />
        <ActiveGraph />
        <UsageRadar />
        <RecentTransaction />
    </div>
  )
}
