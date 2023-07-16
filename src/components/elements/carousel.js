
import React, { useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import MiniCard from './mini-card';
import './styles/carousel.css'

export default function NewsCarousel({ articles }){
  
  const responsive = {
    0: { items: 2 },
    568: { items: 4 },
    1024: { items: 5}
  };
  
  let items = [];

  useEffect(() => {
    if (articles) {
      let i=0;
      articles.map((article) => {
        items[i]=(
          <MiniCard
            key={article.url}
            height='155px'
            width='80%'
            imageUrl={article.urlToImage}
            title={article.title}
            url={article.url}
            article={article}
          />
        );
        i+=1
      });
    }
  }, [articles]);
  
  [...Array(8)].map((_,index)=>{
    return items.push(
      <MiniCard
        key={index}
        height='155px'
        width='80%'
      />
    );
  })

  return (
      <AliceCarousel 
      mouseTracking 
      items={items}
      responsive={responsive}
      disableDotsControls={true}
      />
  );
}