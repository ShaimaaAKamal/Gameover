import React,{ useEffect, useRef, useState} from 'react';
import {useLocation, useNavigate, useParams } from 'react-router-dom';
import DisplayedGames from '../DisplayGames/DisplayedGames';
import Loading from '../Loading/Loading'
import General from '../../js/General';


  
export default function All() {
  const params=useParams();
  const location=useLocation()
  const general=new General();
  let map=new Map(Object.entries(params))
  let index=useRef(24);
  let [load,setLoad]=useState(true)
  let [more,setMore]=useState(true)
  const navigate=useNavigate()
  let [games,setGames]=useState([])
  let [allData,setAllData]=useState([])
  const fetchData=async()=>{
    const {data}=await getApi()
     if(data) {
      setLoad(false);
      setAllData(data);
      if(index.current >=data.length) setMore(false)
      setGames(data.slice(0,index.current))
    }
     }
  useEffect(()=>{
       fetchData()
       const drops=document.querySelectorAll('.dropdown-menu');
       drops.forEach(drop=>
        drop.classList.remove('show')
       )
  },[])
  useEffect(()=>{
    fetchData()
  },[params])
  const gameDetails=(gameId)=>{
    navigate(`/gameDetails/${gameId}`)
  }
  const moreGames=()=>{ 
    index.current=index.current+24;
    if( index.current <= allData.length)
     setGames(allData.slice(0,index.current))
    else
    { setGames(allData.slice(0,allData.length));
      setMore(false);
    }
  }


  const getApi=()=>{
    if(map.size === 0) return  general.getData('id','all','all');
    else if(map.has('platform')) return  general.getData('platform',params.platform)
    else if(map.has('sortItem')) return general.getData('sort-by',params.sortItem)
    else if(map.has('category')) return  general.getData('category',params.category)
  }

  return (
         <>
          {
            (load)?<Loading/>:<DisplayedGames games={games} gameDetails={gameDetails} moreGames={moreGames} more={more}/>
          }
          </>
  )
}
