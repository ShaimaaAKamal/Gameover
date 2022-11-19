import { createBrowserRouter, RouterProvider , Navigate } from "react-router-dom";
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

function App() {
  const routes=createBrowserRouter([
    {path:'',element:<Layout/>,errorElement:<NotFound/>,children:[
      {path:'home',element:<Home/>},
      {path:'login',element:<Login/>},
      {path:'register',element:<Register/>},
      {path:'games',element:<Games/>,children:[
        {path:'all',element:<All/>},
        {path:'Platforms',element:<PlatForm/>,children:[
          {index:true,element:<Loading/>},
          {path:'pc',element:<DisplayedGames/>},
          {path:'browser',element:<DisplayedGames/>}
        ]},
        {path:'sort-by',element:<Sort/>,children:[
          {path:'release-date',element:<DisplayedGames/>},
          {path:'popularity',element:<DisplayedGames/>},
          {path:'relevance',element:<DisplayedGames/>},
          {path:'alphabetical',element:<DisplayedGames/>}
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
