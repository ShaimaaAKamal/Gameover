import React, { useState } from 'react'
import GameCard from '../GameCard/GameCard'



export default function DisplayedGames({games,gameDetails}) {
  return (
    <div>
       <div className='container py-5 my-5'>
       <div className="row gy-4">
       {
            games.map((game,index)=>  <div className="col-md-6 col-lg-3" key={index} >
                                          <GameCard game={game} gameDetails={gameDetails}/>
                                      </div>)
           }
       </div>
    </div>
    </div>
  )
}
