import React, { useEffect, useState } from 'react'
export default function GameCard({game,gameDetails}) {
  let [width,setWidth]=useState(window.innerWidth);
  const getTitle=(wid)=>{
    return ((game['title']).length >(Math.round(wid)))?
    `${game['title'].split('').slice(0,(Math.round(wid))).join('')}...`:
    game['title'];
  }
  let displayTitle=(width)=>{
    
    if(width<768)      return game['title']
    else if(width>768 && width <992) return getTitle(width/2)
    else if( width > 992 && width <1200) return getTitle(16)
    else if (width >1200) return getTitle(13) 
   
  }

    window.addEventListener('resize',()=>{
      setWidth(window.innerWidth);
    })
 
  return (
            <div className='HomeCard rounded-2' onClick={()=>gameDetails(game.id)} title={(game.platform === 'Web Browser')?'Available on Browser':'Available on Windows'}>
               <img src={game.thumbnail} alt={game.title} className='w-100' />
               <div className='p-3 pb-2'>
                  <div className='d-flex align-games-center justify-content-between'>
                    <h5 className='text-capitalize cardTitle'>{displayTitle(width)}</h5>
                    <h5><span className="badge bg-info">Free</span></h5>
                  </div>
                  <p className='text-muted small my-0'>
                    {`${game['short_description'].split('').slice(0,25).join('')}....`}
                  </p>
                  <div className='d-flex align-items-center justify-content-between pt-2'>
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
