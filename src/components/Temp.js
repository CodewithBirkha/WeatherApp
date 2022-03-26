import React, { useEffect, useState } from 'react'
import "./style.css"
import weather from "./images/weather.jpg";
import sunset from "./images/sunset.png";
import huminity from "./images/huminity.jpg"
import preasure from "./images/preasure.png"
import wind from "./images/wind.png"
import WeatherCart from './WeatherCart';


const Temp = () => {

  const [searchvalue, setSearchValue]=useState("Kathmandu");
  const [tempInfo,setTempInfo]=useState({});
  const getWeatherInfo= async ()=>{
    try {
      let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&units=metric&appid=b8a17ef84c3a1cd63718743e7173fb1d`
     // let url=`api.openweathermap.org/data/2.5/weather?q=${searchvalue}&appid=b8a17ef84c3a1cd63718743e7173fb1d`;
      const res = await fetch(url);
      const data = await res.json()
      console.log(data);
      const {temp,humidity,pressure}=data.main;
      const {main: weathermood}=data.weather[0];
      const {name} =data;
      const {speed}=data.wind;
      const {country, sunset}=data.sys;
      const myNewWeatherInfo={
        temp,humidity,pressure,weathermood,name,speed,country, sunset
      };
      setTempInfo(myNewWeatherInfo);

      console.log(temp);
      
    } catch (error) {
      console.log(error);
    }
    

  }
  useEffect=(()=>{
      getWeatherInfo()

  },[])

  
  return (
      <>
    <div className="wrap">
        <div className="search">
             <input type="text" 
             className='searchtem'
             id='search'
             placeholder='Enter city Name'
             autoFocus
             value={searchvalue}
             onChange={(e)=>setSearchValue(e.target.value)}

             />    
             <button className='btn-search' type='button' onClick={getWeatherInfo}>Search</button>
        </div>    
        <WeatherCart tempInfo={tempInfo}/>
    </div>
  
    </>

   
  )
}

export default Temp