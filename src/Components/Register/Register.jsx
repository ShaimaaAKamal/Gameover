import React, { useState } from 'react'
import auth from '../../images/auth.jpg'
import { Link } from 'react-router-dom'

export default function Register() {
  const [user,setUser]=useState({
      ' first-name':'',
      'last-name':'',
      'age':0,
      'email':'',
      'password':''
  })
  const getUserData=(e)=>{
      const myuser={...user};
      myuser[e.target.name]=e.target.value;
      setUser(myuser)
      console.log(user);
  }
  return (
    <div className="container py-5 my-5">
        <div className="row g-0">
          <div className="col-lg-6 d-none d-lg-block">
           <div className='h-100'>
            <img src={auth} alt="siteImage" className='w-100 h-100' style={{objectFit:'cover'}}/>
           </div>
          </div>
          <div className="col-lg-6">
             <div className='form  p-4'>
                <h5 className='text-center mt-3 mb-4'>Create My Account!</h5>
                <form className='row'>
                    <div className="col-6">
                        <div className="mb-3">
                          <input type="text" className="form-control" id="first-name" placeholder="First Name" onChange={getUserData}/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mb-3">
                          <input type="text" className="form-control" id="last-name" placeholder="Last Name" onChange={getUserData}/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="mb-3">
                          <input type="email" className="form-control" id="email" placeholder="Email Address" onChange={getUserData}/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="mb-3">
                          <input type="number" className="form-control" id="age" placeholder="Age" onChange={getUserData}/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="mb-3">
                          <input type="password" className="form-control" id="password" placeholder="Password" onChange={getUserData}/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="mb-3">
                          <button className='w-100 btn py-2'>Create Account</button>
                        </div>
                    </div>
                </form>
                <p className='small text-secondary text-center pb-3 mb-0'>This site is protected by reCAPTCHA and the Google 
                  <a href="https://policies.google.com/privacy" className='text-reset'>Privacy Policy</a> and <a className='text-reset' href="https://policies.google.com/terms">Terms of Service</a> apply.
                </p>
                <p className='small text-secondary text-center pt-4  borderTop d-flex align-items-center justify-content-center'>
                    <span>Already a member?</span> <Link to='/login' className='mx-1 text-decoration-none d-flex align-items-center text-info'><span>Log In</span><i className="fa-sm ms-1 fa-solid pt-1 fa-chevron-right"></i></Link>
                </p>
             </div>
          </div>
        </div>
    </div>
  )
}
