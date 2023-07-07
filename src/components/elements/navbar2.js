import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

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

  const location = useLocation();

  const pathIsActive = (path) =>{
    return location.pathname.includes(path);
  }


  return (
      <nav className="navbar">
        <div className="nav-navigator">
            <div className="navigator-head">
                <Link to='/'>EN</Link>
            </div>
            <div className="nav-elem">
                <Link to='/india' className={(pathIsActive('/india'))?"active-nav-elem":''}>India</Link>
                <Dropdown />
            </div>
            <div className="nav-elem">
                <Link to='/world' className={(pathIsActive('/world'))?"active-nav-elem":''}>World</Link>
                <Dropdown />
            </div>
            <div className="nav-elem">
                <Link to='/business' className={(pathIsActive('/business'))?"active-nav-elem":''}>Business</Link>
                <Dropdown />
            </div>
            <div className="nav-elem">
                <Link to='/tech' className={(pathIsActive('/tech'))?"active-nav-elem":''}>Tech</Link>
                <Dropdown />
            </div>
            <div className="nav-elem">
                <Link to='/sports' className={(pathIsActive('/sports'))?"active-nav-elem":''}>Sports</Link>
                <Dropdown />
            </div>
            <div className="nav-elem">
                <Link to='/cricket' className={(pathIsActive('/cricket'))?"active-nav-elem":''}>Cricket</Link>
                <Dropdown />
            </div>
            <div className="nav-elem">
                <Link to='/entertainment' className={(pathIsActive('/entertainment'))?"active-nav-elem":''}>Entertainment</Link>
                <Dropdown />
            </div>
            <div className="nav-elem">
                <Link to='/education' className={(pathIsActive('/education'))?"active-nav-elem":''}>Education</Link>
                <Dropdown />
            </div>
            <div className="nav-elem">
                <Link to='/auto' className={(pathIsActive('/auto'))?"active-nav-elem":''}>Auto</Link>
                <Dropdown />
            </div>
            <div className="nav-elem">
                <Link to='/lifestyle' className={(pathIsActive('/lifestyle'))?"active-nav-elem":''}>Life & Style</Link>
                <Dropdown />
            </div>
            <div className="nav-elem">
                <Link to='/politics' className={(pathIsActive('/politics'))?"active-nav-elem":''}>Politics</Link>
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
