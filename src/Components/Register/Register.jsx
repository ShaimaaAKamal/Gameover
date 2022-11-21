import React, { useState } from 'react'
import axios from 'axios'
import auth from '../../images/auth.jpg'
import { Link, useNavigate } from 'react-router-dom'
import Validation from '../../js/Validation';
import General from '../../js/General';
const validate=new Validation();
const general=new General();
export default function Register() {
  const navigate=useNavigate()
  const [user,setUser]=useState({
      'first_name':'',
      'last_name':'',
      'email':'',
      'password':''
  });
  const [validationErrorsList,setValidationErrorsList]=useState([]);
  const [apiError,setApiError]=useState(null);
  const getUserData=(e)=>{
      const myuser={...user};
      myuser[e.target.name]=e.target.value;
      setUser(myuser)
  }

  const FormSubmit=async(e)=>{
    setValidationErrorsList([]);
    setApiError([]);
     e.preventDefault();
     const validationResult=validate.validateRegisterForm(user)
     if(validationResult.error){
         setValidationErrorsList(validationResult.error.details);
     }
     else{
          const {data}=await axios.post(`https://route-egypt-api.herokuapp.com/signup`, user);
          if(data.message === 'success')
          navigate('/login')
          else
          {setApiError(data.errors);
          }
     }
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
                <form className='row' onSubmit={FormSubmit}>
                    <div className="col-6">
                        <div className="mb-3">
                          <input type="text" className="form-control mb-1" name="first_name" placeholder="First Name" onChange={getUserData}/>
                          {(apiError && apiError['first_name'])?<div className='text-warning py-0 small text-cenetr text-capitalize'>{apiError['first_name'].message}</div>:'' }                       
                          <div className=' text-warning py-0 small text-cenetr'>{general.getMessage(validationErrorsList,'first_name')}</div>                        
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="mb-3">
                          <input type="text" className="form-control mb-1" name="last_name" placeholder="Last Name" onChange={getUserData}/>  
                          {(apiError && apiError['last_name'])?<div className='text-warning py-0 small text-cenetr text-capitalize'>{apiError['last_name'].message}</div>:'' }                          
                          <div className=' text-warning py-0 small text-cenetr'>{general.getMessage(validationErrorsList,'last_name')}</div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="mb-3">
                          <input type="email" className="form-control mb-1" name="email" placeholder="Email Address" onChange={getUserData}/>
                          {(apiError && apiError['email'])?<div className='text-warning py-0 small text-cenetr text-capitalize'>{apiError['email'].message}</div>:'' }                       
                          <div className=' text-warning py-0 small text-cenetr '>{general.getMessage(validationErrorsList,'email')}</div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="mb-3">
                          <input type="number" className="form-control mb-1" name="age" placeholder="Age" onChange={getUserData}/>
                          {(apiError && apiError['age'])?<div className='text-warning py-0 small text-cenetr text-capitalize'>{apiError['age'].message}</div>:'' }                       
                          <div className=' text-warning py-0 small text-cenetr '>{general.getMessage(validationErrorsList,'age')}</div> 
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="mb-3">
                          <input type="password" className="form-control mb-1" name="password" placeholder="Password" onChange={getUserData}/>
                          {(apiError && apiError['password'])?<div className='text-warning py-0 small text-cenetr text-capitalize'>{apiError['password'].message}</div>:'' }                       

                          <div className=' text-warning py-0 small text-cenetr'>{general.getMessage(validationErrorsList,'password')}</div>
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
