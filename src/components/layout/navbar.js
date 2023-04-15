import React from 'react';

import './navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
        <div className="nav-navigator">
            <div className="navigator-head">..</div>
            <div className="nav-elem">India</div>
            <div className="nav-elem">World</div>
            <div className="nav-elem">Business</div>
            <div className="nav-elem">Tech</div>
            <div className="nav-elem">Sports</div>
            <div className="nav-elem">Cricket</div>
            <div className="nav-elem">Entertainment</div>
            <div className="nav-elem">Education</div>
        <div className='dropdown'>
            <input type='checkbox' id='input-checkbox'/>
            <label htmlFor='input-checkbox'  className='dropdown-button'>
                <span></span>
            </label>
            <div className='dropdown-content'>
                <div className="dropdown-elem">India</div>
                <div className="dropdown-elem">World</div>
                <div className="dropdown-elem">Business</div>
                <div className="dropdown-elem">Tech</div>
                <div className="dropdown-elem">Sports</div>
                <div className="dropdown-elem">Cricket</div>
                <div className="dropdown-elem">Entertainment</div>
                <div className="dropdown-elem">Education</div>
            </div>
        </div>
        </div>

    <div className="nav-line" />
    </nav>
  )
}
