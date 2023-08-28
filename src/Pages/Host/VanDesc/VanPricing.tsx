import React from 'react'
import { useOutletContext } from 'react-router-dom'
function VanPricing() {
   const {price} = useOutletContext()
  return (
    <p className='text-2xl font-medium'>${price} <span className='text-lg font-normal'>/day</span> </p>
  )
}

export default VanPricing