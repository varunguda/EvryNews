

import React from 'react';

import './styles/fifth-segment.css';
import MainCard from '../elements/main-card';
import HeadlinesList from '../elements/headlines-list';
import DescCard from '../elements/desc-card';

export default function FifthSegment(){
    return(

    <div className='fifth-segment-container main-segment-container segment-container'>
        <div className='section-head fifth-segment-section-head'>
            WORLD
        </div>
        <div className='fifth-sec-container'>
            <div className='section section1'>
                <div className='section-segment'>
                    <MainCard width='95%' height='200px' small = {true}/>
                </div>
                <div className='section-segment'>
                    <HeadlinesList dataArr={['Mollit mollit eu amet officia.','Velit sunt cillum deserunt anim velit proident anim anim proident reprehenderit eu irure Lorem.']} containerId={3}/>
                </div>
            </div>
            <div className="section section2"></div>
        </div>
        <div className='sec-container-segment'>
                    <DescCard data='Exercitation Lorem esse amet officia ipsum velit proident anim in.' height='70px' width='45%'/>
                    <DescCard data='Ut exercitation officia officia occaecat sit duis in consecte' height='70px' width='45%'/>
                </div>
        
    </div>
)}