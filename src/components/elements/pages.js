import React from 'react';

import { Link } from 'react-router-dom';

import './styles/pages.css';

export default function Pages({ height, width, alp }) {
  return (

    <div className='pages-main-container' style={{height:height, width:width, backgroundColor:'#f1f1f1'}}>
        <div className="page-container">
            {alp}
            <div className='page-counter'>
                <a href='india' className="page-number">1</a>
                <a href='india/2' className="page-number">2</a>
                <a href='india/3' className="page-number">3</a>
                <a href='india/4' className="page-number">4</a>
                <a href='india/5' className="page-number">5</a>
                <a href='india/6' className="page-number">6</a>
            </div>
      </div>
    </div>

)
}
