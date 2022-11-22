import axios from "axios";
export default class General{
     getMessage=(validationErrorsList,key)=>{
        const  ErrorElement=validationErrorsList.find(error => error.context.label === key);
        let message=(ErrorElement)?ErrorElement.message:'';
        return message;
      }

       getData=(key,value,type='games')=>{
        let url=(type === 'all')?`https://free-to-play-games-database.p.rapidapi.com/api/games`
        :`https://free-to-play-games-database.p.rapidapi.com/api/${type}?${key}=${value}`;
        return axios.get(
          `${url}`,
           {headers : {'X-RapidAPI-Key':'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}}
        );
      }
    
}