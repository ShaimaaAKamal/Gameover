import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PopularCard from '../PopularCard/PopularCard';
import General from '../../js/General';
import Loading from '../Loading/Loading';
export default function Home() {
  const general=new General();
  let [load,setLoad]=useState(true)
  const navigate=useNavigate();
  let [popular,setPopular]=useState([])
  useEffect(()=>{
     async function fetchData(){
      const {data}=await general.getData('sort-by','popularity')
       if(data) {
        setLoad(false);
        setPopular(data.slice(0,3));
      }
       }
       const collapseMenu=document.querySelector('.navbar-collapse');
       collapseMenu.classList.remove('show');
       fetchData()
  },[])
  const gameDetails=(gameId)=>{
    navigate(`/gameDetails/${gameId}`)
  }
  return (
    <div className='container '>
      {(load)?<Loading/>:<>
      <div className='homeHeader text-center py-5'>
           <h1 className='pt-5' >Find & track the best <span className='text-info'>free-to-play </span>games!</h1>
           <p className='text-muted'>Track what you've played and search for what to play next! Plus get free premium loot!</p>
           <Link className='btn btn-outline-secondary mb-4' to='/games/all'>Browse Games</Link>
        </div>
        <div className='mb-5 ps-4 ps-md-0'>
          <h3 className='py-3'><i className="fa-solid fa-robot"></i><span>Personalized Recommendations</span></h3>
          <div className="row gy-4 pe-4 pe-md-0">
           {
            popular.map((game,index)=>  <div className="col-md-4" key={index} >
              <PopularCard game={game} gameDetails={gameDetails}/>
          </div>)
           }
          </div>
        </div>
      </>}

    </div>
  )
}
