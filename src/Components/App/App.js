import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import Layout from '../Layout/Layout';
import NotFound from '../NotFound/NotFound';
import Login from '../Login/Login'
import Register from '../Register/Register'
import Home from '../Home/Home';
import All from '../All/All'
import Games from '../Games/Games'
import DisplayedGames from "../DisplayGames/DisplayedGames";
import PlatForm from "../PlatForms/PlatForm";
import Loading from '../Loading/Loading';
import Sort from '../Sort/Sort';
import Category from '../Categories/Category'
import RedirectLogin from "../RedirectLogin/RedirectLogin";
import jwt_decode from "jwt-decode";
import ProtectedRoute from "../ProtectedRoute/ProductedRoute";
import GameDetails from '../GameDetails/GameDetails'
import { useState } from "react";
import GuestRoute from '../GuestRoute/GuestRoute'

function App() {
  const [userData,setUserData]=useState(null)
  const [token,setToken]=useState(localStorage.getItem('token'))
  const getUserData=(token)=>{
    setToken(token);
    let user=jwt_decode(token);
    setUserData(user);
  }

  
  const routes=createBrowserRouter([
      {path:'',element:<Layout token={token} setUser={setUserData} setToken={setToken}/>,errorElement:<NotFound/>,children:[
      {index:true,element:<RedirectLogin setToken={setToken}/>},
      {path:'home',element:<ProtectedRoute ><Home/></ProtectedRoute>},
      {path:'gameDetails/:id',element:<ProtectedRoute ><GameDetails/></ProtectedRoute>},
      {path:'login',element:<GuestRoute><Login getUserData={getUserData}/></GuestRoute>},
      {path:'register',element:<GuestRoute><Register/></GuestRoute>},
      {path:'games',element:<ProtectedRoute><Games/></ProtectedRoute>,children:[
        {path:'all',element:<All/>},
        {path:'Platforms',element:<PlatForm/>,errorElement:<Loading/>,children:[
          {index:true,element:<Loading/>},
          {path:':platform' ,element:<All/>}]},
        {path:'sort-by',element:<Sort/>,children:[
          {index:true,element:<All/>},
          {path:':sortItem',element:<All/>}]},
          {path:'Categories',element:<Category/>,errorElement:<Loading/>,children:[
          {index:true,element:<Loading/>},
          {path:':category',element:<All/>}
        ]}
      ]}
    ]}
  ])
  return (
    <div className="App">
        <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
