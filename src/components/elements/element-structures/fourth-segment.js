import React from 'react';
import { Link } from 'react-router-dom';

import './styles/fourth-segment.css';
import MiniCard from '../mini-card';
import MainCard from '../main-card';
import HeadlinesList from '../headlines-list';
import ImageCard from '../image-card';

export default function FourthSegment() {
  return (
    <div className='fourth-segment-container main-segment-container segment-container'>
        <div className='section-head fourth-segment-section-head'>
            ENTERTAINMENT
        </div>
        <div className='fourth-sec-container'>
            <div className='section section1'>
                <div className='section-segment'>
                    <MainCard width='95%' height='200px' small = {true}/>
                    <div className='section-grid'>
                        <MiniCard height='120px' width='95%' data='cupida cupidatat cupidatat dolar incididunt dolor'/>
                        <MiniCard height='120px' width='95%' data='cupida cupidatat cupidatat dolar incididunt dolor'/>
                        <MiniCard height='120px' width='95%' data='cupida cupidatat cupidatat dolar incididunt dolor'/>
                        <MiniCard height='120px' width='95%' data='cupida cupidatat cupidatat dolar incididunt dolor'/>
                        <MiniCard height='120px' width='95%' data='cupida cupidatat cupidatat dolar incididunt dolor'/>
                        <MiniCard height='120px' width='95%' data='cupida cupidatat cupidatat dolar incididunt dolor'/>
                    </div>
                </div>
                <div className='section-segment'>
                    <HeadlinesList dataArr={['Mollit mollit eu amet officia.','Velit sunt cillum deserunt anim velit proident anim anim proident reprehenderit eu irure Lorem.']} containerId={2}/>
                </div>
            </div>
            <div className='section section2'>
                <div className='section-head fourth-segment-small-head'>
                    <span className="navigator-head" style={{fontSize: '13px', marginLeft: '0%'}}>
                        <Link to='/'>EN</Link>
                    </span> TERTAINMENT PHOTOS
                </div>
                <div className='entertainment-section'>
                    <ImageCard height='180px' width='95%' data='Arman made appearence at delhi airport' />
                    <ImageCard height='180px' width='95%' data='Nisi magna sint labore est ea exercitati' />
                    <ImageCard height='180px' width='95%' data='Nisi magna sint labore est ea exercitati' />
                    <ImageCard height='180px' width='95%' data='Nisi magna sint labore est ea exercitati' />
                    <ImageCard height='180px' width='95%' data='Nisi magna sint labore est ea exercitati' />
                    <ImageCard height='180px' width='95%' data='Nisi magna sint labore est ea exercitati' />
                    <ImageCard height='180px' width='95%' data='Nisi magna sint labore est ea exercitati' />
                    <ImageCard height='180px' width='95%' data='Nisi magna sint labore est ea exercitati' />
                    <ImageCard height='180px' width='95%' data='Nisi magna sint labore est ea exercitati' />
                </div>
            </div>
        </div>
    </div>
  )
}
