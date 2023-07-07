import React from 'react';

import { NavLink, useLocation } from 'react-router-dom';

import './styles/pages.css';

export default function Pages({ height, width, alp }) {

  const location = useLocation();
  
  const isActive = (path) =>{
    return (location.pathname === path);
  }

  return (
    <div className='pages-main-container' style={{height:height, width:width, backgroundColor:'#f1f1f1'}}>
        <div className="page-container">
            {alp}
            <div className='page-counter'>
                <NavLink to="/india" className={`page-number ${(isActive('/india')?'active-page-number':'')}`}>
                  1
                </NavLink>
                <NavLink to="/india/2" className={`page-number ${(isActive('/india/2')?'active-page-number':'')}`}>
                  2
                </NavLink>
                <NavLink to="/india/3" className={`page-number ${(isActive('/india/3')?'active-page-number':'')}`}>
                  3
                </NavLink>
                <NavLink to="/india/4" className={`page-number ${(isActive('/india/4')?'active-page-number':'')}`}>
                  4
                </NavLink>
                <NavLink to="/india/5" className={`page-number ${(isActive('/india/5')?'active-page-number':'')}`}>
                  5
                </NavLink>
                <NavLink to="/india/6" className={`page-number ${(isActive('/india/6')?'active-page-number':'')}`}>
                  6
                </NavLink>
            </div>
      </div>
    </div>

)
}
