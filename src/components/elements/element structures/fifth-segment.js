

import React from 'react';

import './styles/fifth-segment.css';
import MainCard from '../main-card';
import HeadlinesList from '../headlines-list';
import DescCard from '../desc-card';

export default function FifthSegment({ title, containerId }){
    return(

    <div className='fifth-segment-container main-segment-container  segment-container'>
        <div className='section-head fifth-segment-section-head'>
            {title}
        </div>
        <div className='fifth-sec-container'>
            <div className='section section1 fifth-seg-sec'>
                <div className='section-part'>
                    <div className='section-segment'>
                        <MainCard width='95%' height='200px' small = {true}/>
                    </div>
                    <div className='section-segment'>
                        <HeadlinesList dataArr={['Mollit mollit eu amet officia.','Velit sunt cillum deserunt anim velit proident anim anim proident reprehenderit eu irure Lorem.']} containerId={containerId}/>
                    </div>
                </div>
                <div className="section-part section-second-part">
                    <DescCard data='Exercitation Lorem esse amet officia ipsum velit proident anim in.' height='60px' width='45%'/>
                    <DescCard data='Ut exercitation officia officia occaecat sit duis in consecte' height='60px' width='45%'/>
                    <DescCard data='Exercitation Lorem esse amet officia ipsum velit proident anim in.' height='60px' width='45%'/>
                </div>
            </div>
            <div className="section section2">

            </div>
        </div>
    </div>
)}