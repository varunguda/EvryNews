import React, { useState, useEffect } from 'react';
import './styles/weather.css';
import LocationIcon from './icons/location-marker-svgrepo-com.svg';
// import WeatherIcon from './icons/weather-svgrepo-com (1).svg';

function Weather() {

  const convertCelcius = (num) => {
    return Math.round(num - 273.15);
  }

  const [ usersTemp , setUsersTemp ] = useState(null);
  const [ usersLocation, setUsersLocation ] = useState(null);
  const [ weatherIconId, setWeatherIconId ] = useState(null);

  useEffect(()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(pos=>{
        const apiKey = '8eeff1aa11ee9c730b5c078f6e52d075';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${apiKey}`;
  
        fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
            setUsersTemp(convertCelcius(data.main.temp));
            setUsersLocation(data.name);
            setWeatherIconId(data.weather[0].icon);
          })
          .catch(error => {
            console.log(error);
          });
        });
      }
  }, [])

  /* Degree: ° */


  return (
      <div className="area-weather">
        <span className="area">
        <img className='location-icon' src={LocationIcon} alt='location'/>
          {usersLocation}
        </span>
        <span className="weather">
        <img className='weather-icon' src={`https://openweathermap.org/img/wn/${weatherIconId}@2x.png`} alt='weather'/>
          {usersTemp}°C
        </span>
      </div>  
  );
}

export default Weather;
