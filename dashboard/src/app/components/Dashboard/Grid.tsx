import React from 'react'
import { StatCards } from './StatCards'
import { ActiveGraph } from './ActiveGraph'
import { UsageRadar } from './UsageRadar'

export const Grid = () => {
  return (
    <div className='px-4 grid gap-3 grid-cols-12'>
        <StatCards />
        <ActiveGraph />
        <UsageRadar />
    </div>
  )
}
