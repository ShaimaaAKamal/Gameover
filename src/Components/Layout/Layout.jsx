import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';


export default function Layout({userData,setUser,setToken}) {
  return (
    <> 
        <Navbar userData={userData} setUser={setUser} setToken={setToken}/>
        <Outlet/>
    </>
   )
}
