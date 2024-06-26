import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({amount}: {amount: number}) => {
  return (
    <div className='w-full'>
      <CountUp 
        separator="."
        decimals={2}
        decimal=','
        prefix='R$'
        end={amount}
      />
    </div>
  )
}

export default AnimatedCounter