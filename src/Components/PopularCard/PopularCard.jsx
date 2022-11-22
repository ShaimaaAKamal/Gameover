import React from 'react'

export default function PopularCard({game,gameDetails}) {
  return (
    <div className='HomeCard' onClick={()=>gameDetails(game.id)}>
    <img src={game.thumbnail} alt={game.title} className='w-100' />
    <div className='d-flex align-games-center justify-content-between p-3'>
     <h5 className='text-capitalize'>{game.title}</h5>
     <h5><span className="badge bg-info">Free</span></h5>
    </div>
 </div>
  )
}
