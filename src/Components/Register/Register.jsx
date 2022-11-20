import React from 'react'
import auth from '../../images/auth.jpg'

export default function Register() {
  return (
    <div className="container py-5 my-5">
        <div className="row">
          <div className="col-lg-6 d-none d-lg-block">
           <div>
            <img src={auth} alt="siteImage" className='w-100'/>
           </div>
          </div>
          <div className="col-lg-6">
            <div>
            </div>
          </div>
        </div>
    </div>
  )
}
