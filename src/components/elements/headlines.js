import React from 'react';
import { Link } from 'react-router-dom';

import './styles/headlines.css';
import MiniDescCard from './mini-desc-card';

export default function Headlines({ height, width, category, articles }) {

  return (
    <div className='headlines-container' style={{ height:`${height}`, width: `${width}`}}>
      <div className='headlines-head'>
        <div className="navigator-head" style={{fontSize: '16px', marginLeft: '0%'}}>
          <Link to='/'>EN</Link>
        </div>
        <div>
        <div className='read-more'>{(category)?`TOP HEADLINES IN ${category}`:'TOP HEADLINES'}</div>
        </div>
      </div>

      <div className='headlines-list'>
        {(articles)?
          articles.map((article)=>{
            return <MiniDescCard key={article.url} height='54px' width='96%' imageUrl={article.urlToImage} title={article.title} article={article}/>
          })
          :(
            [...Array(3)].map((index)=>{
              return  <MiniDescCard key={index} height='54px' width='96%'/>
            })
          )
        }
      </div>
    </div>
  )
}
