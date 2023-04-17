import React, { useState, useEffect } from 'react';

import Time from '../elements/time';
import Weather from '../elements/weather';
import './styles/navbar.css';
import linkedIn from './icons/linkedin.svg';
import instagram from './icons/instagram.svg';
import youtube from './icons/movie.svg';
import facebook from './icons/facebook-logo-2019.svg';
import twitter from './icons/twitter.svg';

export default function Navbar() {

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
    <nav className='navbar-top'>
        <div className='contact-nav'>
            <div className="top-elem1 date-time">
                <Time />
            </div>
            <div className="top-elem2">
                <Weather />
            </div>

            <div className="top-elem3 social-media">
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
