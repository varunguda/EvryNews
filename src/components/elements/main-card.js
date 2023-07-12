
import React, { useEffect, useState } from 'react';

import './styles/main-card.css';

// https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80

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
                    (articles) ?
                        <img className={`main-card-image`} src={(articles && articles[0].image_url)?articles[0].image_url: './site-logo-b&w.png'} alt='main-card' /> :
                        <div className="image-placeholder placeholder" />
                }
            </div>
            {
                (articles)?
                (<div className='main-card-description' style={{ fontSize: (small)?'1.2rem':'2rem'}}>
                    <div className="main-card-caption">
                        {(articles && articles[0].title)?articles[0].title:''}
                    </div>
                </div>):''
            }
        </div>

        <div className={`main-card main-card-2 ${(showCard1) ? "hide" : ""}`}>
            <div className="main-card-image-container">
                {
                    (articles) ?
                        <img className={`main-card-image`} src={(articles && articles[1].image_url)?articles[1].image_url: './site-logo-b&w.png'} alt='main-card' /> :
                        <div className="image-placeholder placeholder" />
                }
            </div>
            {
                (articles) ?
                    (<div className='main-card-description' style={{ fontSize: (small) ? '1.2rem' : '2rem' }}>
                        <div className="main-card-caption">
                            {(articles && articles[1]?.title) ? articles[1].title : ''}
                        </div>
                    </div>) : ''
            }
        </div>
    </div>
  )
}
