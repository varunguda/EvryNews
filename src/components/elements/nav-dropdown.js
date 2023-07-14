import React from 'react';

import MiniCard from './mini-card';
import DescCard from './desc-card';
import './styles/nav-dropdown.css';

export default function Dropdown({ articles }) {

  return (
    <div className='nav-elem-dropdown'>
      <div className="dropdown-grid">
        {
          (articles && articles.length>0)?(
            articles.slice(0,5).map((article)=>{
              return <strong key={article.url}><MiniCard height='150px' width='100%' imageUrl={article.urlToImage} url={article.url} title={article.title} article={article}/></strong>
            })
          ):(
            [...Array(5)].map((_,index)=>{
              return <strong key={index}><MiniCard height='150px' width='100%'/></strong>
            })
          )
        }

        {
          (articles && articles.length>0)?(
            articles.slice(5,15).map((article)=>{
              return <div className='desc-card' key={article.url}><DescCard height='50px' width='100%' data= {article.title}/></div>
            })
          ):(
            [...Array(10)].map((_,index)=>{
              return <div className='desc-card' key={index}><DescCard height='50px' width='100%'/></div>
            })
          )
        }
      </div>
    </div>
  )
}
