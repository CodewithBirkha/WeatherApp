import React from 'react'
import weather from "./images/weather.jpg";
import sunset from "./images/sunset.png"

import huminity from "./images/huminity.jpg"
import preasure from "./images/preasure.png"
import wind from "./images/wind.png"
import "./style.css";

const WeatherCart = ({tempInfo}) => {
    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
         sunset
    }=tempInfo;
    let sec=sunset;
    let date=new Date(sec * 1000);
    let timeStr=`${date.getHours()}:${date.getMinutes()}`
  return (
   <>
  
  <div className="main">
        <div className="weather-icon">
           <img src={weather} alt="weather" className='img-weather' />
        </div>    
    </div>

    <div className="weather-info">
     <div className="tempreture">
        <span>{temp} <sup>o</sup> C</span> 
    </div>  
    <div className="description">
         <div className="weather-condition">{weathermood}</div>
         <div className="place">{country}, {name}</div>
    </div>  
    
    </div>
    <div className="date">
      <h2 className='date-sec'>{new Date().toLocaleString()}</h2>
    </div>
        
    {/* 4 column s for footer */}


    <div className="extra-info">
     <div className="temp-info">
       <p>
         <img src={weather} alt="sunset img" className='sunset' />
       </p>
       <p className='info-left'>{timeStr} PM<br /> Sunset</p>
       
      </div>  
      <div className="temp-info">
       <p>
         <img src={huminity} alt="sunset img" className='sunset' />
       </p>
       <p className='info-left'>{humidity} <br />Humidity </p>
       
      </div> 
      <div className="temp-info">
       <p>
         <img src={wind} alt="sunset img" className='sunset' />
       </p>
       <p className='info-left'>{speed} <br />Speed </p>
       
      </div>  
      <div className="temp-info">
       <p>
         <img src={preasure} alt="sunset img" className='sunset' />
       </p>
       <p className='info-left'>{pressure} Pascal Preasure </p>
       
      </div>  
      </div>
   </>
  )
}

export default WeatherCart