import React from 'react';
import { Link ,NavLink, useNavigate} from 'react-router-dom';
import logo from '../../images/logo.png'
export default function Navbar({token,setToken}) {
const navigate=useNavigate()

const sortItems=['release-date','popularity','alphabetical','relevance'];
const sortUrl=sortItems.map(item => `/games/sort-by/${item}`);
const cateories=['racing','sports','social','shooter','open-World','zombie','fantasy','action-rpg','action','flight','battle-royale']
const categoryUrl=cateories.map(item => `/games/Categories/${item}`);


  const logout=()=>{
    localStorage.removeItem('token');
    setToken(null);
    navigate('/login');
}

  return (
    <nav className="navbar navbar-expand-lg bgnav py-3 shadow position-fixed w-100">
      <div className="container">
        <Link className="navbar-brand" to="home">
          <img src={logo} alt="logoImage" className='me-1' style={{width:'50px'}} />
          <span className='text-white'>Game Over</span>
        </Link>
       
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fa-solid fa-bars text-white"></i>
        </button>
        <div className="collapse navbar-collapse px-4 px-lg-0" id="navbarSupportedContent">
           {token && <ul className="navbar-nav me-auto ms-lg-4 mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="home">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="games/all">All</NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" to="games/Platforms" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Platforms
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li><NavLink className="dropdown-item" to="games/Platforms/pc">Pc</NavLink></li>
                      <li><NavLink className="dropdown-item" to="games/Platforms/browser">Browser</NavLink></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" to="games/sort-by" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Sort-by
                    </NavLink>
                    <ul className="dropdown-menu">
                    {
                      sortItems.map((item,index)=>  <li key={index}><NavLink  className='text-capitalize dropdown-item' to={sortUrl[index]}>{item}</NavLink></li>)
                    } 
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" to="games/Categories" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Categories
                    </NavLink>
                    <ul className="dropdown-menu">
                    {cateories.map((item,index)=> <li key={index}><NavLink className='text-capitalize dropdown-item' to={categoryUrl[index]}>{item}</NavLink></li>)}
                    </ul>
                  </li>
            </ul>}
           
            { !token && <div className='w-100 d-flex flex-column align-items-center flex-lg-row justify-content-lg-end'> <Link className='text-decoration-none  me-3 fs-6 loginlink' to='login'>Login</Link>
              <Link className='btn btn-outline-info mt-3 mt-lg-0 BtnWidth' to='register'>Join Free</Link></div>}
             {token && <button className='btn btn-outline-info ms-lg-2' onClick={logout}>Logout</button>}
        </div>
      </div>
</nav>
  )
}
