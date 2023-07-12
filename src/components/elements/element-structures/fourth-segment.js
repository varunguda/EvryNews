import React from 'react';
import { Link } from 'react-router-dom';

import './styles/fourth-segment.css';
import MiniCard from '../mini-card';
import MainCard from '../main-card';
import HeadlinesList from '../headlines-list';
import ImageCard from '../image-card';

export default function FourthSegment({ category, top }) {
  return (
    <div className='fourth-segment-container main-segment-container segment-container' style={{top:top}}>
        {category?(
            <div className='section-head fourth-segment-section-head'>
                {category}
            </div>
        ):''}
        <div className='fourth-sec-container'>
            <div className='section section1'>
                <div className='section-first-segment section-segment'>
                    <MainCard width='100%' height='240px' small = {true}/>
                    <div className='section-grid'>
                        {/* {[...Array(4)].map((index)=>{
                            return <MiniCard key={index} height='155px' width='100%'/>
                        })} */}
                    </div>
                </div>
                <div className='section-sec-segment section-segment'>
                    <HeadlinesList length={3} containerId={2}/>
                </div>
            </div>
            <div className='section section2'>
                <div className='section-head fourth-segment-small-head'>
                    <span className="navigator-head" style={{fontSize: '13px', marginLeft: '0%'}}>
                        <Link to='/'>EN</Link>
                    </span> TERTAINMENT PHOTOS
                </div>
                <div className='entertainment-section'>
                    <ImageCard height='180px' width='95%' data='Arman made appearence at delhi airport yesterdat' />
                    <ImageCard height='180px' width='95%' data='Nisi magna sint labore est ea exercitati' />
                    <ImageCard height='180px' width='95%' data='Nisi magna sint labore est ea exercitati' />
                    <ImageCard height='180px' width='95%' data='Nisi magna sint labore est ea exercitati' />
                    <ImageCard height='180px' width='95%' data='Nisi magna sint labore est ea exercitati' />
                    <ImageCard height='180px' width='95%' data='Nisi magna sint labore est ea exercitati' />
                    <ImageCard height='180px' width='95%' data='Nisi magna sint labore est ea exercitati' />
                    <ImageCard height='180px' width='95%' data='Nisi magna sint labore est ea exercitati' />
                    <ImageCard height='180px' width='95%' data='Nisi magna sint labore est ea exercitatiMagna cupidatat mollit aliquip eiusmod quis ipsum reprehenderit adipisicing commodo nulla.' />
                </div>
            </div>
        </div>
    </div>
  )
}
