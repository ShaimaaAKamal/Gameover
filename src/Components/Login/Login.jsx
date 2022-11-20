import React from 'react'
import auth from '../../images/auth.jpg';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
export default function Login() {
  return (
    <div className="container py-5 my-5 ">
    <div className="row g-0">
      <div className="col-lg-6 d-none d-lg-block">
       <div className='h-100'>
        <img src={auth} alt="siteImage" className='w-100 h-100' style={{objectFit:'cover'}}/>
       </div>
      </div>
      <div className="col-lg-6">
         <div className='form  p-4 px-5'>
            <div className='text-center mb-4'>
              <img src={logo} alt="logo" className='w-25' />
            </div>
            <h5 className='text-center mt-3 mb-2'>Log in to GameOver</h5>
            <form className='row pt-3 login'>
                <div className="col-12">
                    <div className="mb-3">
                      <input type="email" className="form-control" id="email" placeholder="Email Address"/>
                    </div>
                </div>
                <div className="col-12">
                    <div className="mb-3">
                      <input type="password" className="form-control" id="password" placeholder="Password"/>
                    </div>
                </div>
                <div className="col-12">
                    <div className="mb-3">
                      <button className='w-100 btn py-2'>Login</button>
                    </div>
                </div>
            </form>
            
            <div className='small text-secondary text-center pt-4  borderTop d-flex flex-column align-items-center'>
               <div className='mb-2'>
                <Link to='forgetPassword' className='text-info  text-decoration-none'>Forgot Password?</Link>
               </div>
               <div  className='d-flex justify-content-center align-items-center'>              
                  <span>Not a member yet?</span> <Link to='/register' className='mx-1 text-decoration-none d-flex align-items-center text-info'><span>Create Account</span><i className="fa-sm fa-solid pt-1 fa-chevron-right"></i></Link>
               </div>
            </div>
         </div>
      </div>
    </div>
</div>
  )
}
