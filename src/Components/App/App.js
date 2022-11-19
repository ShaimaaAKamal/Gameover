import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from '../Layout/Layout';
import NotFound from '../NotFound/NotFound';
import Login from '../Login/Login'
import Register from '../Register/Register'
import Home from '../Home/Home';
import All from '../All/All'
import Games from '../Games/Games'

function App() {
  const routes=createBrowserRouter([
    {path:'',element:<Layout/>,errorElement:<NotFound/>,children:[
      {path:'home',element:<Home/>},
      {path:'login',element:<Login/>},
      {path:'register',element:<Register/>},
      {path:'games',element:<Games/>,children:[
        {path:'all',element:<All/>}
      ]}
    ]}
  ])
  return (
    <div className="App">
        <h1>app</h1>
        <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
