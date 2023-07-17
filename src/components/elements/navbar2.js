import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Dropdown from './nav-dropdown';

export default function NavbarSecondary({ indiaArticles, movieArticles, worldArticles, cricketArticles, techArticles, sportsArticles, businessArticles, entertainmentArticles, educationArticles, autoArticles, healthArticles }) {
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
                {
                    (indiaArticles && indiaArticles.length > 0)?(
                        <Dropdown articles={indiaArticles}/>
                    ):(
                        <Dropdown />
                    )
                }
            </div>
            <div className="nav-elem">
                <Link to='/world' className={(pathIsActive('/world'))?"active-nav-elem":''}>World</Link>
                {
                    (worldArticles && worldArticles.length > 0)?(
                        <Dropdown articles={worldArticles}/>
                    ):(
                        <Dropdown />
                    )
                }
            </div>
            <div className="nav-elem">
                <Link to='/business' className={(pathIsActive('/business'))?"active-nav-elem":''}>Business</Link>
                {
                    (businessArticles && businessArticles.length>0)?(
                        <Dropdown articles={businessArticles}/>
                    ):(
                        <Dropdown />
                    )
                }
            </div>
            <div className="nav-elem">
                <Link to='/tech' className={(pathIsActive('/tech'))?"active-nav-elem":''}>Tech</Link>
                {
                    (techArticles && techArticles.length>0)?(
                        <Dropdown articles={techArticles}/>
                    ):(
                        <Dropdown />
                    )
                }
            </div>
            <div className="nav-elem">
                <Link to='/sports' className={(pathIsActive('/sports'))?"active-nav-elem":''}>Sports</Link>
                {
                    (sportsArticles && sportsArticles.length > 0)?(
                        <Dropdown articles={sportsArticles}/>
                    ):(
                        <Dropdown />
                    )
                }
            </div>
            
            <div className="nav-elem">
                <Link to='/cricket' className={(pathIsActive('/cricket'))?"active-nav-elem":''}>Cricket</Link>
                {
                    (cricketArticles && cricketArticles.length > 0)?(
                        <Dropdown articles={cricketArticles}/>
                    ):(
                        <Dropdown />
                    )
                }
            </div>
            
            <div className="nav-elem">
                <Link to='/movie' className={(pathIsActive('/movie'))?"active-nav-elem":''}>Movie</Link>
                {
                    (movieArticles && movieArticles.length>0)?(
                        <Dropdown articles={movieArticles}/>
                    ):(
                        <Dropdown />
                    )
                }
            </div>

            <div className="nav-elem">
                <Link to='/entertainment' className={(pathIsActive('/entertainment'))?"active-nav-elem":''}>Entertainment</Link>
                {
                    (entertainmentArticles && entertainmentArticles.length > 0)?(
                        <Dropdown articles={entertainmentArticles}/>
                    ):(
                        <Dropdown />
                    )
                }
            </div>
            <div className="nav-elem">
                <Link to='/education' className={(pathIsActive('/education'))?"active-nav-elem":''}>Education</Link>
                {
                    (educationArticles && educationArticles.length > 0)?(
                        <Dropdown articles={educationArticles}/>
                    ):(
                        <Dropdown />
                    )
                }
            </div>
            <div className="nav-elem">
                <Link to='/auto' className={(pathIsActive('/auto'))?"active-nav-elem":''}>Auto</Link>
                {
                    (autoArticles && autoArticles.length > 0)?(
                        <Dropdown articles={autoArticles}/>
                    ):(
                        <Dropdown />
                    )
                }
            </div>
            <div className="nav-elem">
                <Link to='/health' className={(pathIsActive('/health'))?"active-nav-elem":''}>Life & Health</Link>
                {
                    (healthArticles && healthArticles.length > 0)?(
                        <Dropdown articles={healthArticles}/>
                    ):(
                        <Dropdown />
                    )
                }
            </div>
            
        <div className='dropdown'>
            <input type='checkbox' id='input-checkbox' checked={isChecked} onChange={handleCheckboxChange}/>
            <label htmlFor='input-checkbox'  className='dropdown-button'>
                <span></span>
            </label>
            <div className={`dropdown-content-container ${(isActive)? "show":""}`}>
            <div className='dropdown-content'>
                <div className="dropdown-elem"><Link to='/india'>India</Link></div>
                <div className="dropdown-elem"><Link to='/world'>World</Link></div>
                <div className="dropdown-elem"><Link to='/business'>Business</Link></div>
                <div className="dropdown-elem"><Link to='/tech'>Tech</Link></div>
                <div className="dropdown-elem"><Link to='/sports'>Sports</Link></div>
                <div className="dropdown-elem"><Link to='/cricket'>Cricket</Link></div>
                <div className="dropdown-elem"><Link to='/entertainment'>Entertainment</Link></div>
                <div className="dropdown-elem"><Link to='/education'>Education</Link></div>
                <div className="dropdown-elem"><Link to='/auto'>Auto</Link></div>
                <div className="dropdown-elem"><Link to='/health'>Life & Health</Link></div>
                <div className="dropdown-elem"><Link to='/movie'>Movie</Link></div>
            </div>
            </div>
        </div>
        </div>
      </nav>
  )
}
