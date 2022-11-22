import React,{ useEffect, useRef, useState} from 'react';
import { useLoaderData,useNavigate } from 'react-router-dom';
import DisplayedGames from '../DisplayGames/DisplayedGames';



  
export default function All() {
  let index=useRef(24)
  const [more,setMore]=useState(true)
  const navigate=useNavigate()
  const [games,setGames]=useState([])
  const {data}=useLoaderData();
  useEffect(()=>{
    if(index.current >=data.length) setMore(false)
    setGames(data.slice(0,index.current))
  },[])
  useEffect(()=>{
    if(index.current >= data.length) setMore(false)
    setGames(data.slice(0,index.current))
  },[data])
  const gameDetails=(gameId)=>{
    navigate(`/gameDetails/${gameId}`)
  }
  const moreGames=()=>{ 
    index.current=index.current+24;
    if( index.current <= data.length)
     setGames(data.slice(0,index.current))
    else
    { setGames(data.slice(0,data.length));
      setMore(false);
    }
  }

  return (
         <>
            <DisplayedGames games={games} gameDetails={gameDetails} moreGames={moreGames} more={more}/>
         </>
  )
}
