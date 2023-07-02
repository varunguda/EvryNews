import React from 'react';

import './styles/sixth-segment.css';
import MainCard from '../elements/main-card';
import DescCard from '../elements/desc-card';

export default function SixthSegment() {
  return (
    <div className='sixth-segment-container main-segment-container segment-container'>
        <div className='section-head sixth-segment-section-head'>
            WORLD
        </div>
        <div className='sixth-sec-container'>
            <div className='sixth-seg-sec'>
                <div className='section-part sixth-sec-part'>
                    <div className='section-segment'>
                        <MainCard width='100%' height='200px' small = {true}/>
                    </div>
                </div>
                <div className="section-part section-second-part">
                    <DescCard data='Exercitation Lorem esse amet officia ipsum velit iia' height='60px' width='45%'/>
                    <DescCard data='Exercitation Lorem esse amet officia ipsum velit iia' height='60px' width='45%'/>
                </div>
            </div>
            <div className='sixth-seg-sec'>
                <div className='sixth-sec-part'>
                    <div className='section-segment'>
                        <MainCard width='100%' height='200px' small = {true}/>
                    </div>
                </div>
                <div className="section-part section-second-part">
                    <DescCard data='Exercitation Lorem esse amet officia ipsum velit iia' height='60px' width='45%'/>
                    <DescCard data='Exercitation Lorem esse amet officia ipsum velit iia' height='60px' width='45%'/>
                </div>
            </div>
            <div className='sixth-seg-sec'>
                <div className='section-part sixth-sec-part'>
                    <div className='section-segment'>
                        <MainCard width='100%' height='200px' small = {true}/>
                    </div>
                </div>
                <div className="section-part section-second-part">
                    <DescCard data='Exercitation Lorem esse amet officia ipsum velit iia' height='60px' width='45%'/>
                    <DescCard data='Exercitation Lorem esse amet officia ipsum velit iia' height='60px' width='45%'/>
                </div>
            </div>
            <div className='sixth-seg-sec'>
                <div className='section-part sixth-sec-part'>
                    <div className='section-segment'>
                        <MainCard width='100%' height='200px' small = {true}/>
                    </div>
                </div>
                <div className="section-part section-second-part">
                    <DescCard data='Exercitation Lorem esse amet officia ipsum velit iia' height='60px' width='45%'/>
                    <DescCard data='Exercitation Lorem esse amet officia ipsum velit iia' height='60px' width='45%'/>
                </div>
            </div>
            <div className='sixth-seg-sec'>
                <div className='section-part sixth-sec-part'>
                    <div className='section-segment'>
                        <MainCard width='100%' height='200px' small = {true}/>
                    </div>
                </div>
                <div className="section-part section-second-part">
                    <DescCard data='Exercitation Lorem esse amet officia ipsum velit iia' height='60px' width='45%'/>
                    <DescCard data='Exercitation Lorem esse amet officia ipsum velit iia' height='60px' width='45%'/>
                </div>
            </div>
            <div className='sixth-seg-sec'>
                <div className='section-part sixth-sec-part'>
                    <div className='section-segment'>
                        <MainCard width='100%' height='200px' small = {true}/>
                    </div>
                </div>
                <div className="section-part section-second-part">
                    <DescCard data='Exercitation Lorem esse amet officia ipsum velit iia' height='60px' width='45%'/>
                    <DescCard data='Exercitation Lorem esse amet officia ipsum velit iia' height='60px' width='45%'/>
                </div>
            </div>
        </div>
        
    </div>
  )
}
