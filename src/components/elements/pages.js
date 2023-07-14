import React from 'react';

import { NavLink, useLocation } from 'react-router-dom';

import './styles/pages.css';
import DescCard from './desc-card';

export default function Pages({ height, width, category, articles, totalPages }) {

  const location = useLocation();
  
  const isActive = (path) =>{
    return (location.pathname === path);
  }

  return (
    <div className='pages-main-container' style={{height:height, width:width}}>
        <div className="page-container">
            <div className="page-content">
              {
                (articles && articles.length>0)?(
                  articles.map((article)=>{
                    return <DescCard key={article.url} height='54px' width='100%' data={article.title} url={article.url}/>
                  })
                ):(
                  [...Array(20)].map((_,index)=>{
                    return <DescCard key={index} height='54px' width='100%'/>
                  })
                )
              }
            </div>
            <div className='page-counter'>
              {
                [...Array(totalPages)].map((_,index)=>{
                  return (
                    <NavLink key={index} to={`/${category}${(index>0)?('/'+(index+1)):''}`} className={`page-number ${(isActive(`/${category}${(index>0)?('/'+(index+1)):''}`)?'active-page-number':'')}`}>
                      {index+1}
                    </NavLink>)
                })
              }
            </div>
      </div>
    </div>
  )
}
