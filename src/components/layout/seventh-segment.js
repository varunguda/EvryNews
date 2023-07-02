import React from 'react';

import './styles/seventh-segment.css';
import MainCard from '../elements/main-card';
import HeadlinesList from '../elements/headlines-list';
import MiniCard from '../elements/mini-card';
import MiniDescCard from '../elements/mini-desc-card';

export default function SeventhSegment() {
  return (
    <div className='seventh-segment-container main-segment-container segment-container'>
        <div className='section-head seventh-segment-section-head'>
            SPORTS
        </div>
        <div className='seventh-sec-container'>
            <div className='section section1 seventh-seg-sec'>
                <div className='section-part'>
                    <div className='section-segment'>
                        <MainCard width='95%' height='200px' small = {true}/>
                    </div>
                    <div className='section-segment'>
                        <HeadlinesList dataArr={['Mollit mollit eu amet officia.','Velit sunt cillum deserunt anim velit proident anim anim proident reprehenderit eu irure Lorem.']} containerId={4}/>
                    </div>
                </div>
                <div className="section-part section-second-part">
                    <MiniCard data='Exercitation Lorem esse amet officia ipsum velit proident anim in.' height='130px' width='100%'/>
                    <MiniCard data='Ut exercitation officia officia occaecat sit duis in consecte' height='130px' width='100%'/>
                    <MiniCard data='Exercitation Lorem esse amet officia ipsum velit proident anim in.' height='130px' width='100%'/>
                    <MiniCard data='Exercitation Lorem esse amet officia ipsum velit proident anim in.' height='130px' width='100%'/>
                </div>
            </div>
            <div className="section section2">
                <MiniDescCard height='60px' width='100%' data={'Voluptate occaecat eiusmod qui ea.'}/>
                <MiniDescCard height='60px' width='100%' data={'Qui deserunt excepteur enim exercitation velit non.'}/>
                <MiniDescCard height='60px' width='100%' data={'Anim in esse incididunt ullamco sunt dolor exercitation.'}/>
                <MiniDescCard height='60px' width='100%' data={'Velit do consequat dolor proident laborum abhgcf hjavft huaf yuevghs'}/>
            </div>
        </div>
        
    </div>
    
  )
}
