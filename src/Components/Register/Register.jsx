import React from 'react'
import auth from '../../images/auth.jpg'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className="container py-5 my-5">
        <div className="row g-0">
          <div className="col-lg-6 d-none d-lg-block">
           <div className='h-100'>
            <img src={auth} alt="siteImage" className='w-100 h-100' style={{objectFit:'cover'}}/>
           </div>
          </div>
          <div className="col-lg-6">
             <div className='form p-5'>
                <h5 className='text-center mb-5'>Create My Account!</h5>
                <form className='row'>
                    <div className="col-6">
                        <div class="mb-3">
                          <input type="text" class="form-control" id="first-name" placeholder="First Name"/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div class="mb-3">
                          <input type="text" class="form-control" id="last-name" placeholder="Last Name"/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div class="mb-3">
                          <input type="email" class="form-control" id="email" placeholder="Email Address"/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div class="mb-3">
                          <input type="number" class="form-control" id="age" placeholder="Age"/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div class="mb-3">
                          <input type="password" class="form-control" id="password" placeholder="Password"/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div class="mb-3">
                          <button className='w-100 btn'>Create Account</button>
                        </div>
                    </div>
                </form>
                <p>This site is protected by reCAPTCHA and the Google 
                  <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.
                </p>
                <p>
                    <span>Already a member?</span> <Link to='login' className='text-info'><span>Log In</span><i className="fa-solid fa-chevron-right"></i></Link>
                </p>
             </div>
          </div>
        </div>
    </div>
  )
}
