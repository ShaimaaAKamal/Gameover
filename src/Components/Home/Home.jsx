import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

export default function Home() {
  let [popular,setPopular]=useState([])
  const {data}=useLoaderData();
  console.log(data)
  useEffect(()=>{
    setPopular(data.slice(0,3))
  },[])
  return (
    <div className='container'>
        <div className='homeHeader text-center py-5'>
           <h1 >Find & track the best <span className='text-info'>free-to-play </span>games!</h1>
           <p className='text-muted'>Track what you've played and search for what to play next! Plus get free premium loot!</p>
           <Link className='btn btn-outline-secondary mb-4' to='/games/all'>Browse Games</Link>
        </div>
        <div className='my-5'>
          <h2 className='py-3'><i className="fa-solid fa-robot"></i><span>Personalized Recommendations</span></h2>
          <div className="row gy-3">
           {
            popular.map((item,index)=>  <div className="col-md-4">
            <div className='HomeCard' key={index}>
               <img src={item.thumbnail} alt={item.title} className='w-100' />
               <div className='d-flex align-items-center justify-content-between p-3'>
                <h5 className='text-capitalize'>{item.title}</h5>
                <h5><span className="badge bg-info">New</span></h5>
               </div>
            </div>
          </div>)
           }
          </div>
        </div>

    </div>
  )
}
