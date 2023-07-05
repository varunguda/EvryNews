import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Dropdown from './nav-dropdown';

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
                <Link to='/'>EN</Link>
            </div>
            <div className="nav-elem">
                <Link to='india'>India</Link>
                <Dropdown />
            </div>
            <div className="nav-elem">
                <Link to='world'>World</Link>
                <Dropdown />
            </div>
            <div className="nav-elem">
                <Link to='business'>Business</Link>
                <Dropdown />
            </div>
            <div className="nav-elem">
                <Link to='tech'>Tech</Link>
                <Dropdown />
            </div>
            <div className="nav-elem">
                <Link to='sports'>Sports</Link>
                <Dropdown />
            </div>
            <div className="nav-elem">
                <Link to='cricket'>Cricket</Link>
                <Dropdown />
            </div>
            <div className="nav-elem">
                <Link to='entertainment'>Entertainment</Link>
                <Dropdown />
            </div>
            <div className="nav-elem">
                <Link to='education'>Education</Link>
                <Dropdown />
            </div>
            <div className="nav-elem">
                <Link to='auto'>Auto</Link>
                <Dropdown />
            </div>
            <div className="nav-elem">
                <Link to='lifestyle'>Life & Style</Link>
                <Dropdown />
            </div>
            <div className="nav-elem">
                <Link to='politics'>Politics</Link>
                <Dropdown />
            </div>
        <div className='dropdown'>
            <input type='checkbox' id='input-checkbox' checked={isChecked} onChange={handleCheckboxChange}/>
            <label htmlFor='input-checkbox'  className='dropdown-button'>
                <span></span>
            </label>
            <div className={`dropdown-content-container ${(isActive)? "show":""}`}>
            <div className='dropdown-content'>
                <div className="dropdown-elem"><Link to='india'>India</Link></div>
                <div className="dropdown-elem"><Link to='world'>World</Link></div>
                <div className="dropdown-elem"><Link to='business'>Business</Link></div>
                <div className="dropdown-elem"><Link to='tech'>Tech</Link></div>
                <div className="dropdown-elem"><Link to='sports'>Sports</Link></div>
                <div className="dropdown-elem"><Link to='cricket'>Cricket</Link></div>
                <div className="dropdown-elem"><Link to='entertainment'>Entertainment</Link></div>
                <div className="dropdown-elem"><Link to='education'>Education</Link></div>
                <div className="dropdown-elem"><Link to='auto'>Auto</Link></div>
                <div className="dropdown-elem"><Link to='lifestyle'>Life & Style</Link></div>
                <div className="dropdown-elem"><Link to='politics'>Politics</Link></div>
            </div>
            </div>
        </div>
        </div>
      </nav>
  )
}
