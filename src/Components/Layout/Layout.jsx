import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';


export default function Layout({token,setToken}) {
   
  return (
    <> 
        <Navbar token={token}  setToken={setToken}/>
        <div className="parent">
            <Outlet/>
        </div>
    </>
   )
}
