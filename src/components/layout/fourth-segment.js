

import React from 'react';

import './styles/fourth-segment.css';
import MiniCard from '../elements/mini-card';
import MainCard from '../elements/main-card';
import HeadlinesList from '../elements/headlines-list';
import ImageCard from '../elements/image-card';

export default function FourthSegment() {
  return (
    <div className='fourth-segment-container'>
        <div className='section-head fourth-segment-section-head'>
            ENTERTAINMENT
        </div>
        <div className='fourth-sec-container'>
            <div className='section section1'>
                <div className='section-segment'>
                    <MainCard width='95%' height='190px' small = {true}/>
                    <div className='section-grid'>
                        <MiniCard height='122px' width='100%' data='cupida cupidatat cupidatat dolar incididunt dolor'/>
                        <MiniCard height='122px' width='100%' data='cupida cupidatat cupidatat dolar incididunt dolor'/>
                        <MiniCard height='122px' width='100%' data='cupida cupidatat cupidatat dolar incididunt dolor'/>
                        <MiniCard height='122px' width='100%' data='cupida cupidatat cupidatat dolar incididunt dolor'/>
                        <MiniCard height='122px' width='100%' data='cupida cupidatat cupidatat dolar incididunt dolor'/>
                        <MiniCard height='122px' width='100%' data='cupida cupidatat cupidatat dolar incididunt dolor'/>
                    </div>
                </div>
                <div className='section-segment'>
                    <HeadlinesList/>
                </div>
            </div>
            <div className='section section2'>
                <div className='section-head fourth-segment-small-head'>
                    <span className="navigator-head" style={{fontSize: '13px', marginLeft: '0%'}}>
                        <a>EN</a>
                    </span> TERTAINMENT PHOTOS
                </div>
                <div className='entertainment-section'>
                    <ImageCard height='165px' width='100%' data='Arman made appearence at delhi airport' />
                    <ImageCard height='165px' width='100%' data='Nisi magna sint labore est ea exercitati' />
                    <ImageCard height='165px' width='100%' data='Nisi magna sint labore est ea exercitati' />
                    <ImageCard height='165px' width='100%' data='Nisi magna sint labore est ea exercitati' />
                    <ImageCard height='165px' width='100%' data='Nisi magna sint labore est ea exercitati' />
                    <ImageCard height='165px' width='100%' data='Nisi magna sint labore est ea exercitati' />
                    <ImageCard height='165px' width='100%' data='Nisi magna sint labore est ea exercitati' />
                    <ImageCard height='165px' width='100%' data='Nisi magna sint labore est ea exercitati' />
                    <ImageCard height='165px' width='100%' data='Nisi magna sint labore est ea exercitati' />
                </div>
            </div>
        </div>
    </div>
  )
}
