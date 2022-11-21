import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
        <div className='homeHeader text-center py-5'>
           <h1 >Find & track the best <span className='text-info'>free-to-play </span>games!</h1>
           <p className='text-muted'>Track what you've played and search for what to play next! Plus get free premium loot!</p>
           <Link className='btn btn-outline-secondary mb-4' to='/games/all'>Browse Games</Link>
        </div>
    </>
  )
}
