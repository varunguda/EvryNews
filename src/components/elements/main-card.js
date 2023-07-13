
import React, { useEffect, useState } from 'react';

import './styles/main-card.css';

export default function MainCard({ height, width, small, articles }) {

    const [ showCard1, setShowCard1 ] = useState(true);

    useEffect(()=>{
        let interval = setInterval(()=>{
            setShowCard1(prev => !prev);
        },5000)
        return () => clearInterval(interval);
    },[])

  return (
    <div className='main-card-container' style={{height: `${height}` ,width: `${width}` }}>
        <div className={`main-card main-card-1 ${(showCard1)? "":"hide"}`}>
            <div className="main-card-image-container">
                {
                    (articles && articles.length>0) ?
                        (<img className={`main-card-image`} src={(articles[0].urlToImage)?articles[0].urlToImage: './site-logo-b&w.png'} alt='main-card' /> )
                        :(
                        <div className="image-placeholder placeholder" />
                        )
                }
            </div>
            {
                (articles && articles.length>0)?
                (<div className='main-card-description' style={{ fontSize: (small)?'1.2rem':'2rem'}}>
                    <div className="main-card-caption">
                        {(articles[0])?articles[0].title:''}
                    </div>
                </div>):(
                    <div className="text-placeholder placeholder"></div>
                )
            }
        </div>

        <div className={`main-card main-card-2 ${(showCard1) ? "hide" : ""}`}>
            <div className="main-card-image-container">
                {
                    (articles && articles.length>0) ?
                        <img className={`main-card-image`} src={(articles[1].urlToImage)?(articles[1].urlToImage): './site-logo-b&w.png'} alt='main-card' /> :
                        <div className="image-placeholder placeholder" />
                }
            </div>
            {
                (articles && articles.length>0) ?
                    (<div className='main-card-description' style={{ fontSize: (small) ? '1.2rem' : '2rem' }}>
                        <div className="main-card-caption">
                            {(articles[1]) ? articles[1].title : ''}
                        </div>
                    </div>) :(
                    <div className="text-placeholder placeholder"></div>
                )
            }
        </div>
    </div>
  )
}
