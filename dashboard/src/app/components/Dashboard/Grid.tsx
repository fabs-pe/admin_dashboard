import React from 'react'
import { StatCards } from './StatCards'
import { ActiveGraph } from './ActiveGraph'

export const Grid = () => {
  return (
    <div className='px-4 grid gap-3 grid-cols-12'>
        <StatCards />
        <ActiveGraph />
    </div>
  )
}
