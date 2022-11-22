import React, { useState } from 'react'
import GameCard from '../GameCard/GameCard'



export default function DisplayedGames({games,gameDetails,moreGames,more}) {
  return (
    <div>
       <div className='container py-5 mt-5'>
       <div className="row gy-4">
          {
            games.map((game,index)=>  <div className="col-md-6 col-lg-3" key={index} >
                                          <GameCard game={game} gameDetails={gameDetails}/>
                                      </div>)
           }
       </div>
       {
       more && <div className='d-flex justify-content-center pt-5'>
        <button className='btn btn-outline-secondary d-flex align-items-center' onClick={moreGames}>
            <span>More Games</span>
            <i className="ms-1 fa-solid fa-chevron-right"></i>
       </button>
       </div>}
    </div>
    </div>
  )
}
