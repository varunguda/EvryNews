import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import reportWebVitals from './reportWebVitals';
import Navbar from './components/layout/navbar';
import Weather from './components/elements/weather';
import { useState } from 'react';


function App(){

  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // check if geolocation is supported by the browser
    if (navigator.geolocation) {
      // get the user's current position
      navigator.geolocation.getCurrentPosition((position) => {
        // set the user's location state
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      }, (error) => {
        console.error(error);
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return(
    <>
    <Navbar userLocation={userLocation}/>
    {/* <div className='container'>
    </div> */}
    <Weather userLocation={userLocation}/>
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
