import React, { useState } from 'react';
import './styles/navbar2.css';


export default function NavbarSecondary() {
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
            <div className={`dropdown-content-container ${(isActive)? "show":""}`}>
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
  )
}
