import { createBrowserRouter, RouterProvider , Navigate } from "react-router-dom";
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

function App() {
  const routes=createBrowserRouter([
    {path:'',element:<Layout/>,errorElement:<NotFound/>,children:[
      {index:true,element:<RedirectLogin/>},
      {path:'home',element:<Home/>},
      {path:'login',element:<Login/>},
      {path:'register',element:<Register/>},
      {path:'games',element:<Games/>,children:[
        {path:'all',element:<All/>},
        {path:'Platforms',element:<PlatForm/>,children:[
          {index:true,element:<Loading/>},
          {path:':platform' ,element:<DisplayedGames/>,
          loader: async ({ params }) => {
            return axios.get(
              `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${params.platform}`,
               {headers : {'X-RapidAPI-Key':'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
              'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}}
            );
          }}
        ]},
        {path:'sort-by',element:<Sort/>,children:[
          {index:true,element:<DisplayedGames/>,  
          loader: async ({ params }) => {
            return axios.get(
              `https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=`,
               {headers : {'X-RapidAPI-Key':'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
              'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}}
            );
          }},
          {path:':sortItem',element:<DisplayedGames/>,
           loader: async ({ params }) => {
            return axios.get(
              `https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=${params.sortItem}`,
               {headers : {'X-RapidAPI-Key':'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
              'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}}
            );
          }}
        ]},
        {path:'Categories',element:<Category/>,children:[
          {index:true,element:<Loading/>},
          {path:'racing',element:<DisplayedGames/>},
          {path:'sports',element:<DisplayedGames/>},
          {path:'social',element:<DisplayedGames/>},
          {path:'shooter',element:<DisplayedGames/>},
          {path:'open-world',element:<DisplayedGames/>},
          {path:'zombie',element:<DisplayedGames/>},
          {path:'fantasy',element:<DisplayedGames/>},
          {path:'action-rpg',element:<DisplayedGames/>},
          {path:'action',element:<DisplayedGames/>},
          {path:'flight',element:<DisplayedGames/>},
          {path:'battle-royale',element:<DisplayedGames/>},
        ]
        }
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
