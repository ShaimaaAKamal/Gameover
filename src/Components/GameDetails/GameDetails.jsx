import React, { useState ,useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { useParams } from 'react-router-dom';
import General from '../../js/General';
import Loading from '../Loading/Loading';
export default function GameDetails() {
  const params=useParams();
  const general=new General();
  let [reqKeys,setReqKeys]=useState([])
  let [reqValues,setReqValues]=useState([])
  const [game,setGame]=useState({});
  let [load,setLoad]=useState(true)
  let [displayMin,setDisplayMin]=useState(true)
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(()=>{
    async function fetchData(){
     const {data}=await general.getData('id',params.id,'game')
      if(data) {
       setLoad(false);
       setGame(data);
       if(data['minimum_system_requirements']){
        setReqKeys(Object.keys(data['minimum_system_requirements']));
        setReqValues(Object.values(data['minimum_system_requirements']));
        ((Object.values(data['minimum_system_requirements']).filter(value => value).length === 0))?setDisplayMin(false):setDisplayMin(true)
      }
     }
      }
      fetchData()
 },[])
  return (
   ( <div className='container py-5 my-5'>
       {
        (load)?<Loading/>:<div className="row">
        <div className="col-lg-4">
             <div>
                <img src={game.thumbnail} alt={game.title} className='w-100 rounded' />
                <div className='py-2 d-flex'>
                   <span className="badge bg-secondary detailsPage w-25 me-2">Free</span>
                   <div className='w-75'>
                        <a className='btn btn-info d-flex w-100 justify-content-center align-items-center text-white' href={game['game_url']}>
                         <span>Play Now</span>
                         <i className="fa-solid ms-1 fa-right-from-bracket"></i>
                         </a>
                   </div>
                </div>
             </div>
        </div>
        <div className="col-lg-8">
             <div className='text-white-50'>
                <h2 className='pb-2 fs-1'>{game.title}</h2>
                <h4>About {game.title}</h4>
                <p>{game.description}</p>
                 {(game['minimum_system_requirements'] && displayMin)&& (
                       <>
                           <h4 className='py-3'>Minimum System Requirements</h4>
                           <div>
                             {
                               reqValues.map((reqValue,index)=> ( <div className='d-flex align-items-center' key={index}>
                               <h6 className='my-0 fw-bolder'>{reqKeys[index]}: </h6>
                               <p className='my-0 fs-6'>{reqValue}</p>
                             </div>))
                             }
                           </div>
                       </>
                    )
                 }
                 {
                  (game.screenshots.length !==0) ? 
                  <>  
                  <h4 className='py-4 text-capitalize'>{game.title} Screenshots</h4>
                  <Carousel activeIndex={index} onSelect={handleSelect} controls={false} indicators={false} interval={3000}>
                     {game.screenshots.map((slide, i) => {
                       return (
                         <Carousel.Item key={i}>        
                       <img
                         className="d-block w-100"
                         src={slide.image}
                         alt="slider image"
                       />
                     </Carousel.Item>)})}
                   </Carousel></>:''
                 }
                 <h4 className='py-4'>Additional Information</h4>
                 <div className="row gy-4">
                   <div className="col-lg-4 col-6">
                        <div>
                           <p className='my-0 mb-2 text-muted'>Title</p>
                           <p className='my-0 text-capitalize'>{game.title}</p>
                        </div>
                   </div>
                   <div className="col-lg-4 col-6">
                        <div>
                           <p className='my-0 mb-2 text-muted'>Developer</p>
                           <p className='my-0 text-capitalize'>{game.developer}</p>
                        </div>
                   </div>
                   <div className="col-lg-4 col-6">
                        <div>
                           <p className='my-0 mb-2 text-muted'>Publisher</p>
                           <p className='my-0 text-capitalize'>{game.publisher}</p>
                        </div>
                   </div>
                   <div className="col-lg-4 col-6">
                        <div>
                           <p className='my-0 mb-2 text-muted'>Release Date</p>
                           <p className='my-0 text-capitalize'>{game['release_date']}</p>
                        </div>
                   </div>
                   <div className="col-lg-4 col-6">
                        <div>
                           <p className='my-0 mb-2 text-muted'>Genre</p>
                           <p className='my-0 text-capitalize'>{game.genre}</p>
                        </div>
                   </div>
                   <div className="col-lg-4 col-6">
                        <div>
                           <p className='my-0 mb-2 text-muted'>Platform</p>
                           <p className='my-0 text-capitalize'>
                             <span>{(game.platform === 'Web Browser')?(<><i className="fa-solid fa-window-maximize me-2"></i><span>Browser</span></>):<><i className="fa-brands me-2 fa-windows"></i><span>Windows</span></>}</span>
                           </p>
                        </div>
                   </div>
                 </div>
             </div>
        </div>
     </div>
       }
    </div>)
  )
}
