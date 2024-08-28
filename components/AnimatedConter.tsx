'use client'
import React from 'react'
import CountUp from 'react-countup'

const AnimatedConter = ({amount}: {amount: number}) => {
  return (
    <div className='w-full'>
        <CountUp
         decimals={2}
         decimal=","
         prefix="$ "
         end={amount} />
    </div>
  )
}

export default AnimatedConter