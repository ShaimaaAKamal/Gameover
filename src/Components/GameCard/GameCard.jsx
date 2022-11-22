import React from 'react'

export default function GameCard({game,gameDetails}) {
  return (
            <div className='HomeCard' onClick={()=>gameDetails(game.id)}>
               <img src={game.thumbnail} alt={game.title} className='w-100' />
               <div className='p-3'>
                  <div className='d-flex align-games-center justify-content-between'>
                    <h5 className='text-capitalize'>{((game['title']).length >12)?
                    `${game['title'].split('').slice(0,12).join('')}....`:game['title']}</h5>
                    <h5><span className="badge bg-info">Free</span></h5>
                  </div>
                  <p className='text-muted small my-0'>
                    {`${game['short_description'].split('').slice(0,25).join('')}....`}
                  </p>
                  <div className='d-flex align-games-center justify-content-between pt-3'>
                      <i className="fa-solid fa-square-plus"></i>
                      <div className=' small d-flex align-games-center'>
                           <span className='me-2 category'>{game.genre}</span>
                           <span className='platformIcon'>{(game.platform === 'Web Browser')?<i className="fa-solid fa-window-maximize"></i>:<i className="fa-brands fa-windows"></i>}</span>
                      </div>
                  </div>
               </div>
            </div>
  )
}
