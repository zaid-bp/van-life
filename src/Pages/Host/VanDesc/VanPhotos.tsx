import React from 'react'
import { useOutletContext } from 'react-router-dom'

function VanPhotos() {
    const {imageUrl, name} = useOutletContext()
  return (
    <img src={imageUrl} alt={name} className='w-32' />
  )
}

export default VanPhotos