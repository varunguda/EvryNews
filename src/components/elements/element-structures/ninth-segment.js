
import React from 'react';

import './styles/ninth-segment.css';
import MainCard from '../main-card';
import DescCard from '../desc-card';

export default function NinthSegment() {
  return (
    <div className='ninth-segment-container main-segment-container segment-container'>
        <div className="ninth-seg-sec">
            <div className="ninth-seg-first-part">
                <MainCard width='95%' height='320px'/>
            </div>
            <div className="description-grid">
                <DescCard data='Exercitation Lorem esse amet officia ipsum velit proident anim in.' height='70px' width='100%'/>
                <DescCard data='Exercitation Lorem esse amet officia ipsum velit proident anim in.' height='70px' width='100%'/>
                <DescCard data='Exercitation Lorem esse amet officia ipsum velit proident anim in.' height='70px' width='100%'/>
                <DescCard data='Exercitation Lorem esse amet officia ipsum velit proident anim in.' height='70px' width='100%'/>
                <DescCard data='Exercitation Lorem esse amet officia ipsum velit proident anim in.' height='70px' width='100%'/>
                <DescCard data='Exercitation Lorem esse amet officia ipsum velit proident anim in.' height='70px' width='100%'/>
                <DescCard data='Exercitation Lorem esse amet officia ipsum velit proident anim in.' height='70px' width='100%'/>
                <DescCard data='Exercitation Lorem esse amet officia ipsum velit proident anim in.' height='70px' width='100%'/>
            </div>
        </div>
    </div>
  )
}
