import React from 'react';

import MiniCard from './mini-card';
import DescCard from './desc-card';
import './styles/nav-dropdown.css';

export default function Dropdown({ articles }) {

  return (
    <div className='nav-elem-dropdown'>
      <div className="dropdown-grid">
        {
            [...Array(5)].map((_,index)=>{
              const article = (articles && articles.length>0 && articles.slice(0,5)[index]) || {};

              return <strong key={article.url || index}><MiniCard height='154px' width='100%' imageUrl={article.urlToImage} url={article.url} title={article.title} article={article}/></strong>
            })
        }

        {
            [...Array(10)].map((_,index)=>{
              const article = (articles && articles.length>0 && articles.slice(5,15)[index]) || {};

              return <div className='desc-card' key={article.url || index}><DescCard height='54px' width='100%' data= {article.title} url={article.url}/></div>
            })
        }
      </div>
    </div>
  )
}
