import React from 'react'
import NotFoundImage from '../../images/404.png'

export default function NotFound() {
  return (
    <div className='vh-100 d-flex align-items-center justify-content-center'>
      <img src={NotFoundImage} alt="404 Image" className='w-100' />
    </div>
  )
}
