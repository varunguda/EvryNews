
import React, { useEffect, useState } from 'react';

import './styles/main-card.css';

// https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80

export default function MainCard({ width }) {

    const [ showCard1, setShowCard1 ] = useState(true);

    useEffect(()=>{
        let interval = setInterval(()=>{
            setShowCard1(prev => !prev);
        },5000)
        
        return () => clearInterval(interval);
    },[])

  return (
    <div className='main-card-container' style={{width: `${width}`}}>
        <div className={`main-card main-card-1 ${(showCard1)? "":"hide"}`}>
            <div className='main-card-image-container'>
                <img className='main-card-image' src='https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                alt='main-card-image'/>
            </div>
            <div className='main-card-description'>
                'Aliqua enim ea anim enim ad reprehenderit.'
            </div>ue
        </div>
        <div className={`main-card main-card-2 ${(showCard1)? "hide":""}`}>
            <div className='main-card-image-container'>
                <img className='main-card-image' src='https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80'
                alt='main-card-image'/>
            </div>
            <div className='main-card-description'>
                Reprehenderit consequat deserunt et et minim pariatur nostrud exercitation.
            </div>
        </div>
    </div>
  )
}
