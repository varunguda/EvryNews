import React, { useState, useEffect } from 'react';

import Weather from '../elements/weather';
import './styles/navbar.css';
import linkedIn from './icons/linkedin.svg';
import instagram from './icons/instagram.svg';
import youtube from './icons/movie.svg';
import facebook from './icons/facebook-logo-2019.svg';
import twitter from './icons/twitter.svg';

export default function Navbar({ userLocation}) {

    // const [userLocation, setUserLocation] = useState("");

    // useEffect(() => {
    // // check if geolocation is supported by the browser
    // if (navigator.geolocation) {
    //   // get the user's current position
    //     navigator.geolocation.getCurrentPosition((position) => {
    //     // set the user's location state
    //     setUserLocation({
    //       latitude: position.coords.latitude,
    //       longitude: position.coords.longitude
    //     });
    //     }, (error) => {
    //     console.error(error);
    //     });
    // } else {
    //     console.error('Geolocation is not supported by this browser.');
    // }
    // }, []);


    let [currentDate, setCurrentDate] = useState(new Date().toLocaleString());

    setInterval(()=>{
        setCurrentDate(new Date().toLocaleString());
    }, 1000);

    let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const getMonth = (num) =>{
        return months[num-1];
    }

    let [ isActive, setIsActive ] = useState(false); 
    let [ isChecked, setIsChecked ] = useState(false);

    const handleCheckboxChange = () =>{
        if(isChecked){
            setIsChecked(false);
            setIsActive(false);
        }
        else{
            setIsChecked(true);
            setIsActive(true);
        }
    }


  return (
    <>
    {/* <div>
      {userLocation ? (
        <p>Your location: {userLocation.latitude}, {userLocation.longitude}</p>
      ) : (
        <p>Fetching your location...</p>
      )}
      {console.log(userLocation)}
    </div> */}
    <nav className='navbar-top'>
        <div className='contact-nav'>
            <div className="top-elem1 date-time">
                {getMonth(currentDate.slice(3,4)) + ' '+ currentDate.slice(0,2) + ', '+ currentDate.slice(5,9) + ' | '+ currentDate.slice(11)}
            </div>
            {/* {(userLocation)?console.log(userLocation):""} */}

            {/* <Weather userLocation={userLocation}/> */}

            <div className="top-elem2 social-media">
                <div><a href='https://www.linkedin.com/in/varun-sai-guda-ba2544244' target='/blank'><img className='icon active-icon' srcSet={linkedIn} alt="linkedIn" title='LinkedIn'/></a></div>
                <div><img srcSet={instagram} alt="instagram" title='Instagram' className='icon'/></div>
                <div><img srcSet={facebook} alt="facebook" title='Facebook' className='icon'/></div>
                <div><img srcSet={twitter} alt="twitter" title='Twitter' className='icon'/></div>
                <div><img srcSet={youtube} alt="youtube" title='Youtube' className='icon'/></div>
            </div>
        </div>
        <div className='navigator-head main-head'>
            <span style={{color: "red"}}>E</span>VRY<span style={{color: "red"}}>N</span>EWS
        </div>
    </nav>
    <nav className="navbar">
        <div className="nav-navigator">
            <div className="navigator-head">
                <a href='/'>EN</a>
            </div>
            <div className="nav-elem"><a href='/india'>India</a></div>
            <div className="nav-elem"><a href='/world'>World</a></div>
            <div className="nav-elem"><a href='/business'>Business</a></div>
            <div className="nav-elem"><a href='/tech'>Tech</a></div>
            <div className="nav-elem"><a href='/sports'>Sports</a></div>
            <div className="nav-elem"><a href='/cricket'>Cricket</a></div>
            <div className="nav-elem"><a href='/entertainment'>Entertainment</a></div>
            <div className="nav-elem"><a href='/education'>Education</a></div>
        <div className='dropdown'>
            <input type='checkbox' id='input-checkbox' checked={isChecked} onChange={handleCheckboxChange}/>
            <label htmlFor='input-checkbox'  className='dropdown-button'>
                <span></span>
            </label>
            <div className={`dropdown-content-container ${(isActive)? "hide":""}`}>
            <div className='dropdown-content'>
                <div className="dropdown-elem"><a href='/india'>India</a></div>
                <div className="dropdown-elem"><a href='/world'>World</a></div>
                <div className="dropdown-elem"><a href='/business'>Business</a></div>
                <div className="dropdown-elem"><a href='/tech'>Tech</a></div>
                <div className="dropdown-elem"><a href='/sports'>Sports</a></div>
                <div className="dropdown-elem"><a href='/cricket'>Cricket</a></div>
                <div className="dropdown-elem"><a href='/entertainment'>Entertainment</a></div>
                <div className="dropdown-elem"><a href='/education'>Education</a></div>
            </div>
            </div>
        </div>
        </div>
    </nav>
    </>
  )
}
