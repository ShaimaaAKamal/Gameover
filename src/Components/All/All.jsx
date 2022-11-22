import React,{ useEffect, useState} from 'react';
import { useLoaderData,useNavigate } from 'react-router-dom';
import DisplayedGames from '../DisplayGames/DisplayedGames';



  
export default function All() {
  const navigate=useNavigate()
  const [games,setGames]=useState([])
  const {data}=useLoaderData();
  useEffect(()=>{
    setGames(data.slice(0,19))
  },[])
  const gameDetails=(gameId)=>{
    navigate(`/gameDetails/${gameId}`)
  }
  return (
         <DisplayedGames games={games} gameDetails={gameDetails}/>
  )
}
