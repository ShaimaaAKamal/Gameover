import React from 'react'

export default function Loading() {
  return (
     <div className='vh-75 d-flex justify-content-center align-items-center'>
         <div>
              <i className="fa-regular fa-circle fa-2x mx-2 text-pink loadFarIcon"></i>
              <i className="fa-solid fa-play fa-2x mx-2 fa-rotate-270 loadCloseIcon text-purple"></i>
              <i className="fa-regular fa-square fa-2x mx-2 text-warning loadFarIcon"></i>
              <i className="fa-solid fa-square fa-2x mx-2 text-info loadCloseIcon fa-rotate-45"></i>
         </div>
     </div>
  )
}
