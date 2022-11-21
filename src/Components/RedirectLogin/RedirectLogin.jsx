import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function RedirectLogin({setToken}) {
    const navigate=useNavigate()
    useEffect(()=>{
         localStorage.removeItem('token');
         setToken(null);
        //  setUser(null);
         navigate('/login')
    },[])
  return (
    null
  )
}
