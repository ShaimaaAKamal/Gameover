import React, { useState } from 'react'
import { useLoaderData, useLocation } from 'react-router-dom'



export default function DisplayedGames() {
  const response =useLoaderData();
  const [games,setGames]=useState(response.data) 
  return (
    <div>DisplayedGames</div>
  )
}
