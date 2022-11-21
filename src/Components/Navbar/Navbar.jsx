import React from 'react';
import { Link ,NavLink, useNavigate} from 'react-router-dom';
import logo from '../../images/logo.png'
export default function Navbar({userData,setUser}) {
const navigate=useNavigate()

  const logout=()=>{
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
}

  return (
    <nav className="navbar navbar-expand-lg bgnav py-3 shadow">
      <div className="container">
        <Link className="navbar-brand" to="home">
          <img src={logo} alt="logoImage" className='me-1' style={{width:'50px'}} />
          <span className='text-white'>Game Over</span>
        </Link>
       
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fa-solid fa-bars text-white"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
           {userData && <ul className="navbar-nav me-auto ms-lg-4 mb-2 mb-lg-0">
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
                      <li><NavLink className="dropdown-item" to="games/sort-by/release-date">Release-Date</NavLink></li>
                      <li><NavLink className="dropdown-item" to="games/sort-by/popularity">Popularity</NavLink></li>
                      <li><NavLink className="dropdown-item" to="games/sort-by/alphabetical">Alphabetical</NavLink></li>
                      <li><NavLink className="dropdown-item" to="games/sort-by/relevance">Relevance</NavLink></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" to="games/Categories" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Categories
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li><NavLink className="dropdown-item" to="games/Categories/racing">Racing</NavLink></li>
                      <li><NavLink className="dropdown-item" to="games/Categories/sports">Sports</NavLink></li>
                      <li><NavLink className="dropdown-item" to="games/Categories/social">Social</NavLink></li>
                      <li><NavLink className="dropdown-item" to="games/Categories/shooter">Shooter</NavLink></li>
                      <li><NavLink className="dropdown-item" to="games/Categories/open-world">Open-World</NavLink></li>
                      <li><NavLink className="dropdown-item" to="games/Categories/zombie">Zombie</NavLink></li>
                      <li><NavLink className="dropdown-item" to="games/Categories/fantasy">Fantasy</NavLink></li>
                      <li><NavLink className="dropdown-item" to="games/Categories/action-rpg">Action-rpg</NavLink></li>
                      <li><NavLink className="dropdown-item" to="games/Categories/action">Action</NavLink></li>
                      <li><NavLink className="dropdown-item" to="games/Categories/flight">Flight</NavLink></li>
                      <li><NavLink className="dropdown-item" to="games/Categories/battle-royale">Battle-royale</NavLink></li>

                    </ul>
                  </li>
            </ul>}
           
            { !userData && <div className='w-100 d-flex flex-column align-items-center flex-lg-row justify-content-lg-end'> <Link className='text-decoration-none  me-3 fs-6 loginlink' to='login'>Login</Link>
              <Link className='btn btn-outline-info mt-3 mt-lg-0 BtnWidth' to='register'>Join Free</Link></div>}
             {userData && <button className='btn btn-outline-info ms-2' onClick={logout}>Logout</button>}
        </div>
      </div>
</nav>
  )
}
