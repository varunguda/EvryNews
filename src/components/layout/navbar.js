import React from 'react';

import Time from '../elements/time';
import Weather from '../elements/weather';
import linkedIn from './icons/linkedin.svg';
import instagram from './icons/instagram.svg';
import youtube from './icons/movie.svg';
import facebook from './icons/facebook-logo-2019.svg';
import twitter from './icons/twitter.svg';

import './styles/navbar.css';

export default function Navbar() {

  return (
    <>
    <nav className='navbar-top'>
        <div className='contact-nav'>
            <div className="top-elem1 date-time">
                <Time />
            </div>
            <div className="top-elem2">
                {/* <Weather /> */}
            </div>

            <div className="top-elem3 social-media">
                <div><a href='https://www.linkedin.com/in/varun-sai-guda-ba2544244' target='/blank'><img className='icon active-icon' src={linkedIn} alt="linkedIn" title='LinkedIn'/></a></div>
                <div><img src={instagram} alt="instagram" title='Instagram' className='icon'/></div>
                <div><img src={facebook} alt="facebook" title='Facebook' className='icon'/></div>
                <div><img src={twitter} alt="twitter" title='Twitter' className='icon'/></div>
                <div><img src={youtube} alt="youtube" title='Youtube' className='icon'/></div>
            </div>
        </div>
        <div className='navigator-head main-head'>
            <span style={{color: "red"}}>E</span>VRY<span style={{color: "red"}}>N</span>EWS
        </div>
    </nav>
    </>
  )
}
