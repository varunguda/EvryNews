import React, { useState, useEffect } from 'react';

function Weather() {

  //https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
  // 8eeff1aa11ee9c730b5c078f6e52d075

  const [ userLocation, setUserLocation ] = useState(null);

  useEffect(()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(pos=>{
        setUserLocation({
          lat: pos.coords.latitude,
          long: pos.coords.longitude
        })
      })
    }
  })

  const [ city, setCity] = useState(null);

  // useEffect(() => {
    // fetch the city name based on the user's location
    if (userLocation) {
      const apiKey = '8eeff1aa11ee9c730b5c078f6e52d075';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${userLocation.lat.slice(0,3)}&lon=${userLocation.lon.slice(0,3)}&appid=${apiKey}`;

      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          // if (data.results.length > 0) {
            // const cityName = data.results[0].components.city;
            // setCity(cityName);
            console.log(data);
          // } else {
          //   console.log('No results found.');
          // }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [userLocation]);

  return (
    <div>
      {userLocation ? (
        <p>Your location: {userLocation.lat}, {userLocation.long}</p>
      ) : (
        <p>Fetching your location...</p>
      )}
    </div>  
  );
}

export default Weather;
