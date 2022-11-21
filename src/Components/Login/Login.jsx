import React, { useState } from 'react'
import auth from '../../images/auth.jpg';
import logo from '../../images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Validation from '../../js/Validation';
const validate=new Validation();
export default function Login() {
  const navigate=useNavigate()

  const [credtientials,setCredientals]=useState({
    email:'',
    password:''
  })

  const [validationErrorsList,setValidationErrorsList]=useState([]);
  const [apiError,setApiError]=useState('');

 const handleLoginSubmit=async (e)=>{
    setValidationErrorsList([]);
    setApiError('');
    e.preventDefault();
    const validationResult=validate.validateLoginForm(credtientials)
    console.log(validationResult);
    if(validationResult.error){
      setValidationErrorsList(validationResult.error.details);
  }else{
    const {data}=await axios.post(`https://route-egypt-api.herokuapp.com/signin`, credtientials);
    if(data.message === 'success'){
      {localStorage.setItem('token',data.token)
      navigate('/home')}
    }else{
      setApiError(data.message);
    }
  }

 }

 const getMessage=(validationErrorsList,key)=>{
  const  ErrorElement=validationErrorsList.find(error => error.context.label === key);
  let message=(ErrorElement)?ErrorElement.message:'';
  return message;
}


const setCredtientails=(e)=>{
   const myCredtientials=credtientials;
   myCredtientials[e.target.name]=e.target.value;
   setCredientals(myCredtientials)
}

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
            <form className='row pt-3 login' onSubmit={handleLoginSubmit}>
                <div className="col-12">
                    <div className="mb-3">
                      <input type="email" className="form-control" name="email" placeholder="Email Address" onChange={setCredtientails}/>
                      {(apiError && apiError.split(' ')[0] === 'email')?<div className='text-warning py-0 small text-cenetr text-capitalize'>{apiError}</div>:'' }                       
                      <div className=' text-warning py-0 small text-cenetr '>{getMessage(validationErrorsList,'email')}</div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="mb-3">
                      <input type="password" className="form-control" name="password" placeholder="Password" onChange={setCredtientails}/>
                      {(apiError&& apiError.split(' ')[0] !== 'email')?<div className='text-warning py-0 small text-cenetr text-capitalize'>{apiError}</div>:'' }                       
                      <div className=' text-warning py-0 small text-cenetr '>{getMessage(validationErrorsList,'password')}</div>
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
