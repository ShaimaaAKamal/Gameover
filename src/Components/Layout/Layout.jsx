import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';


export default function Layout({userData,setUser}) {
  return (
    <> 
        <Navbar userData={userData} setUser={setUser}/>
        <Outlet/>
    </>
   )
}
