import React from 'react';

import { NavLink, useLocation } from 'react-router-dom';

import './styles/pages.css';
import DescCard from './desc-card';

export default function Pages({ height, width, category }) {

  const location = useLocation();
  
  const isActive = (path) =>{
    return (location.pathname === path);
  }

  return (
    <div className='pages-main-container' style={{height:height, width:width}}>
        <div className="page-container">
            <div className="page-content">
              <DescCard data='Exercitation Lorem esse amet officia ipsum velit proident anim in.' height='70px' width='100%'/>
              <DescCard data='Exercitation Lorem esse amet officia ipsum velit proident anim in.' height='70px' width='100%'/>
              <DescCard data='Exercitation Lorem esse amet officia ipsum velit proident anim in.' height='70px' width='100%'/>
              <DescCard data='Exercitation Lorem esse amet officia ipsum velit proident anim in.' height='70px' width='100%'/>
              <DescCard data='Exercitation Lorem esse amet officia ipsum velit proident anim in.' height='70px' width='100%'/>
              <DescCard data='Exercitation Lorem esse amet officia ipsum velit proident anim in.' height='70px' width='100%'/>
              <DescCard data='Exercitation Lorem esse amet officia ipsum velit proident anim in.' height='70px' width='100%'/>
              <DescCard data='Exercitation Lorem esse amet officia ipsum velit proident anim in.' height='70px' width='100%'/>
              <DescCard data='Exercitation Lorem esse amet officia ipsum velit proident anim in.' height='70px' width='100%'/>
              <DescCard data='Exercitation Lorem esse amet officia ipsum velit proident anim in.' height='70px' width='100%'/>
              <DescCard data='Exercitation Lorem esse amet officia ipsum velit proident anim in.' height='70px' width='100%'/>
              <DescCard data='Exercitation Lorem esse amet officia ipsum velit proident anim in.' height='70px' width='100%'/>
              <DescCard data='Exercitation Lorem esse amet officia ipsum velit proident anim in.' height='70px' width='100%'/>
              <DescCard data='Exercitation Lorem esse amet officia ipsum velit proident anim in.' height='70px' width='100%'/>
              <DescCard data='Exercitation Lorem esse amet officia ipsum velit proident anim in.' height='70px' width='100%'/>
              <DescCard data='Exercitation Lorem esse amet officia ipsum velit proident anim in.' height='70px' width='100%'/>
              <DescCard data='Exercitation Lorem esse amet officia ipsum velit proident anim in.' height='70px' width='100%'/>
              <DescCard data='Exercitation Lorem esse amet officia ipsum velit proident anim in.' height='70px' width='100%'/>
              <DescCard data='Exercitation Lorem esse amet officia ipsum velit proident anim in.' height='70px' width='100%'/>
              <DescCard data='Exercitation Lorem esse amet officia ipsum velit proident anim in.' height='70px' width='100%'/>
            </div>
            <div className='page-counter'>
                <NavLink to={`/${category}`} className={`page-number ${(isActive(`/${category}`)?'active-page-number':'')}`}>
                  1
                </NavLink>
                <NavLink to={`/${category}/2`} className={`page-number ${(isActive(`/${category}/2`)?'active-page-number':'')}`}>
                  2
                </NavLink>
                <NavLink to={`/${category}/3`} className={`page-number ${(isActive(`/${category}/3`)?'active-page-number':'')}`}>
                  3
                </NavLink>
                <NavLink to={`/${category}/4`} className={`page-number ${(isActive(`/${category}/4`)?'active-page-number':'')}`}>
                  4
                </NavLink>
                <NavLink to={`/${category}/5`} className={`page-number ${(isActive(`/${category}/5`)?'active-page-number':'')}`}>
                  5
                </NavLink>
                <NavLink to={`/${category}/6`} className={`page-number ${(isActive(`/${category}/6`)?'active-page-number':'')}`}>
                  6
                </NavLink>
            </div>
      </div>
    </div>

)
}
